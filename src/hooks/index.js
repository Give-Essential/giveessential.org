import { useState, useCallback } from 'react';
/**
 * @param {number} initialStep
 */
const useSteps = (initialStep) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const back = useCallback(() => {
    setCurrentStep((prevStep) => prevStep - 1);
  }, [setCurrentStep]);
  const next = useCallback(() => {
    setCurrentStep((prevStep) => prevStep + 1);
  }, [setCurrentStep]);
  return { currentStep, back, next };
};

export default useSteps;
