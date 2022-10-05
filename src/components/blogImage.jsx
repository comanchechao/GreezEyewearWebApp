import { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../supabaseClient";
import { Spinner } from "phosphor-react";

export default function blogImage(props) {
  const [loading, setLoading] = useState(false);
  const [path, setPath] = useState(null);
  const [image, setImage] = useState("");
  const downloadImage = async () => {
    setPath(props.BlogImage);
    try {
      setLoading(true);
      console.log(props);
      const { data, error } = await supabase.storage
        .from("blog-images")
        .download(props.BlogImage);

      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setImage(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    downloadImage();
  }, []);

  if (loading === true) {
    return (
      <div className="w-52 flex justify-center items-center h-52 bg-gray-500">
        <Spinner className="animate-spin" size={32} />
      </div>
    );
  } else {
    return (
      <div className="w-full h-full">
        <img className="w-full h-full" src={image} alt="" />
      </div>
    );
  }
}