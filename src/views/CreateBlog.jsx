import { useState } from "react";
import { Tab } from "@headlessui/react";
import Navbar from "../components/navbar";
import { Upload } from "phosphor-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    sectionOne: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    sectionTwo: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    sectionThree: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
    sectionFour: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    sectionFive: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    sectionSix: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  });

  return (
    <div className="w-screen h-full bg-CoolGray-400">
      <Navbar />
      <div className="flex items-center justify-center flex-col h-full w-full">
        <div className="w-full  mt-10 px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category ,idx) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {idx + 1}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="bg-CoolGray-900 mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-CoolGray-900 p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div
                    key={idx}
                    className="flex space-y-6 flex-col justify-center mt-24 items-center"
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
                        {idx + 1}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
