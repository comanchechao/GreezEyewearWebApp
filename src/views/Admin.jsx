import { useState } from "react";
import { SquaresFour, Rows, FilePlus } from "phosphor-react";
import Navbar from "../components/navbar";
export default function Admin() {
  const [tab, setTab] = useState("");

  return (
    <div className="h-full overflow-x-hidden w-screen bg-mainCream">
      <Navbar />

      {tab !== "" && (
        <div className="w-full space-x-5 mt-8 flex h-48 justify-center align-center items-center">
          <button
            onClick={() => {
              setTab("");
            }}
            className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-3xl hover:text-gray-600 font-bold my-3 bg-white outline-2 outline rounded-full outline-black"
          >
            back
          </button>
          {tab === "blog" && (
            <button className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 hover:text-gray-600 font-bold text-3xl my-3 bg-white outline-2 outline rounded-full outline-black">
              New Blog
            </button>
          )}
        </div>
      )}

      {tab === "" ? (
        <div className="flex w-screen h-screen flex-col justify-center items-end">
          <div className="flex justify-center align-center flex-col w-screen h-screen">
            <div
              onClick={() => {
                setTab("blog");
              }}
              className="flex flex-col bg-mainBlue cursor-pointer w-full h-full align-center justify-center items-center hover:bg-white   transition-all hover:text-3xl"
            >
              <h2 className="text-2xl lg:text-5xl font-bold">
                Blog Management
              </h2>
            </div>
            <div
              onClick={() => {
                setTab("sales");
              }}
              className="flex flex-col bg-mainWhite w-full h-full cursor-pointer align-center justify-center items-center hover:bg-white   transition-all hover:text-3xl"
            >
              <h2 className="text-2xl  lg:text-5xl font-bold">
                Sales Management
              </h2>
            </div>
          </div>
        </div>
      ) : tab === "sales" ? (
        <div className="flex w-full p-4 shadow-2xl justify-center items-center">
          <div className="flex bg-mainWhite text-gray-800 space-x-2  space-y-5 p-5 justify-center w-full h-full flex-row flex-wrap">
            <div className="flex flex-col space-y-3 justify-center items-center w-full lg:w-1/3 h-52 rounded bg-white shadoow-xl">
              <div className="bg-gray-200 h-32 w-full"></div>
              <h2 className="text-3xl font-bold">Title</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, numquam!
              </h3>
            </div>

            <div className="flex flex-col lg:space-x-2 space-y-3 justify-center items-center w-full lg:w-1/3 h-52 rounded bg-white shadoow-xl">
              <div className="bg-gray-200 h-32 w-full"></div>
              <h2 className="text-3xl font-bold">Title</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, numquam!
              </h3>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center w-full lg:w-1/3 h-52 rounded bg-white shadoow-xl">
              <div className="bg-gray-200 h-32 w-full"></div>
              <h2 className="text-3xl font-bold">Title</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, numquam!
              </h3>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center w-full lg:w-1/3 h-52 rounded bg-white shadoow-xl">
              <div className="bg-gray-200 h-32 w-full"></div>
              <h2 className="text-3xl font-bold">Title</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, numquam!
              </h3>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center w-full lg:w-1/3 h-52 rounded bg-white shadoow-xl">
              <div className="bg-gray-200 h-32 w-full"></div>
              <h2 className="text-3xl font-bold">Title</h2>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, numquam!
              </h3>
            </div>
          </div>
        </div>
      ) : tab === "blog" ? (
        <div className="flex flex-col items-center space-y-5 w-full justify-center p-5 capitalize">
          <div className="flex w-full items-center justify-between px-3 bg-CoolGray-900 h-20">
            <input
              className="rounded p-3 w-80"
              placeholder="Search ... "
              type="text"
            />
            <div className="flex p-2">
              <SquaresFour className="bg-mainYellow rounded" size={32} />
              <Rows size={32} />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 w-full lg:w-2/3font-bold text-xl  h-full shadow-2xl rounded">
            <div className="flex items-center  justify-around bg-mainBlue w-full h-24 rounded shadow-xl">
              <div className="w-24 h-20 bg-gray-400 rounded-xl"></div>
              <h2 className="text-3xl font-bold">title</h2>
              <h2 className="text-xl xs:hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore, sit.
              </h2>
              <button className="transition font-bold text-xl hover:text-white bg-mainYellow p-3 rounded">
                show more
              </button>
            </div>

            <div className="flex items-center  justify-around bg-mainBlue w-full h-24 rounded shadow-xl">
              <div className="w-24 h-20 bg-gray-400 rounded-xl"></div>
              <h2 className="text-3xl font-bold">title</h2>
              <h2 className="text-xl xs:hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore, sit.
              </h2>
              <button className="transition font-bold text-xl hover:text-white bg-mainYellow p-3 rounded">
                show more
              </button>
            </div>

            <div className="flex items-center  justify-around bg-mainBlue w-full h-24 rounded shadow-xl">
              <div className="w-24 h-20 bg-gray-400 rounded-xl"></div>
              <h2 className="text-3xl font-bold">title</h2>
              <h2 className="text-xl xs:hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore, sit.
              </h2>
              <button className="transition font-bold text-xl hover:text-white bg-mainYellow p-3 rounded">
                show more
              </button>
            </div>

            <div className="flex items-center  justify-around bg-mainBlue w-full h-24 rounded shadow-xl">
              <div className="w-24 h-20 bg-gray-400 rounded-xl"></div>
              <h2 className="text-3xl font-bold">title</h2>
              <h2 className="text-xl xs:hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore, sit.
              </h2>
              <button className="transition font-bold text-xl hover:text-white bg-mainYellow p-3 rounded">
                show more
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
