import { useState } from "react";
import { SquaresFour, Rows } from "phosphor-react";
import Navbar from "./components/navbar";
export default function Admin() {
  const [tab, setTab] = useState("");

  return (
    <div className="h-full w-screen bg-mainBlue">
      <Navbar />

      {tab !== "" && (
        <div className="w-full flex h-48 justify-center align-center items-end">
          <button
            onClick={() => {
              setTab("");
            }}
            className="w-52 h-24 rounded-xl bg-mainYellow text-white text-xl font-bold"
          >
            back
          </button>
        </div>
      )}

      {tab === "" ? (
        <div className="flex w-screen h-screen lg:w-screen  flex-col justify-center items-end">
          <div className="flex justify-center align-center w-full lg:w-full h-full">
            <div
              onClick={() => {
                setTab("blog");
              }}
              className="flex flex-col bg-pink-300 w-full h-full align-center justify-center items-center hover:bg-pink-700 hover:text-white transition-all hover:text-3xl"
            >
              <h2 className="text-2xl lg:text-5xl font-bold">
                Blog Management
              </h2>
            </div>
            <div
              onClick={() => {
                setTab("sales");
              }}
              className="flex flex-col bg-mainWhite w-full h-full align-center justify-center items-center hover:bg-pink-700 hover:text-white transition-all hover:text-3xl"
            >
              <h2 className="text-2xl  lg:text-5xl font-bold">
                Sales Management
              </h2>
            </div>
          </div>
        </div>
      ) : tab === "sales" ? (
        <div className="flex w-full  p-5 shadow-2xl justify-center items-center">
          <div className="flex bg-mainWhite space-x-2  space-y-5 p-5 justify-center w-full h-full flex-row flex-wrap">
            <div className="flex flex-col space-y-3 p-2 justify-center items-center w-full lg:w-1/3 h-52 rounded bg-pink-400 shadoow-xl">
              <div className="bg-gray-400 h-24 w-11/12"></div>
              <h2 className="text-3xl font-bold">Title</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, numquam!
              </h3>
            </div>

            <div className="flex flex-col lg:space-x-2 space-y-3 p-2 justify-center items-center w-full lg:w-1/3 h-52 rounded bg-pink-400 shadoow-xl">
              <div className="bg-gray-400 h-24 w-11/12"></div>
              <h2 className="text-3xl font-bold">Title</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, numquam!
              </h3>
            </div>

            <div className="flex flex-col space-y-3 p-2 justify-center items-center w-full lg:w-1/3 h-52 rounded bg-pink-400 shadoow-xl">
              <div className="bg-gray-400 h-24 w-11/12"></div>
              <h2 className="text-3xl font-bold">Title</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, numquam!
              </h3>
            </div>

            <div className="flex flex-col space-y-3 p-2 justify-center items-center w-full lg:w-1/3 h-52 rounded bg-pink-400 shadoow-xl">
              <div className="bg-gray-400 h-24 w-11/12"></div>
              <h2 className="text-3xl font-bold">Title</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, numquam!
              </h3>
            </div>

            <div className="flex flex-col space-y-3 p-2 justify-center items-center w-full lg:w-1/3 h-52 rounded bg-pink-400 shadoow-xl">
              <div className="bg-gray-400 h-24 w-11/12"></div>
              <h2 className="text-3xl font-bold">Title</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, numquam!
              </h3>
            </div>
          </div>
        </div>
      ) : tab === "blog" ? (
        <div className="flex w-full justify-center p-5">
          <div className="flex flex-col items-center space-y-2 w-2/3 h-full shadow-2xl rounded">
            <div className="flex w-full items-center justify-between px-3 bg-gray-200 h-20">
              <input
                className="rounded"
                placeholder="Search ... "
                type="text"
              />
              <div className="flex p-2">
                <SquaresFour className="bg-mainYellow rounded" size={32} />
                <Rows size={32} />
              </div>
            </div>

            <div className="flex items-center  justify-around bg-mainBlue w-full h-24 rounded shadow-xl">
              <div className="w-24 h-20 bg-gray-400 rounded-xl"></div>
              <h2>title</h2>
              <h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore, sit.
              </h2>
            </div>

            <div className="flex items-center  justify-around bg-mainBlue w-full h-24 rounded shadow-xl">
              <div className="w-24 h-20 bg-gray-400 rounded-xl"></div>
              <h2>title</h2>
              <h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore, sit.
              </h2>
            </div>

            <div className="flex items-center  justify-around bg-mainBlue w-full h-24 rounded shadow-xl">
              <div className="w-24 h-20 bg-gray-400 rounded-xl"></div>
              <h2>title</h2>
              <h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore, sit.
              </h2>
            </div>

            <div className="flex items-center  justify-around bg-mainBlue w-full h-24 rounded shadow-xl">
              <div className="w-24 h-20 bg-gray-400 rounded-xl"></div>
              <h2>title</h2>
              <h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore, sit.
              </h2>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
