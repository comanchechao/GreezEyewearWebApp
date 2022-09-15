import { useState } from "react";
import { Tab } from "@headlessui/react";
import Navbar from "../components/navbar";
import { Upload } from "phosphor-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sectionOneTitle, setSectionOneTitle] = useState("");
  const [sectionOneContent, setSectionOneContent] = useState("");
  const [sectionOneInfo, setSectionOneInfo] = useState("");

  const [sectionTwoTitle, setSectionTwoTitle] = useState("");
  const [sectionTwoContent, setSectionTwoContent] = useState("");
  const [sectionTwoInfo, setSectionTwoInfo] = useState("");

  const [sectionThreeTitle, setSectionThreeTitle] = useState("");
  const [sectionThreeContent, setSectionThreeContent] = useState("");
  const [sectionThreeInfo, setSectionThreeInfo] = useState("");

  const [sectionFourTitle, setSectionFourTitle] = useState("");
  const [sectionFourContent, setSectionFourContent] = useState("");
  const [sectionFourInfo, setSectionFourInfo] = useState("");

  const [sectionFiveTitle, setSectionFiveTitle] = useState("");
  const [sectionFiveContent, setSectionFiveContent] = useState("");
  const [sectionFiveInfo, setSectionFiveInfo] = useState("");

  const [sectionSixTitle, setSectionSixTitle] = useState("");
  const [sectionSixContent, setSectionSixContent] = useState("");
  const [sectionSixInfo, setSectionSixInfo] = useState("");

  let [categories, setCategories] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ]);

  const handleChange = () => {
    setCategories(
      categories.map((posts) =>
        // Here you accept a id argument to the function and replace it with hard coded 🤪 2, to make it dynamic.
        {
          "Changed Name";
        }
      )
    );
  };

  return (
    <div className="w-screen h-full bg-CoolGray-900">
      <Navbar />
      <div className="flex items-center justify-center flex-col h-full w-full">
        <div className="w-full  mt-10 px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex m-2 space-x-1 rounded-sm  bg-CoolGray-900 p-1">
              {Object.keys(categories).map((category, idx) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full font-bold  rounded-sm  py-4 text-2xl  leading-5 text-CoolGray-900 transition duration-300",
                      " ",
                      selected
                        ? "bg-mainWhite shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {idx + 1}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="bg-CoolGray-900 p-2  m-2">
              {categories.map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    " rounded-sm  bg-CoolGray-900 border-2 border-mainWhite p-3",
                    " "
                  )}
                >
                  <div
                    key={idx}
                    className="flex space-y-14 flex-col justify-center mt-24 items-center"
                  >
                    <div className="flex space-y-4 w-full h-full flex-col justify-center items-center">
                      <label
                        htmlFor="file"
                        className=" cursor-pointer hover:bg-mainYellow hover:text-CoolGray-900 transition p-5 bg-CoolGray-900 rounded-full text-white"
                      >
                        <Upload size={40}></Upload>
                      </label>
                      <input id="file" type="file" className="hidden" />
                      <label
                        htmlFor="large-input"
                        className="block my-4 text-mainWhite font-bold text-4xl"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        className="block p-5 rounded-full lg:w-1/2 w-full text-CoolGray-800 bg-mainCream border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></input>
                    </div>
                    <div className="p-4 flex w-full h-full flex-col justify-center items-center">
                      {/* <label
                        htmlFor="large-input"
                        className="block mb-2 text-CoolGray-100 font-bold text-3xl"
                      >
                        more info
                      </label>
                      <input
                        type="text"
                        id="large-input"
                        className="block p-3 lg:w-2/3 h-24 w-full text-CoolGray-800 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      /> */}

                      <label
                        htmlFor="large-input"
                        className="block mb-5 text-mainWhite font-bold text-3xl lg:text-5xl"
                      >
                        Content
                      </label>
                      <textarea
                        type="text"
                        id="large-input"
                        className="block p-3 lg:w-2/3 h-72 w-full text-CoolGray-800 bg-mainCream rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="text-mainCream">
                      {JSON.stringify(posts.title)}
                    </div>
                    <div className="sticky flex justify-start p-5 items-center w-full">
                      <div className="sticky w-14 h-14 bg-mainYellow text-CoolGray-900 text-4xl rounded-full font-bold flex justify-center align-center items-center">
                        {idx + 1}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="p-5 flex flex-col space-y-5 justify-center  items-center">
          <div className="flex flex-col space-y-5 justify-center ">
            <input
              placeholder="Author"
              type="text"
              className="p-5  rounded-sm shadow-md focus:text-CoolGray-900 text-CoolGray-900   hover:text-CoolGray-900 font-bold text-2xl hover:bg-mainCream transition bg-mainWhite"
            />
            <input
              placeholder="Refrence"
              className="p-5 rounded-sm placeholder-gray-400 shadow-md focus:text-CoolGray-900 text-CoolGray-900   hover:text-CoolGray-900 font-bold text-2xl hover:bg-mainCream transition bg-mainWhite"
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              className="px-10 py-4 my-3 rounded-full  font-black  text-CoolGray-900 hover:text-CoolGray-900 hover:bg-mainCream text-2xl  duration-300
transition bg-mainYellow"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
