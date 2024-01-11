import { Avatar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

type PageLayoutProps = {
  children?: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className="min-h-screen py-2">
      <div className="w-full max-w-[1220px] mx-auto border-b-[1.4px] border-b-[#242424] text-[#8A8A8A] flex justify-between px-8 py-8">
        <Link
          href="mailto:merli@mejiatavarez.com"
          className="hover:text-[#DCDCDC]"
        >
          <div className="flex justify-start items-center gap-4 md:gap-6">
            <Avatar
              className="bg-[#111111] border-[#e5e7eb] border-[0.5px]"
              sx={{
                width: {
                  base: 20,
                  md: 40,
                },
                height: {
                  base: 20,
                  md: 40,
                },
              }}
            >
              <EmailIcon fontSize={matches ? 'medium' : 'small'} />
            </Avatar>
            <Typography variant="body1">Get In Touch</Typography>
          </div>
        </Link>
        <div className="flex justify-between items-center gap-4 md:gap-18">
          <Link
            href="https://www.upwork.com/freelancers/~01e6f03468956e2365?viewMode=1"
            className="hover:text-[#DCDCDC]"
          >
            <Typography variant="body1">{matches ? 'Upwork' : 'Up'}</Typography>
          </Link>
          {matches && <Typography variant="body1">/</Typography>}
          <Link href="/CV.pdf" className="hover:text-[#DCDCDC]">
            <Typography variant="body1">CV</Typography>
          </Link>
          {matches && <Typography variant="body1">/</Typography>}
          <Link
            href="https://github.com/MerliMejia"
            className="hover:text-[#DCDCDC]"
          >
            <Typography variant="body1">
              {matches ? 'Github' : 'Git'}
            </Typography>
          </Link>
          {matches && <Typography variant="body1">/</Typography>}
          <Link
            href="https://www.linkedin.com/in/merlimejia/"
            className="hover:text-[#DCDCDC]"
          >
            <Typography variant="body1">
              {matches ? 'LinkedIn' : 'in'}
            </Typography>
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
};

export default PageLayout;
