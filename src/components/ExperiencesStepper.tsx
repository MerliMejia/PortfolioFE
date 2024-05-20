import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { experiences } from '@/data';

const ExperiencesStepper = () => {
  return (
    <div className="text-[#8A8A8A] px-8 max-w-[1220px] mx-auto">
      {/* @ts-ignore */}
      <Stepper orientation="vertical">
        {experiences.map((experience) => (
          <Step key={experience.label} expanded>
            <StepLabel
              slotProps={{
                label: {
                  className: '!text-white LOL cursor-pointer',
                },
              }}
            >
              <Typography variant="h5">{experience.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography>{experience.description}</Typography>
              <Typography className="text-white">
                <strong>Tech:</strong>{' '}
                <span className="italic">{experience.tech?.join(', ')}</span>
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default ExperiencesStepper;
