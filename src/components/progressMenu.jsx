import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Flex, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Contents from "./contents";
import { useTranslation } from "react-i18next";

const steps = [
  { label: "نوع شیشه" },
  { label: "نسخه" },
  { label: "نوع رنگ لنز" },
  { label: "قطر لنز" },
  { label: "تکمیل خرید" },
];
export const ProgressMenu = () => {
  const { t, i18n } = useTranslation();
  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0,
  });
  return (
    <Flex flexDir="column" width="100%">
      <Steps
        responsive={false}
        onClickStep={(step) => setStep(step)}
        activeStep={activeStep}
        className="text-10xl px-10 font-black   p-10 bg-CoolGray-900"
        labelOrientation="vertical"
      >
        {steps.map(({ label, description }, index) => (
          <Step
            className="font-black "
            label={label}
            key={label}
            description={description}
          >
            <Contents index={index} />
          </Step>
        ))}
      </Steps>

      <Flex width="100%" className="space-x-8" justify="flex-end">
        <button
          className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-2 text-xl lg:text-2xl my-3 bg-mainWhite   rounded-full  "
          isDisabled={activeStep === 0}
          mr={4}
          onClick={prevStep}
        >
          {t("goBack")}
        </button>
        {activeStep === steps.length - 1 ? (
          <Link
            className="px-12 mx-4 text-mainWhite transition ease-in duration-300 border-l-8 hover:text-CoolGray-900
            active:bg-mainBlue active:text-CoolGray-900 border-mainBlue hover:bg-mainBlue py-2 text-xl lg:text-2xl my-3 bg-CoolGray-900   rounded-full  "
            to={"/checkoutPage"}
          >
            <button mr={4}>{t("checkout")} </button>
          </Link>
        ) : (
          <button
            mr={4}
            onClick={nextStep}
            className="px-12 mx-4 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-2 text-xl lg:text-2xl my-3 bg-mainWhite   rounded-full  "
          >
            {t("confirm")}
          </button>
        )}
      </Flex>
    </Flex>
  );
};

export default ProgressMenu;
