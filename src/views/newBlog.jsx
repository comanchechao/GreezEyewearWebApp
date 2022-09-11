import { Upload } from "phosphor-react";
import { useState } from "react";
import { useRef } from "react";
import Navbar from "../components/navbar";
import { Tab } from "@headlessui/react";

export default function newBlog() {
  const [section, setSection] = useState(1);

  const [firstTitle, setFirstTitle] = useState("");
  const [secondTitle, setSecondTitle] = useState("");
  const [thirdTitle, setThirdTitle] = useState("");
  const [forthTitle, setForthTitle] = useState("");
  const [fifthTItle, setFifthTitle] = useState("");
  const [sixthTitle, setSixthTitle] = useState("");
  const [seventhTitle, setSevenTitle] = useState("");
  const [eighthTitle, setEighthTitle] = useState("");
  const [ninethTitle, setNinethTitle] = useState("");
  const [tenTitle, setTenTitle] = useState("");

  return (
    <div className="w-screen h-full bg-CoolGray-800">
      <Navbar />
      <div className="flex justify-center flex-col h-full w-full">
        <div className="flex space-y-6 flex-col justify-center mt-24 items-center">
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
              className="block mb-2 text-CoolGray-100 font-bold text-3xl"
            >
              Enter Title
            </label>
            <input
              type="text"
              id="large-input"
              className="block p-5 lg:w-1/2 w-full text-CoolGray-100 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        {section === 2 ? (
          <div className="flex space-y-6 flex-col justify-center mt-24 items-center">
            <div className="flex justify-start p-5 items-center w-full">
              <div className="fixed w-14 h-14 bg-Cyan-600 text-CoolGray-50 text-4xl rounded-full font-bold flex justify-center align-center items-center">
                {section}
              </div>
            </div>
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
                className="block mb-2 text-CoolGray-100 font-bold text-3xl"
              >
                Enter Title
              </label>
              <input
                type="text"
                id="large-input"
                className="block p-5 lg:w-1/2 w-full text-CoolGray-100 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                type="text"
                id="large-input"
                className="block p-3 lg:w-2/3 h-52 w-full text-CoolGray-100 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="sticky flex justify-start p-5 items-center w-full">
              <div className="sticky w-14 h-14 bg-Cyan-600 text-CoolGray-50 text-4xl rounded-full font-bold flex justify-center align-center items-center">
                2
              </div>
            </div>
          </div>
        ) : section === 3 ? (
          <div className="flex space-y-6 flex-col justify-center mt-24 items-center">
            <div className="flex justify-start p-5 items-center w-full">
              <div className="fixed w-14 h-14 bg-Cyan-600 text-CoolGray-50 text-4xl rounded-full font-bold flex justify-center align-center items-center">
                {section}
              </div>
            </div>
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
                className="block mb-2 text-CoolGray-100 font-bold text-3xl"
              >
                Enter Title
              </label>
              <input
                type="text"
                id="large-input"
                className="block p-5 lg:w-1/2 w-full text-CoolGray-100 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                type="text"
                id="large-input"
                className="block p-3 lg:w-2/3 h-52 w-full text-CoolGray-100 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>{" "}
          </div>
        ) : null}

        <div className="p-5 flex flex-wrap space-y-5 justify-around space-x-5">
          <div className="flex justify-center space-x-5">
            <button
              onClick={() => {
                if (section > 1) {
                  setSection(section - 1);
                }
              }}
              className="p-5 disabled rounded-xl shadow-2xl text-white font-bold text-2xl hover:bg-CoolGray-700 transition bg-CoolGray-900"
            >
              previous section
            </button>
            <button
              onClick={() => {
                setSection(section + 1);
              }}
              className="p-5 rounded-xl shadow-2xl text-white font-bold text-2xl hover:bg-CoolGray-700 transition bg-CoolGray-900"
            >
              next section
            </button>
          </div>

          <div className="flex justify-center items-center">
            <button className="p-5 rounded-xl shadow-2xl text-white font-bold text-2xl bg-red-600">
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
