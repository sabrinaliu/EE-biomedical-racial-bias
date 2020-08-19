import React from 'react';
import { Stepper, Step, StepContent, StepButton } from '@material-ui/core/';
import { Card, CardContent, Typography, Link } from '@material-ui/core/';

function getSteps() {
  return ['1832', '1840\'s', '1851', '1897', '1922', '1974', '2014', '2019'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <Typography>
        The idea of different races having inherently varying lung capacities is older than the spirometer itself. Before the device was developed, Thomas Jefferson mentioned various physical differences, including in the lungs, between slaves and colonists in his <i>Notes on the State of Virginia</i>.
        </Typography>);
    case 1:
      return (
        <Typography>
        John Hutchinson invents the modern spirometer. Quickly, he runs into the problem of how to set a standard for the measurements. He notes variations in lung capacity caused by weight and height. However, he ends up focusing on the effects of occupational differences.
        </Typography>);
    case 2:
      return (
        <Typography>
        Physician and slave owner Samuel Cartwright documents racial differences using the spirometer. He uses his results to justify slavery, stating that extra physical work is good for health and will strengthen slaves' lungs.
        </Typography>);
    case 3:
      return (
        <Typography>
        W.E.B. Du Bois, Kelly Miller, and other Black scholars critique studies that argue lung capacity and other physical differences show racial inferiority. Still, they are largely ignored as the large majority of studies confirm racial differences in lung capacity.
        </Typography>);
    case 4:
      return (
        <Typography>
        M.G. Wilson and D.J. Edwards publish the first set of spirometry standards for different races. Three years later, J.E. Meyers publishes a handbook to be used in clinical practice that states racial lung differences undoubtingly.
        </Typography>);
    case 5:
      return (
        <Typography>
        As the spirometer becomes more advanced and computerized, Charles Rossiter and Hans Weill develop the racial “scaling factor” to be programmed directly into the spirometer. Physicians no longer need to understand why they are supposed to ask for racial data when conducting spirometry tests.
        </Typography>);
    case 6:
      return (
        <Typography>
        Lundy Braun, Professor of Medical Science and Africana Studies at Brown University, publishes <i>Breathing Race into the Machine: The Surprising Career of the Spirometer from Plantation to Genetics</i>. Her work investigates the history of the spirometer and the racial correction factor, bringing widespread attention to its problematic origins and its effects today.
        </Typography>);
    case 7:
      return (
      <Typography>
      In the <Link href="https://www.atsjournals.org/doi/full/10.1164/rccm.201908-1590ST"><i>Standardization of Spirometry 2019 Update</i></Link> from the Official American Thoracic Society and the European Respiratory Society, it states that "ethnicity should be included in the patient information on the spirometry request. Otherwise, the operator will ask the patient to provide this information." The standard for ethnic categories has been limited to "white (i.e., European ancestry), African American, Northeast Asian, Southeast Asian, and other/mixed". This information is still used in calculations and if no race information is provided, then physicians are asked to make sure they note what default values they used.
      </Typography>);
    default:
      return (<Typography>Something is wrong...</Typography>);
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
      <Typography className="title" variant="h3">History</Typography>
      <Card id="spiro-card">
      <CardContent id="spiro-text">
        <Typography variant="subtitle1" component="p">
          Understanding the origins of the race correction factor involves looking at its <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4631137/">history originating centuries back in the slave era</Link>.
        </Typography>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={handleStep(index)}>
              <Typography variant="subtitle1">
              {label}
              </Typography>
              </StepButton>
              <StepContent>
                {getStepContent(index)}
              </StepContent>
            </Step>
          ))}
        </Stepper>

        </CardContent>
      </Card>
    </div>
  );
}
