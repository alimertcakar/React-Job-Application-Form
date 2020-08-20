import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useForm } from "react-hook-form";
import useFormStyles from "./Form.styles";

import Typography from "@material-ui/core/Typography";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Personal Information", "Contact", "Send Application"];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    default:
      return "Unknown step";
  }
}

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const steps = getSteps();
  const cls = useFormStyles();
  const { handleSubmit, register, errors } = useForm();
  const onSendForm = (val: object) => console.log(val);
  const totalSteps = () => {
    return getSteps().length;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    if (isLastStep()) return;
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    if (completed.size !== totalSteps()) {
      handleNext();
    }
  };

  function isStepComplete(step: number) {
    return completed.has(step);
  }

  type buttonProps = {
    optional?: React.ReactNode;
  };
  type stepProps = {
    completed?: boolean;
  };
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={8}>
        <Stepper alternativeLabel nonLinear activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: stepProps = {};
            const buttonProps: buttonProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepButton
                  onClick={handleStep(index)}
                  completed={isStepComplete(index)}
                  {...buttonProps}
                >
                  {label}
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
        <div>
          <Typography component="h1" className={cls.formHeaderDesc}>
            Please fill this form to apply for a position with us
          </Typography>
          <div>
            <form onSubmit={handleSubmit(onSendForm)}>
              {getStepContent(activeStep)}
              <Paper className={cls.bottomButtons}>
                <Grid container justify="flex-end">
                  <Button
                    type="button"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                    disableElevation
                    style={{ backgroundColor: "#fff!important" }}
                  >
                    Back
                  </Button>

                  {activeStep !== steps.length &&
                    (completed.has(activeStep) ? (
                      <Typography
                        variant="caption"
                        className={classes.completed}
                      >
                        {" "}
                        {!isLastStep() && (
                          <Button
                            type="button"
                            onClick={handleNext}
                            className={classes.button}
                            disableElevation
                          >
                            Next
                          </Button>
                        )}
                      </Typography>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={handleComplete}
                        disableElevation
                      >
                        {completedSteps() === totalSteps() - 1
                          ? "Finish"
                          : "Complete Step"}
                      </Button>
                    ))}
                </Grid>
              </Paper>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
