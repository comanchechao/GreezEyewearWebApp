import Navbar from "./components/navbar";
export default function Admin() {
  return (
    <div className="h-full w-screen bg-mainYellow">
      <Navbar />
      <div className="flex w-screen h-screen bg-mainBlue flex-col justify-center items-center">
        <div>
          <h2 className="text-3xl">hi Admin</h2>
        </div>
      </div>
    </div>
  );
}
