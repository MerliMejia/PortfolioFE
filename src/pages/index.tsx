import PageLayout from '@/components/PageLayout';
import TechSlider from '@/components/TechSlider';
import TextWithGradient from '@/components/TextWithGradient';
import { Avatar, Typography } from '@mui/material';
import Image from 'next/image';

const Home = () => {
  return (
    <PageLayout>
      <div className="w-full flex flex-col items-center mt-20">
        <Avatar
          imgProps={{
            className: 'object-contain grayscale-[80%]',
          }}
          className="bg-[#111111] border-[#e5e7eb] border-[0.5px]"
          alt="Remy Sharp"
          src="/images/profile-pic.png"
          sx={{ width: 160, height: 160 }}
        />
        <Typography className="text-[#9A9A9A] my-4">
          Hi, I'm Merli 👋🏾
        </Typography>
        <TextWithGradient variant="h3">
          Full-Stack Developer - Always eager to learn
        </TextWithGradient>
      </div>
      <TechSlider />
    </PageLayout>
  );
};

export default Home;
