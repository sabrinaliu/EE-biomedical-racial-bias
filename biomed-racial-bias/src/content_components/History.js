import React from 'react';
import { Stepper, Step, StepContent, StepButton } from '@material-ui/core/';
import { Card, Typography } from '@material-ui/core/';

function getSteps() {
  return ['1840\'s', '1851', '1897', '1922', '1974'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Hutchinson invents the modern spirometer. Quickly, he runs into the problem of how to set a standard for the measurements. He notes variations in lung capacity caused by weight and height. However, he ends up focusing on the effects of occupational differences.';
    case 1:
      return 'Physician and slave owner Samuel Cartwright documents racial differences using the spirometer. He uses his results to justify slavery, stating that extra physical work is good for health and will strengthen slaves\' lungs.';
    case 2:
      return 'W.E.B. Du Bois, Kelly Miller, and other Black scholars critique studies that argue lung capacity and other physical differences show racial inferiority. Still, they are largely ignored as the large majority of studies confirm racial differences in lung capacity.';
    case 3:
      return 'Wilson and Edwards publish the first set of spirometry standards for different races.';
    case 4:
      return 'As the spirometer becomes more advanced and computerized, Rossiter and Weill develop the racial “scaling factor” to be programmed directly into the spirometer. Physicians no longer directly see the '
    default:
      return 'Something is wrong...'
  }
}

export default function History() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <div className="background-style" id="race-correction">
      <header>The Race Correction Factor</header>
      <Card id="spiro-card">
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={handleStep(index)}>{label}</StepButton>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Card>
    </div>
  );
}
