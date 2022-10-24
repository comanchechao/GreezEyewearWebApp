import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Flex, Button, Heading } from "@chakra-ui/react";
import Contents from "./contents";
const steps = [
  { label: "GLASS TYPE" },
  { label: "PERSCRIPTION" },
  { label: "LENS COLOR TYPE" },
  { label: "LENS THICKNESS" },
  { label: "CHECKOUT" },
];
export const ProgressMenu = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 1,
  });
  return (
    <Flex flexDir="column" width="100%">
      <Steps
        onClickStep={(step) => setStep(step)}
        activeStep={activeStep}
        className="text-10xl px-10 font-black  my-5"
        labelOrientation="vertical"
      >
        {steps.map(({ label, description }, index) => (
          <Step
            className="font-black"
            label={label}
            key={label}
            description={description}
          >
            <Contents index={index} />
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length + 1 ? (
        <Flex px={4} py={4} width="100%" flexDirection="column">
          <Heading fontSize="xl" textAlign="center">
            Woohoo! All steps completed!
          </Heading>
          <Button mx="auto" mt={6} size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" className="space-x-8" justify="flex-end">
          <button
            className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-xl lg:text-2xl my-3 bg-mainWhite   rounded-full  "
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
          >
            Go Back
          </button>
          <button
            className="px-12 transition ease-in duration-300 border-l-8 border-mainBlue hover:bg-mainBlue py-1 text-xl lg:text-2xl my-3 bg-mainWhite   rounded-full  "
            onClick={nextStep}
          >
            {activeStep === steps.length ? "Finish" : "Confirm"}
          </button>
        </Flex>
      )}
    </Flex>
  );
};

export default ProgressMenu;
