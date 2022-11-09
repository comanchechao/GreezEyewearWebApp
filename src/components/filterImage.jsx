import { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../supabaseClient";
import { Spinner } from "phosphor-react";

export default function filterImage(props) {
  const [loading, setLoading] = useState(false);
  const [path, setPath] = useState(null);
  const [image, setImage] = useState("");
  const downloadImage = async () => {
    setPath(props.filterImage);
    try {
      setLoading(true);
      const { data, error } = await supabase.storage
        .from("filter-images")
        .download(props.filterImage);

      if (error) throw error;
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
      <div className="w-8 flex justify-center items-center h-8">
        <Spinner
          className="animate-spin text-mainBlue object-contain w-12"
          size={15}
        />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <img className="object-contain w-12" src={image} alt="" />
      </div>
    );
  }
}
