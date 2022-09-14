import { Upload } from "phosphor-react";
import { useState } from "react";
import { useRef } from "react";
import Navbar from "../components/navbar";
import { supabase } from "../supabaseClient";
import { Tab } from "@headlessui/react";

export default function newBlog() {
  const [section, setSection] = useState(1);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const firstImageUpload = async (event) => {
    try {
      event.preventDefault()
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      setFirstImage(filePath);

      let { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const { data, error } = await supabase.from("blogs").insert([
        {
          "blog-title": blogTitle,
          "first-title": firstTitle,
          "first-info": firstInfo,
          "first-content": firstContent,
          "first-image": firstImage,
        },
      ]);
      if (error) throw error;
      alert("blog added");
    } catch (error) {
       alert(error.error_description || error.message);
    }
  };

  const [blogTitle, setBlogTitle] = useState("");

  const [firstTitle, setFirstTitle] = useState("");
  const [firstImage, setFirstImage] = useState(null);
  const [firstInfo, setFirstInfo] = useState("");
  const [firstContent, setFirstContent] = useState("");

  const [secondTitle, setSecondTitle] = useState("");
  const [secondInfo, setSecondInfo] = useState("");
  const [secondContent, setSecondContent] = useState("");

  const [thirdTitle, setThirdTitle] = useState("");
  const [thirdInfo, setThirdInfo] = useState("");
  const [thirdContent, setThirdContent] = useState("");

  const [forthTitle, setForthTitle] = useState("");
  const [forthInfo, setForthInfo] = useState("");
  const [forthContent, setFourthContent] = useState("");

  const [fifthTItle, setFifthTitle] = useState("");
  const [fifthInfo, setFifthInfo] = useState("");
  const [fifthContent, setFifthContent] = useState("");

  const [sixthTitle, setSixthTitle] = useState("");
  const [sixthInfo, setSixthInfo] = useState("");
  const [sixthContent, setSixthContent] = useState("");

  const [seventhTitle, setSevenTitle] = useState("");
  const [seventhInfo, setSeventhInfo] = useState("");
  const [seventhContent, setSeventhContent] = useState("");

  const [eighthTitle, setEighthTitle] = useState("");
  const [eightInfo, setEightInfo] = useState("");
  const [eightContent, setEightContent] = useState("");

  const [ninethTitle, setNinethTitle] = useState("");
  const [ninethInfo, setNinethInfo] = useState("");
  const [ninethContent, setNinethContent] = useState("");

  const [tenTitle, setTenTitle] = useState("");
  const [tenInfo, setTenInfo] = useState("");
  const [tenContent, setTenContent] = useState("");

  return (
    <div className="w-screen h-full bg-CoolGray-800">
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col h-full w-full"
      >
        <div className="flex flex-wrap w-full h-52 justify-around mt-24 items-center">
          <label className="text-6xl text-mainWhite font-bold">
            Blog Title
          </label>
          <input
            placeholder="type ... "
            type="text"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            className="py-8 w-2/3 px-4 rounded text-left text-CoolGray-900 text-xl bg-mainWhite"
          />
        </div>
        <div className="flex my-4 p-5 lg:mx-20 shadow-2xl rounded space-y-6 flex-col justify-center  items-center">
          <div className="flex space-y-4 w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="file"
              className=" cursor-pointer hover:bg-mainYellow hover:text-CoolGray-900 transition p-5 bg-CoolGray-900 rounded-full text-white"
            >
              <Upload size={40}></Upload>
            </label>
            <input
              onChange={firstImageUpload}
              disabled={uploading}
              id="file"
              type="file"
              className="hidden"
            />
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-200 font-bold text-3xl"
            >
              Enter Title
            </label>
            <input
              value={firstTitle}
              onChange={(e) => setFirstTitle(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-5 lg:w-1/2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <div className="p-4 flex w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-200 font-bold text-3xl"
            >
              more info
            </label>
            <input
              value={firstInfo}
              onChange={(e) => setFirstInfo(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-24 w-full text-CoolGray-100 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-100 font-bold text-3xl"
            >
              content
            </label>
            <textarea
              value={firstContent}
              onChange={(e) => setFirstContent(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-52 w-full text-CoolGray-100 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="sticky flex justify-start p-5 items-center w-full">
            <div className="sticky w-14 h-14 bg-Cyan-600 text-CoolGray-50 text-4xl rounded-full font-bold flex justify-center align-center items-center">
              1
            </div>
          </div>
        </div>

        <div className="flex space-y-6 p-5 bg-mainCream lg:mx-20 shadow-2xl rounded flex-col justify-center items-center">
          <div className="flex space-y-4 w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="file"
              className=" cursor-pointer hover:bg-mainYellow hover:text-CoolGray-900 transition p-5 bg-CoolGray-900 rounded-full text-white"
            >
              <Upload size={40}></Upload>
            </label>
            <input
              placeholder="type ... "
              id="file"
              type="file"
              className="hidden"
            />
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-900 font-bold text-3xl"
            >
              Enter Title
            </label>
            <input
              value={secondTitle}
              onChange={(e) => setSecondTitle(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-5 lg:w-1/2 w-full text-CoolGray-100 bg-CoolGray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <div className="p-4 flex w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-900 font-bold text-3xl"
            >
              more info
            </label>
            <input
              value={secondInfo}
              onChange={(e) => setSecondInfo(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-24 w-full text-CoolGray-100 bg-CoolGray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-900 font-bold text-3xl"
            >
              content
            </label>
            <textarea
              value={secondContent}
              onChange={(e) => setSecondContent(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-52 w-full text-CoolGray-100 bg-CoolGray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="sticky flex justify-start p-5 items-center w-full">
            <div className="sticky w-14 h-14 bg-Cyan-600 text-CoolGray-50 text-4xl rounded-full font-bold flex justify-center align-center items-center">
              2
            </div>
          </div>
        </div>

        <div className="flex space-y-6 p-5 flex-col justify-center shadow-2xl rounded lg:mx-20 items-center">
          <div className="flex space-y-4 w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="file"
              className=" cursor-pointer hover:bg-mainYellow hover:text-CoolGray-900 transition p-5 bg-CoolGray-900 rounded-full text-white"
            >
              <Upload size={40}></Upload>
            </label>
            <input
              placeholder="type ... "
              id="file"
              type="file"
              className="hidden"
            />
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-100 font-bold text-3xl"
            >
              Enter Title
            </label>
            <input
              value={thirdTitle}
              onChange={(e) => setThirdTitle(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-5 lg:w-1/2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <div className="p-4 flex w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-100 font-bold text-3xl"
            >
              more info
            </label>
            <input
              value={thirdInfo}
              onChange={(e) => setThirdInfo(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-24 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-100 font-bold text-3xl"
            >
              content
            </label>
            <textarea
              value={thirdContent}
              onChange={(e) => setThirdContent(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-52 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="flex justify-start p-5 items-center w-full">
            <div className="sticky w-14 h-14 bg-Cyan-600 text-CoolGray-50 text-4xl rounded-full font-bold flex justify-center align-center items-center">
              3
            </div>
          </div>
        </div>

        <div className="flex space-y-6 bg-mainWhite lg:mx-20 shadow-2xl rounded my-8 p-5 flex-col justify-center items-center">
          <div className="flex space-y-4 w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="file"
              className=" cursor-pointer hover:bg-mainYellow hover:text-CoolGray-900 transition p-5 bg-CoolGray-900 rounded-full text-white"
            >
              <Upload size={40}></Upload>
            </label>
            <input
              placeholder="type ... "
              id="file"
              type="file"
              className="hidden"
            />
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-900 font-bold text-3xl"
            >
              Enter Title
            </label>
            <input
              value={forthTitle}
              onChange={(e) => setForthTitle(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-5 lg:w-1/2 w-full text-CoolGray-100 bg-CoolGray-800 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <div className="p-4 flex w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-900 font-bold text-3xl"
            >
              more info
            </label>
            <input
              value={forthInfo}
              onChange={(e) => setForthInfo(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-24 w-full text-CoolGray-100 bg-CoolGray-800 rounded-lg border border-gray-800 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-900 font-bold text-3xl"
            >
              content
            </label>
            <textarea
              value={forthContent}
              onChange={(e) => setForthInfo(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-52 w-full text-CoolGray-100 bg-CoolGray-800 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex justify-start p-5 items-center w-full">
            <div className="sticky w-14 h-14 bg-Cyan-600 text-CoolGray-50 text-4xl rounded-full font-bold flex justify-center align-center items-center">
              4
            </div>
          </div>
        </div>

        <div className="p-5 flex flex-wrap space-y-5 justify-around space-x-5">
          <div className="flex flex-wrap space-y-5 justify-center space-x-5">
            <input
              placeholder="Author"
              type="text"
              className="p-5  rounded-xl shadow-2xl text-white font-bold text-2xl hover:bg-CoolGray-700 transition bg-CoolGray-200"
            />
            <input
              placeholder="refrence"
              className="p-5 rounded-xl shadow-2xl text-white font-bold text-2xl hover:bg-CoolGray-700 transition bg-CoolGray-200"
            />
          </div>

          <div className="flex justify-center items-center">
            <button className="p-5 rounded-xl shadow-2xl text-white font-bold text-2xl bg-red-600">
              Publish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
