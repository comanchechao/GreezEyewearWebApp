import Navbar from "../components/navbar";
import { useEffect } from "react";
import Menu from "../components/shoppingPageMenu";
import Card from "../components/card";
import { gsap } from "gsap";
import { useRef } from "react";
import { supabase } from "../supabaseClient";
import { useState } from "react";

export default function shoppingPage() {
  // getting products
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data, error } = await supabase.from("Products").select();

      if (error) throw error;
      alert("fetched niagga");
      console.log(data);
      setProducts(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  const mainBg = useRef();
  const filterMenu = useRef();

  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(mainBg.current, {
      opacity: "0",
      y: -10,
      duration: 0.5,
      delay: 1,
    });
    tl.from(filterMenu.current, {
      opacity: "0",
      x: -10,
      duration: 0.4,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-auto w-screen overflow-x-hidden">
      <Navbar />
      <div className="h-auto w-screen pt-20 lg:px-28 flex items-center justify-center bg-CoolGray-800">
        <div
          ref={mainBg}
          className=" h-full w-screen  mb-16 bg-mainCream mt-9 justify-center items-center flex flex-col  "
        >
          <div
            ref={filterMenu}
            className=" w-full h-24 flex items-center justify-start bg-CoolGray-900 z-10"
          >
            <Menu className=""></Menu>
          </div>
          <div className="h-full w-full bg-mainCream grid justify-items-center grid-cols-1 lg:grid-cols-3 grid-rows-1  px-5">
            {products.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
