import Navbar from "../components/navbar";
import blogOne from "../assets/images/blogOne.webp";
import blogTwo from "../assets/images/blogTwo.webp";
import blogThree from "../assets/images/blogThree.webp";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useState } from "react";

export default function blog() {
  let { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [thirdImage, setThirdImage] = useState("");
  const [fourthImage, setFourthImage] = useState("");

  const getBlog = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select()
        .eq("id", id);
      if (error) throw error;
      setBlog(data[0]);
      downloadImage1(data[0].firstImage);
      downloadImage2(data[0].secondImage);
      downloadImage3(data[0].thirdImage);
      downloadImage4(data[0].forthImage);
    } catch (error) {
    } finally {
    }
  };

  const downloadImage1 = async (path) => {
    if (blog !== []) {
      console.log(path);
      try {
        const { data, error } = await supabase.storage
          .from("blog-images")
          .download(path);

        if (error) {
          throw error;
        }
        console.log(path);
        const url = URL.createObjectURL(data);
        setFirstImage(url);
      } catch (error) {
        console.log("Error downloading image: ", error.message);
      }
    }
  };
  const downloadImage2 = async (path) => {
    if (blog !== []) {
      console.log(path);
      try {
        const { data, error } = await supabase.storage
          .from("blog-images")
          .download(path);

        if (error) {
          throw error;
        }
        console.log(path);
        const url = URL.createObjectURL(data);
        setSecondImage(url);
      } catch (error) {
        console.log("Error downloading image: ", error.message);
      }
    }
  };
  const downloadImage3 = async (path) => {
    if (blog !== []) {
      console.log(path);
      try {
        const { data, error } = await supabase.storage
          .from("blog-images")
          .download(path);

        if (error) {
          throw error;
        }
        console.log(path);
        const url = URL.createObjectURL(data);
        setThirdImage(url);
      } catch (error) {
        console.log("Error downloading image: ", error.message);
      }
    }
  };
  const downloadImage4 = async (path) => {
    if (blog !== []) {
      console.log(path);
      try {
        const { data, error } = await supabase.storage
          .from("blog-images")
          .download(path);

        if (error) {
          throw error;
        }
        console.log(path);
        const url = URL.createObjectURL(data);
        setFourthImage(url);
      } catch (error) {
        console.log("Error downloading image: ", error.message);
      }
    }
  };

  useEffect(() => {
    getBlog();

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="flex w-screen h-full text-mainCream bg-CoolGray-900">
        <div className="flex flex-col mt-20 lg:mt-32 w-full h-full">
          <div className="flex justify-center font-bold p-5 text-6xl">
            {blog.blogTitle}
          </div>
          <div className="flex h-full w-full justify-center items-center align-center">
            <img
              src={firstImage}
              alt=""
              className=" lg:w-1/2 lg:h-1/2 object-contain"
            />
          </div>
          <div className="flex space-y-5 mt-4 flex-col justify-center align-center items-center">
            <h2 className="text-3xl font-bold">{blog.firstTitle}</h2>
            <h2 className="text-xl">2022 may 2</h2>
            <h2 className="text-lg">{blog.firstInfo}</h2>

            <p className="text-xl p-20">{blog.firstContent}</p>
          </div>
          <div className="section2 bg-mainCream text-CoolGray-900 flex flex-col">
            <div className="flex lg:p-5 flex-col space-y-3 h-full w-full justify-center items-center align-center">
              <img
                src={secondImage}
                alt=""
                className="w-full  lg:w-1/2 w-full  lg:h-1/2 object-contain"
              />
              <h2 className="font-bold text-2xl"> {blog.secondTitle}</h2>
              <h2 className="font-bold text-2xl"> {blog.secondInfo}</h2>

              <p className="text-xl p-20">{blog.secondContent}</p>
            </div>
          </div>

          <div className="section2 bg-CoolGray-900 text-mainWhite flex flex-col">
            <div className="flex lg:p-5 flex-col space-y-3 h-full w-full justify-center items-center align-center">
              <img
                src={thirdImage}
                alt=""
                className="w-full  lg:w-1/2 w-full  lg:h-1/2 object-contain"
              />
              <h2 className="text-lg">{blog.thirdInfo}</h2>
              <h2 className="font-bold text-2xl"> {blog.thirdTitle}</h2>

              <p className="text-xl p-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum cumque itaque animi voluptas voluptatum accusantium
                maxime. Quis ab ipsa alias expedita ea earum inventore quisquam,
                est perferendis sint mollitia officia corporis possimus vero vel
                reiciendis nobis labore fugit similique consequatur magnam at
                dolores ut sapiente? At error delectus ipsum quae earum, esse,
                totam enim voluptatum expedita sint odit? Quisquam, placeat
                culpa. Sequi omnis obcaecati debitis odit nisi at quos quidem
                voluptatibus! Debitis dolores beatae quos cumque aliquid esse
                iure ad?
              </p>
            </div>
          </div>

          <div className="section4 bg-CoolGray-900 text-mainWhite flex flex-col">
            <div className="flex lg:p-5 flex-col space-y-3 h-full w-full justify-center items-center align-center">
              <img
                src={fourthImage}
                alt=""
                className="w-full  lg:w-1/2 w-full  lg:h-1/2 object-contain"
              />
              <h2 className="text-lg">{blog.forthTitle}</h2>
              <h2 className="font-bold text-2xl"> {blog.forthInfo}</h2>

              <p className="text-xl p-20">
               {blog.forthContent}
              </p>
            </div>
          </div>

          <div className="flex  p-3 justify-end space-x-5 items-center">
            <div className="flex justify-center items-center">
              <button className="rounded p-5 bg-mainCream text-CoolGray-900 font-bold text-2xl">
                Continue Shopping
              </button>
            </div>
            <div className="flex justify-end items-center align-center space-x-3">
              <h2>by author</h2>
              <h2>by Azim Eyewear</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
