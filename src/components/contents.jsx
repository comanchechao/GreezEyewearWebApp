import perscriptionIcon from "../assets/images/perscriptionIcon.webp";
import perfectEyesightIcon from "../assets/images/perfectEyesightIcon.webp";
import clearLens from "../assets/images/clearLens.webp";
import blueCutLens from "../assets/images/blueCutLens.webp";
import drivingLens from "../assets/images/drivingLens.webp";
import tintLens from "../assets/images/tintLens.webp";
import photoChromicLens from "../assets/images/photoChromicLens.webp";
import thinLens from "../assets/images/thinLens.webp";
import mediumLens from "../assets/images/mediumLens.webp";
import thickLens from "../assets/images/thickLens.webp";
import polarizedLens from "../assets/images/polarizedLens.webp";
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
            <div className="flex items-center flex-col">
              <h1 className="font-black text-lg mb-5">Axis</h1>

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
            <div>
              <Select variant="outline" placeholder="0.00">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
          </div>
          <div className="flex items-center flex-col self-start mt-9">
            <h1 className="text-xl tex to-CoolGray-900 font-black">PD</h1>
            <h2>(Pupillary Distance)</h2>
          </div>
          <div className="flex items-center self-start flex-col">
            <Select variant="outline" placeholder="0.00">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
        </div>
      )}
      {props.index === 3 && (
        <div className=" h-full w-full my-5 text-10xl space-y-3">
          <div className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center">
            <img src={clearLens} alt="" />
            <div className="h-full w-full   flex items-start justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl">Clear</h1>
              <h2 className="text-CoolGray-900 text-xl">
                (Traditional, transparent lenses perfect for everyday use)
              </h2>
            </div>
          </div>
          <div className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center">
            <img src={blueCutLens} alt="" />
            <div className="h-full w-full   flex items-start justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl">
                Blue-light Blocking
              </h1>
              <h2 className="text-CoolGray-900 text-xl leading-5">
                (Clear lens, for everyday use with digital devices)
              </h2>
            </div>
          </div>
          <div className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center">
            <img src={drivingLens} alt="" />
            <div className="h-full w-full   flex items-start justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl">Driving</h1>
              <h2 className="text-CoolGray-900 text-xl leading-5">
                (Safer driving day and night)
              </h2>
            </div>
          </div>
          <div className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center">
            <img src={tintLens} alt="" />
            <div className="h-full w-full   flex items-start justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl">Tint</h1>
              <h2 className="text-CoolGray-900 text-xl leading-5">
                (Permanently colored. Tint strength: light 20%, dark 80%)
              </h2>
            </div>
          </div>
          <div className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center">
            <img src={photoChromicLens} alt="" />
            <div className="h-full w-full   flex items-start justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl">Photochromic</h1>
              <h2 className="text-CoolGray-900 text-xl leading-5">
                (Clear indoor, darken outside)
              </h2>
            </div>
          </div>
          <div className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center">
            <img src={polarizedLens} alt="" />
            <div className="h-full w-full   flex items-start justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl">Polarized</h1>
              <h2 className="text-CoolGray-900 text-xl leading-5">
                (Reduce glare from shiny surfaces)
              </h2>
            </div>
          </div>
        </div>
      )}
      {props.index === 4 && (
        <div className=" h-auto w-full my-5 text-10xl space-y-3">
          <div className=" h-28 w-full px-3 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center">
            <img src={thickLens} alt="" />
            <div className="h-full w-full   flex items-start justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-2xl">
                1.50 Standard Spheric
              </h1>
            </div>
          </div>
          <div className=" h-28 w-full px-3 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center">
            <img src={mediumLens} alt="" />
            <div className="h-full w-full   flex items-start justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-2xl">
                1.60 Super Thin Aspheric
              </h1>
            </div>
          </div>
          <div className=" h-28 w-full px-3 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center">
            <img src={thinLens} alt="" />
            <div className="h-full w-full   flex items-start justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-2xl">
                1.74 Ultra Thin Aspheric
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
