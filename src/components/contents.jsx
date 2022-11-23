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
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  glassTypeActions,
  lensActions,
  lensTypeActions,
  lensWidthActions,
} from "../Store/shop/orderDetail";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Contents(props) {
  // getting actions from redux statemanager in HOMEDIR/store

  const glassType = useSelector((state) => state.glassType.type);
  const sphereOD = useSelector((state) => state.lensDetail.sphere.OD);
  const sphereOS = useSelector((state) => state.lensDetail.sphere.OS);
  const cylinderOD = useSelector((state) => state.lensDetail.cylinder.OD);
  const cylinderOS = useSelector((state) => state.lensDetail.cylinder.OS);
  const axisOD = useSelector((state) => state.lensDetail.axis.OD);
  const axisOS = useSelector((state) => state.lensDetail.axis.OS);
  const lensType = useSelector((state) => {
    return state.lensType.lens;
  });
  const lensWidth = useSelector((state) => state.lensWidth.width);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const [glassesType, setGlassesType] = useState("");
  const [perscription, setPerscription] = useState({
    rightEye: { SPH: 0, CYL: 0, Axis: 0 },
    leftEye: { SPH: 0, CYL: 0, Axis: 0 },
    PD: 0,
  });
  const [lensePicker, setLensePicker] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const changeState = () => {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };
  const [lenseThickness, setLenseThickness] = useState(1.5);
  return (
    <div>
      {props.index === 0 && (
        <div className=" h-64 w-full my-5 text-10xl space-y-3">
          <div
            onClick={() => {
              changeState();
              dispatch(glassTypeActions.setType("prescription"));
            }}
            value="prescription"
            className={` h-1/2 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300   hover:bg-mainBlue cursor-pointer active:bg-mainCream flex justify-center items-center ${
              isClicked ? "bg-mainBlue" : "bg-white"
            }`}
          >
            <div className="h-full w-full  items-end flex  justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-2xl mt-2 text-left lg:text-4xl">
                {t("prescription")}
              </h1>
              <h2 className="text-CoolGray-700 text-right text-base  lg:text-lg my-2">
                {t("prescriptionDetail")}
              </h2>
            </div>
            <img loading="lazy" src={perscriptionIcon} alt="" />
          </div>
          <div
            onClick={() => {
              changeState();
              dispatch(glassTypeActions.setType("NONprescription"));
            }}
            value="NONprescription"
            className={` h-1/2 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300   hover:bg-mainBlue cursor-pointer active:bg-mainCream flex justify-center items-center ${
              isClicked ? "bg-mainBlue" : "bg-white"
            }`}
          >
            <div className="h-full w-full  items-end flex  justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-2xl mt-2 text-left lg:text-4xl">
                {" "}
                {t("non")}
              </h1>
              <h2 className="text-CoolGray-700 text-right text-base  lg:text-lg my-2">
                {t("nonDetail")}
              </h2>
            </div>
            <img loading="lazy" src={perfectEyesightIcon} alt="" />
          </div>
        </div>
      )}
      {props.index === 1 && (
        <div className=" h-96 w-full my-5 bg-white rounded-sm flex flex-col items-center justify-around p-10">
          <div className="flex space-x-6 items-center">
            <div className="flex items-center flex-col">
              <h1 className=" text-lg my-2   to-CoolGray-900 font-bold">OD</h1>
              <h2>( {t("right")})</h2>
            </div>
            <div className="flex items-center flex-col">
              <h1 className="font-black text-lg mb-5">Sphere (SPH)</h1>
              <input
                type="number"
                onChange={(e) => {
                  dispatch(lensActions.setSphereOD(e.target.value));
                }}
                className="border-gray-200 text-center rounded border-2"
                placeholder="sphere right"
              />
            </div>
            <div className="flex items-center flex-col">
              <h1 className="font-black text-lg mb-5">Cylinder (CYL)</h1>

              <input
                type="number"
                onChange={(e) => {
                  dispatch(lensActions.setCylinderOD(e.target.value));
                }}
                className="border-gray-200 text-center rounded border-2"
                placeholder="0.00"
              />
            </div>
            <div className="flex items-center flex-col">
              <h1 className="font-black text-lg mb-5">Axis</h1>

              <input
                type="number"
                onChange={(e) => {
                  dispatch(lensActions.setAxisOD(e.target.value));
                }}
                className="border-gray-200 text-center rounded border-2"
                placeholder="0.00"
              />
            </div>
          </div>
          <div className="flex space-x-6 items-center">
            <div className="flex items-center flex-col">
              <h1 className=" text-lg my-2 tex to-CoolGray-900 font-black">
                OS
              </h1>
              <h2>( {t("left")})</h2>
            </div>
            <div>
              <input
                type="number"
                onChange={(e) => {
                  dispatch(lensActions.setSphereOS(e.target.value));
                }}
                className="border-gray-200 text-center rounded border-2"
                placeholder="left sphere"
              />
            </div>
            <div>
              <input
                type="number"
                onChange={(e) => {
                  dispatch(lensActions.setCylinderOS(e.target.value));
                }}
                className="border-gray-200 text-center rounded border-2"
                placeholder="0.00"
              />
            </div>
            <div>
              <input
                type="number"
                onChange={(e) => {
                  dispatch(lensActions.setAxisOS(e.target.value));
                }}
                className="border-gray-200 text-center rounded border-2"
                placeholder="0.00"
              />
            </div>
          </div>
          <div className="flex items-center flex-col self-start mt-9">
            <h1 className=" text-lg my-2 tex to-CoolGray-900 font-black">PD</h1>
            <h2>(Pupillary Distance)</h2>
          </div>
          <div className="flex items-center self-start flex-col">
            <input
              type="number"
              onChange={(e) => {
                dispatch(lensDetail.setSphere(e.target.value));
              }}
              className="border-gray-200 text-center rounded border-2"
              placeholder="0.00"
            />
          </div>
        </div>
      )}
      {props.index === 2 && (
        <div className=" h-full w-full my-5 text-10xl space-y-3">
          <div
            onClick={(e) => {
              dispatch(lensTypeActions.setLensType("clear"));
            }}
            className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center"
          >
            <div className="h-full w-full   flex items-end justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl"> {t("clear")}</h1>
              <h2 className="text-CoolGray-900  text-lg my-2">
                {t("clearDetail")}
              </h2>
            </div>
            <img loading="lazy" src={clearLens} alt="" />
          </div>
          <div
            onClick={(e) => {
              dispatch(lensTypeActions.setLensType("blue light blocking"));
            }}
            className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center"
          >
            <div className="h-full w-full   flex items-end justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl">{t("blueLight")}</h1>
              <h2 className="text-CoolGray-900  text-lg my-2 leading-5">
                {t("blueDetail")}
              </h2>
            </div>
            <img loading="lazy" src={blueCutLens} alt="" />
          </div>
          <div
            onClick={(e) => {
              dispatch(lensTypeActions.setLensType("Driving"));
            }}
            className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center"
          >
            <div className="h-full w-full   flex items-end justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl"> {t("driving")}</h1>
              <h2 className="text-CoolGray-900  text-lg my-2 leading-5">
                {t("drivingDetail")}
              </h2>
            </div>
            <img loading="lazy" src={drivingLens} alt="" />
          </div>
          <div
            onClick={(e) => {
              dispatch(lensTypeActions.setLensType("Tint"));
            }}
            className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center"
          >
            <div className="h-full w-full   flex items-end justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl">{t("tint")}</h1>
              <h2 className="text-CoolGray-900  text-lg my-2 leading-5">
                {t("tintDetail")}
              </h2>
            </div>
            <img loading="lazy" src={tintLens} alt="" />
          </div>
          <div
            onClick={(e) => {
              dispatch(lensTypeActions.setLensType("Photochrominc"));
            }}
            className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center"
          >
            <div className="h-full w-full   flex items-end justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl">{t("photo")}</h1>
              <h2 className="text-CoolGray-900  text-lg my-2 leading-5">
                {t("photoDetail")}
              </h2>
            </div>
            <img loading="lazy" src={photoChromicLens} alt="" />
          </div>
          <div
            onClick={(e) => {
              dispatch(lensTypeActions.setLensType("polarized"));
            }}
            className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center"
          >
            <div className="h-full w-full   flex items-end justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-4xl">{t("polarized")}</h1>
              <h2 className="text-CoolGray-900  text-lg my-2 leading-5">
                {t("polarizedDetail")}
              </h2>
            </div>
            <img loading="lazy" src={polarizedLens} alt="" />
          </div>
        </div>
      )}
      {props.index === 3 && (
        <div className=" h-auto w-full my-5 text-10xl space-y-3">
          <div
            onClick={(e) => {
              dispatch(lensWidthActions.setLensWidth("1.50 standard spheric"));
            }}
            className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center"
          >
            <div className="h-full w-full   flex items-end justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-2xl">
                1.50 Standard Spheric
              </h1>
            </div>
            <img loading="lazy" src={thickLens} alt="" />
          </div>
          <div
            onClick={(e) => {
              dispatch(
                lensWidthActions.setLensWidth("1.60 Super Thin Aspheric")
              );
            }}
            className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center"
          >
            <div className="h-full w-full   flex items-end justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-2xl">
                1.60 Super Thin Aspheric
              </h1>
            </div>
            <img loading="lazy" src={mediumLens} alt="" />
          </div>
          <div
            onClick={(e) => {
              dispatch(
                lensWidthActions.setLensWidth("1.74 ultra thin aspheric")
              );
            }}
            className=" h-28 w-full px-8 transition shadow-lg rounded-sm ease-in duration-300 hover:bg-mainBlue cursor-pointer active:bg-mainCream bg-white flex justify-center items-center"
          >
            <div className="h-full w-full   flex items-end justify-center px-4 flex-col">
              <h1 className="text-CoolGray-900 text-2xl">
                1.74 Ultra Thin Aspheric
              </h1>
            </div>
            <img loading="lazy" src={thinLens} alt="" />
          </div>
        </div>
      )}
      {props.index === 4 && (
        <div className="h-96 w-full bg-mainWhite flex flex-col items-center">
          <h1 className="text-5xl border-b-4 border-dashed p-4 rounded-full my-4 border-CoolGray-900">
            لنز انتخابی شما
          </h1>
          <div className="w-full h-full flex items-center justify-center flex-wrap space-x-4 space-y-4 p-14">
            <div className=" w-60 h-20 bg-mainWhite flex items-center flex-col justify-center p-4 border-2 border-dashed border-CoolGray-900 ">
              <h1 className="text-2xl "> نوع لنز </h1>
              <h1 className="text-xl ">{lensType}</h1>
            </div>
            <div className=" w-60 h-20 bg-mainWhite flex items-center flex-col justify-center p-4 border-2 border-dashed border-CoolGray-900 ">
              <h1 className="text-2xl "> قطر لنز </h1>
              <h1 className="text-xl ">{lensWidth}</h1>
            </div>{" "}
            <div className=" w-60 h-20 bg-mainWhite flex items-center flex-col justify-center p-4 border-2 border-dashed border-CoolGray-900 ">
              <h1 className="text-2xl "> چشم راست </h1>
              <h1 className="text-xl ">{cylinderOD}</h1>
            </div>{" "}
            <div className=" w-60 h-20 bg-mainWhite flex items-center flex-col justify-center p-4 border-2 border-dashed border-CoolGray-900 ">
              <h1 className="text-2xl ">چشم چپ</h1>
              <h1 className="text-xl ">{cylinderOS}</h1>
            </div>
            {/* <h2>{glassType}</h2>
            <h2>{lensType}</h2>
            <h3>{sphereOD}</h3>
            <h3>{sphereOS}</h3>
            <h3>{cylinderOD}</h3>
            <h3>{cylinderOS}</h3>
            <h3>{axisOD}</h3>
            <h3>{axisOS}</h3>
            <h3>{lensWidth}</h3> */}
          </div>
        </div>
      )}
    </div>
  );
}
