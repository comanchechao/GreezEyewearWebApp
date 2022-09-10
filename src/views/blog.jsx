import Navbar from "../components/navbar";
import blogOne from "../assets/images/blogOne.webp";
import blogTwo from "../assets/images/blogTwo.webp";
import blogThree from "../assets/images/blogThree.webp";
import { useEffect } from "react";
export default function blog() {
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="flex w-screen h-full text-mainCream bg-CoolGray-900">
        <div className="flex flex-col mt-20 lg:mt-32 w-full h-full">
          <div className="flex h-full w-full justify-center items-center align-center">
            <img
              src={blogOne}
              alt=""
              className=" lg:w-1/2 lg:h-1/2 object-contain"
            />
          </div>
          <div className="flex space-y-5 mt-4 flex-col justify-center align-center items-center">
            <h2 className="text-3xl font-bold">Title</h2>
            <h2 className="text-xl">2022 may 2</h2>

            <p className="text-xl p-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, reiciendis et quo saepe cupiditate laborum nesciunt
              explicabo tempora eaque. Praesentium, accusamus qui. Enim
              dignissimos aliquid eum necessitatibus, possimus odit molestias
              dolores reprehenderit nesciunt sunt ipsa similique impedit quae
              quo est doloribus. Nemo veniam quidem quos quasi sit, perferendis
              tempora eos dolores amet ipsa officiis voluptatem. Ea nemo sint
              maxime ratione repellat laboriosam rem mollitia dolorem alias.
              Quia ratione rerum inventore deleniti veniam fugiat alias,
              voluptates neque, eos reprehenderit deserunt amet soluta, velit
              doloremque praesentium animi tenetur aperiam. Repudiandae
              laboriosam suscipit cupiditate animi autem maiores dolor qui.
              Earum distinctio numquam, culpa laborum, ullam facere quidem
              molestiae error ab dolorum fugit nulla repellat nostrum quam vel
              consequatur. Sit cumque facilis non nesciunt nostrum asperiores
              officia accusantium eum blanditiis distinctio autem, obcaecati
              incidunt consequatur culpa, nemo at accusamus corrupti! Laboriosam
              incidunt maiores, nostrum reiciendis, mollitia eius et laborum
              nihil enim eveniet culpa officiis ullam beatae animi veniam fugiat
              illum. Pariatur deleniti odit, aut fugit beatae quaerat? Nesciunt,
              voluptatibus! Recusandae odit quasi porro soluta optio illum,
              repellendus, tempore provident assumenda dolores repudiandae
              dolorem earum corrupti perspiciatis! Dolorum perferendis
              voluptatum sapiente cupiditate, velit quae porro ipsam iure
              distinctio sint repudiandae consequuntur voluptates architecto qui
              dolores!
            </p>
          </div>
          <div className="section2 bg-mainCream text-CoolGray-900 flex flex-col">
            <div className="flex lg:p-5 flex-col space-y-3 h-full w-full justify-center items-center align-center">
              <img
                src={blogTwo}
                alt=""
                className="w-full  lg:w-1/2 w-full  lg:h-1/2 object-contain"
              />
              <h2 className="font-bold text-2xl"> some parada</h2>

              <p className="text-xl p-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum cumque itaque animi voluptas voluptatum accusantium
                maxime. Quis ab ipsa alias expedita ea earum inventore quisquam,
                est perferendis sint mollitia officia corporis possimus vero vel
                reiciendis nobis labore fugit similique consequatur magnam at
                dolores ut sapiente? At error delectus ipsum quae earum, esse,
                totam enim voluptatum expedita sint odit? Quisquam, placeat
                culpa. Sequi omnis obcaecati debitis odit nisi at quos quidem
                voluptatibus! Debitis dolores beatae quos cumque aliquid esse
                iure ad?
              </p>
            </div>
          </div>

          <div className="section2 bg-CoolGray-900 text-mainWhite flex flex-col">
            <div className="flex lg:p-5 flex-col space-y-3 h-full w-full justify-center items-center align-center">
              <img
                src={blogThree}
                alt=""
                className="w-full  lg:w-1/2 w-full  lg:h-1/2 object-contain"
              />
              <h2 className="font-bold text-2xl"> some Mascot</h2>

              <p className="text-xl p-20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum cumque itaque animi voluptas voluptatum accusantium
                maxime. Quis ab ipsa alias expedita ea earum inventore quisquam,
                est perferendis sint mollitia officia corporis possimus vero vel
                reiciendis nobis labore fugit similique consequatur magnam at
                dolores ut sapiente? At error delectus ipsum quae earum, esse,
                totam enim voluptatum expedita sint odit? Quisquam, placeat
                culpa. Sequi omnis obcaecati debitis odit nisi at quos quidem
                voluptatibus! Debitis dolores beatae quos cumque aliquid esse
                iure ad?
              </p>
            </div>
          </div>

          <div className="flex  p-3 justify-end space-x-5 items-center">
            <div className="flex justify-center items-center">
              <button className="rounded p-5 bg-mainCream text-CoolGray-900 font-bold text-2xl">Continue Shopping</button>
            </div>
            <div className="flex justify-end items-center align-center space-x-3">
              <h2>by author</h2>
              <h2>by Azim Eyewear</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
