import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepButton } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import HistoryPopup from './HistoryPopup'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['1840\'s', '1851', '1897', '1922', '1974'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Hutchinson invents the modern spirometer. He notes differences in lung capacity based on occupational differences.';
    case 1:
      return 'Physician and slave owner Samuel Cartwright documents racial differences using the spirometer, using them to justify slavery.';
    case 2:
      return 'W.E.B. Du Bois, Kelly Miller, and other Black scholars critique studies that argue lung capacity and other physical differences show racial inferiority.';
    case 3:
      return 'Wilson and Edwards publish the first set of spirometry standards for different races.';
    case 4:
      return 'Rossiter and Weill develop the racial “scaling factor” to be programmed directly into the spirometer.'
    default:
      return 'Something is wrong...'
  }
}

export default function History() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <header>History</header>
      <Stepper nonLinear alternativeLabel activeStep={activeStep}>
        {steps.map((label, index) => (
          <HistoryPopup year={label} description={getStepContent(index)} index={index}/>
        ))}
      </Stepper>
    </div>
  );
}
