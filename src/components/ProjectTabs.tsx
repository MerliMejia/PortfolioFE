/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProjectTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="flex justify-center w-full">
        <Tabs
          textColor="secondary"
          indicatorColor="secondary"
          color="secondary"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            className="text-white text-lg"
            label="Frontend"
            {...a11yProps(0)}
          />
          <Tab
            className="text-white text-lg"
            label="Mobile"
            {...a11yProps(1)}
          />
          <Tab
            className="text-white text-lg"
            label="Full-Stack"
            {...a11yProps(2)}
          />
        </Tabs>
      </div>
      <div className="w-full text-white max-w-[1220px] mx-auto">
        <CustomTabPanel value={value} index={0}>
          <Typography variant="h5" className="my-10">
            Advanced Custom Dynamic Questionnaire
          </Typography>
          <Typography variant="body1">
            <span className="text-[#8A8A8A]">My Role: </span>Senior Full-Stack
            Developer
          </Typography>
          <Typography variant="body1">
            <span className="text-[#8A8A8A]">Project description: </span>The
            client needed a way to create custom forms that could be
            automatically integrated into their website using their unique
            design. <br />
            The solution involved using a combination of https://surveyjs.io/
            and React.js. SurveyJS offers an editor where you can manually
            create any form, generating a JSON file with the form information.
            They also provide a JavaScript library that allows you to access all
            this using the generated JSON. I implemented all the SurveyJS
            elements in React.js, incorporating the client's design.
          </Typography>
          <Typography className="text-white">
            <span className="text-[#8A8A8A]">Skills and deliverables:</span>{' '}
            <span className="italic">
              Next.js, React, JavaScript, Front-End Development , Full-Stack
              Development
            </span>
          </Typography>
          <Typography variant="h6" className="mt-10">
            Demo
          </Typography>
          <Typography className="text-white">
            Take a look at the following video showcasing one of the forms
            created using this technique.
          </Typography>
          <video
            controls
            className="w-full mt-10 border-[4.4px] border-[#ffffff]"
          >
            <source src="/videos/warm-demo1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Typography variant="h6" className="mt-10">
            Demo 2
          </Typography>
          <Typography className="text-white">
            Here's another questionnaire made by me with this technique. This
            one is more advanced since it has custom cards, nested
            questionnaires, a room editor, and the ability to upload files.
          </Typography>
          <video
            controls
            className="w-full mt-10 border-[4.4px] border-[#ffffff]"
          >
            <source src="/videos/warm-demo2.mov" />
            Your browser does not support the video tag.
          </video>
          <Typography className="text-white mt-5">
            You can try the questionnaires here:
            <a href="https://warm0.de/selbst-vermessen">
              https://warm0.de/selbst-vermessen
            </a>{' '}
            and here:{' '}
            <a href="https://warm0.de/questionnaire">
              https://warm0.de/questionnaire
            </a>
          </Typography>
          <Typography variant="h5" className="my-10">
            More coming up soon...
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography variant="h5" className="my-10">
            More coming up soon...
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Typography variant="h5" className="my-10">
            More coming up soon...
          </Typography>
        </CustomTabPanel>
      </div>
    </div>
  );
}
