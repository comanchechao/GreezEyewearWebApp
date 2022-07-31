export default function navbar() {
  return (
    <div className="w-screen  bg-mainPurple z-10 Navbar h-16 flex flex-col fixed lg:px-8 lg:justify-between justify-center align-center text-3xl border-b border-gray-200">
      <div className="flex align-center h-full justify-around flex-row items-center">
        <button className="text-white font-extrabold hidden lg:flex align-center">
          <h1 className="text-2xl mr-2">خونه</h1>
        </button>
        <button className="text-white font-extrabold hidden lg:flex align-center">
          <h1 className="text-2xl mr-2">خرید</h1>
        </button>
      </div>
      <div className="lg:hidden">
        <img
          className="transition ease-in duration-200 hover:bg-darkPurple p-3 rounded-lg cursor-pointer"
          src="../assets/images/SmallPunkyMonkeyLogo.webp"
          alt=""
        />
      </div>
    </div>
  );
}
