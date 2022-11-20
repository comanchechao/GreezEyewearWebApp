import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { Radio, RadioGroup, Spinner, Stack } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { supabase } from "../supabaseClient";
import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/shop/shoppingCart";

export default function Card(props) {
  const product = props.product;

  //store configurations

  const dispatch = useDispatch();

  // getting images

  const [loading, setLoading] = useState(false);
  const [path, setPath] = useState(null);
  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const { t, i18n } = useTranslation();

  // image download function

  const downloadFirstImage = async () => {
    setPath(product.firstImage);
    try {
      setLoading(true);
      const { data, error } = await supabase.storage
        .from("product-images")
        .download(product.firstImage);

      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setFirstImage(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  // image 2 download function

  const downloadSecondImage = async () => {
    setPath(product.secondImage);
    try {
      setLoading(true);
      const { data, error } = await supabase.storage
        .from("product-images")
        .download(product.secondImage);

      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setSecondImage(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    downloadFirstImage();
    downloadSecondImage();
  }, []);

  const [value, setValue] = useState("1");

  return (
    <div className="flex-col justify-center relative shadow-xl my-10 w-screen lg:w-96 h-rem26      bg-white flex  pb-2 cursor-pointer items-start">
      {loading === false ? (
        <img
          className="object-contain h-full w-full"
          src={firstImage}
          onMouseOver={(e) => (e.currentTarget.src = secondImage)}
          onMouseOut={(e) => (e.currentTarget.src = firstImage)}
        />
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="yellow.500"
            size="xl"
          />
        </div>
      )}

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
          <h2 className="text-3xl capitalize p-2 underline-offset-8 underline font-bold hover:bg-mainBlue transition ease-in duration-300 cursor-pointer hover:text-CoolGray-900">
            {product.Title}
          </h2>
          <h2 className="text-xl p-2">${product.Price}</h2>
        </div>
        <div className="flex items-center justify-center flex-col">
          <button
            onClick={() => {
              dispatch(
                cartActions.addToCart({ product: product, quantity: 1 })
              );
            }}
            className="transition py-2 text-xl w-full items-center justify-center space-x-3  flex ease-in duration-300 border-mainBlue border-dashed border-2 hover:bg-mainBlue text-CoolGray-900  hover:text-CoolGray-900 active:bg-mainBlue active:text-CoolGray-900 bg-white  rounded-sm  "
            type="submit"
          >
            <ShoppingCart size={28} weight="fill" />
            {t("addToCart")}
          </button>
          <Link to={`/productDetail/${product.id}`}>
            <button
              className=" px-8 transition ease-in duration-300  hover:bg-mainBlue py-2 text-2xl my-3 hover:text-CoolGray-900 bg-mainWhite text-CoolGray-900  rounded-sm border-2 border-dashed border-CoolGray-900"
              type="submit"
            >
              {t("showMe")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
