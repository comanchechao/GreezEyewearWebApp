import perscriptionIcon from "../assets/images/perscriptionIcon.webp";
import perfectEyesightIcon from "../assets/images/perfectEyesightIcon.webp";
import { Select } from "@chakra-ui/react";
export default function Contents(props) {
  return (
    <div>
      {props.index === 1 && (
        <div className=" h-64 w-full my-5 text-10xl space-y-3">
          <div className=" h-1/2 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center">
            <img src={perscriptionIcon} alt="" />
            <div className="h-full w-full   flex items-start justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl">Prescription</h1>
              <h2 className="text-CoolGray-900 text-xl">
                Used for nearsightedness, farsightedness, astigmatism or
                presbyopia.
              </h2>
            </div>
          </div>
          <div className=" h-1/2 w-full px-3 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center">
            <img src={perfectEyesightIcon} alt="" />
            <div className="h-full w-full   flex items-start justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl">Non-Prescription</h1>
              <h2 className="text-CoolGray-900 text-xl">
                Used for fashion or eye protection.
              </h2>
            </div>
          </div>
        </div>
      )}
      {props.index === 2 && (
        <div className=" h-96 w-full my-5 bg-white rounded-sm flex flex-col items-center justify-around p-20">
          <div className="flex space-x-6 items-center">
            <div className="flex items-center flex-col">
              <h1 className="text-xl tex to-CoolGray-900 font-bold">OD</h1>
              <h2>(Right eye)</h2>
            </div>
            <div className="flex items-center flex-col">
              <h1 className="font-black text-lg mb-5">Sphere (SPH)</h1>
              <Select variant="outline" placeholder="0.00">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <div className="flex items-center flex-col">
              <h1 className="font-black text-lg mb-5">Cylinder (CYL)</h1>

              <Select variant="outline" placeholder="0.00">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
          </div>
          <div className="flex space-x-6 items-center">
            <div className="flex items-center flex-col">
              <h1 className="text-xl tex to-CoolGray-900 font-black">OS</h1>
              <h2>(Left eye)</h2>
            </div>
            <div>
              <Select variant="outline" placeholder="0.00">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <div>
              <Select variant="outline" placeholder="0.00">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
          </div>
        </div>
      )}
      {props.index === 3 && (
        <div className=" h-96 w-full bg-green-400 text-10xl">{props.index}</div>
      )}
      {props.index === 4 && (
        <div className=" h-96 w-full bg-red-500 text-10xl">{props.index}</div>
      )}
    </div>
  );
}
