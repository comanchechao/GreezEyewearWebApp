import blogOne from "../assets/images/blogOne.webp";
import { SquaresFour, Rows } from "phosphor-react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useEffect } from "react";
import BlogImage from "./blogImage.jsx";

export default function blogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstImage, setFirstImage] = useState(null);

  const getBlogs = async function () {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("blogs").select();
      if (error) throw error;
      setBlogs(data);
      console.log(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
    console.log(blogs);
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if(blogs === []){
    return <div className="w-full h-54 flex justify-center items-center">
      <h2 className="text-4xl">
        No blogs posted
      </h2>
    </div>
  }

  return (
    <div className="w-full h-full">
      {blogs.map((blog) => {
        return (
          <div
            key={blog.id}
            className="flex flex-wrap rounded space-y-5 px-4 py-7 w-full h-full  bg-mainWhite shadow-2xl"
          >
            <div className="flex bg-white items-center rounded justify-end w-full h-12">
              <SquaresFour
                className=" transition hover:bg-mainBlue"
                size={45}
              />
              <Rows className=" transition hover:bg-mainBlue" size={45} />
            </div>
            <div className="flex flex-col shadow-2xl space-y-2 md:flex-row lg:flex-row bg-mainCream  h-full">
              <div className="w-full">
                <BlogImage BlogImage={blog.firstImage} />
              </div>
              <div className="flex p-2 space-y-2 flex-col justify-center items-center w-full">
                <h1 className="text-4xl flex-col font-bold">
                  {blog.blogTitle}
                </h1>
                <p className="text-xl">Sunday 2021</p>
                <p className="text-xl">{blog.firstInfo}</p>
              </div>
              <div className="flex justify-start p-5  items-end">
                <Link to={`/blogs/${blog.id}`}>
                  <button className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-2xl hover:text-gray-600 font-bold my-3 bg-white outline-2 outline rounded-full outline-black">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
