import cardPicture1 from "../assets/images/cardPicture1.webp";
import cardPicture2 from "../assets/images/cardPicture2.webp";

import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import React, { Component } from "react";
// import { RadioGroup } from "@headlessui/react";
// import { useState } from "react";
// let [plan, setPlan] = useState("startup");
export default function Card() {
  const [value, setValue] = useState("1");
  return (
    <div className="flex-col relative shadow-xl my-10 w-screen lg:w-96 h-rem26 border border-mainWhite bg-white flex justify-between pb-2 cursor-pointer items-start">
      <img
        src={cardPicture1}
        onMouseOver={(e) => (e.currentTarget.src = cardPicture2)}
        onMouseOut={(e) => (e.currentTarget.src = cardPicture1)}
      />
      <button
        className="transition absolute p-5  top-40 left-64 lg:left-80 ml-8 flex ease-in duration-300 border-white hover:bg-mainBlue text-mainWhite hover:text-CoolGray-900 active:bg-mainBlue active:text-CoolGray-900  text-3xl   bg-CoolGray-900  rounded-full  "
        type="submit"
      >
        <ShoppingCart size={28} weight="fill" />
      </button>
      <div className=" h-full w-full   flex justify-center items-center">
        <RadioGroup colorScheme="blackAlpha" onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio size="lg" className=" bg-mainYellow p-3" value="1"></Radio>

            <Radio size="lg" className=" bg-blue-700 p-3" value="2"></Radio>

            <Radio size="lg" className=" bg-red-700 p-3" value="3"></Radio>
            <Radio size="lg" className=" bg-green-700 p-3" value="4"></Radio>
            <Radio size="lg" className=" bg-purple-700 p-3" value="5"></Radio>
            <Radio size="lg" className=" bg-pink-700 p-3" value="6"></Radio>
          </Stack>
        </RadioGroup>
      </div>
      <div className="flex space-x-6 items-center  self-center">
        <div className="flex items-center flex-col">
          <h2 className="text-2xl p-2 underline-offset-8 underline font-bold hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
            St Michel
          </h2>
          <h2 className="text-xl p-2">$500</h2>
        </div>
        <Link to={"/productDetail"}>
          <button
            className=" px-8 transition ease-in duration-300  hover:bg-mainBlue py-2 text-2xl my-3 hover:text-CoolGray-900 bg-CoolGray-900 text-mainWhite rounded-full"
            type="submit"
          >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
