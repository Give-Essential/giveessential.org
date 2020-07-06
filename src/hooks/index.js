import { useState, useCallback } from 'react';
/**
 * @param {number} initialStep
 */
const useSteps = (initialStep) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const back = useCallback(
    (step) => {
      setCurrentStep(step);
    },
    [setCurrentStep]
  );
  const next = useCallback(
    (step) => {
      setCurrentStep(step);
    },
    [setCurrentStep]
  );
  return { currentStep, back, next };
};

export default useSteps;
