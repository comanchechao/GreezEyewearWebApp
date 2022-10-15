import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Flex, Button, Heading } from "@chakra-ui/react";
import Contents from "./contents";
const steps = [
  { label: "Glass Type", description: "Choose your glass type" },
  { label: "Perscription", description: "Fill your perscription info" },
  { label: "Step 3", description: "Step 3 description" },
  { label: "Step 4", description: "Step 4 description" },
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
        className="text-10xl"
        labelOrientation="vertical"
      >
        {steps.map(({ label, description }, index) => (
          <Step label={label} key={label} description={description}>
            <Contents index={index} />
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex px={4} py={4} width="100%" flexDirection="column">
          <Heading fontSize="xl" textAlign="center">
            Woohoo! All steps completed!
          </Heading>
          <Button mx="auto" mt={6} size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default ProgressMenu;
