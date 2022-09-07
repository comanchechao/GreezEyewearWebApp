import { Upload } from "phosphor-react";
import Navbar from "../components/navbar";
export default function newBlog() {
  return (
    <div className="w-screen h-screen bg-mainWhite">
      <Navbar />
      <div className="flex justify-center flex-col h-full w-full">
        <div className="flex space-y-6 flex-col justify-center mt-20 items-center">
          <div className="flex space-y-4 w-full h-full flex-col justify-center items-center">
            <button className="hover:bg-mainYellow hover:text-CoolGray-900 transition p-5 bg-CoolGray-900 rounded-full text-white">
              <Upload size={40}></Upload>
            </button>
            <label
              for="large-input"
              class="block mb-2 text-CoolGray-900 font-bold text-3xl"
            >
              Enter Title
            </label>
            <input
              type="text"
              id="large-input"
              class="block p-5 lg:w-1/2 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <div className="flex w-full h-full flex-col justify-center items-center">
            <label
              for="large-input"
              class="block mb-2 text-CoolGray-900 font-bold text-3xl"
            >
              content
            </label>
            <textarea
              type="text"
              id="large-input"
              class="block p-3 lg:w-2/3 h-52 w-full text-CoolGray-900 bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="flex justify-around space-x-5">
            <div className="flex justify-center space-x-5">
              <button className="p-5 disabled rounded-xl shadow-2xl text-white font-bold text-2xl bg-CoolGray-900">
                previous section
              </button>
              <button className="p-5 rounded-xl shadow-2xl text-white font-bold text-2xl bg-CoolGray-900">
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
    </div>
  );
}
