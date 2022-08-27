import Navbar from "./components/navbar";
export default function Admin() {
  return (
    <div className="h-full w-screen bg-mainYellow">
      <Navbar />
      <div className="flex w-screen h-screen lg:w-screen bg-mainBlue flex-col justify-center items-center">
        <div className="flex mt-4 justify-center align-center w-full lg:w-full h-5/6">
          <div className="flex flex-col bg-pink-300 w-full h-full align-center justify-center items-center hover:bg-pink-700 hover:text-white transition-all hover:text-3xl">
            <h2 className="text-2xl lg:text-5xl font-bold">blog management</h2>
          </div>
          <div className="flex flex-col bg-mainWhite w-full h-full align-center justify-center items-center hover:bg-pink-700 hover:text-white transition-all hover:text-3xl">
            <h2 className="text-2xl  lg:text-5xl font-bold">sales management</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
