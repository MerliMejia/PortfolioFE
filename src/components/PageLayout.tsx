import {
  Avatar,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { MouseEvent, ReactNode, useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

type PageLayoutProps = {
  children?: ReactNode;
};

type PageMenuProps = {
  matches: boolean;
  className?: string;
  isTop?: boolean;
};

const PageMenu = ({ matches, className, isTop = true }: PageMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className={`w-full max-w-[1220px] mx-auto ${
        isTop
          ? 'border-b-[1.4px] border-b-[#242424]'
          : 'border-t-[1.4px] border-t-[#242424]'
      }  text-[#8A8A8A] flex justify-between px-8 py-8 ${className || ''}`}
    >
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

        <Typography
          variant="body1"
          onClick={handleClick}
          className="hover:text-[#DCDCDC] cursor-pointer"
        >
          {matches ? 'Github' : 'Git'}
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'button',
            }}
          >
            <Link href="https://github.com/MerliMejia/PortfolioFE">
              <MenuItem onClick={handleClose}>This Website</MenuItem>
            </Link>
            <Link href="https://github.com/MerliMejia">
              <MenuItem onClick={handleClose}>Personal Github</MenuItem>
            </Link>
          </Menu>
        </Typography>

        {matches && <Typography variant="body1">/</Typography>}
        <Link
          href="https://www.linkedin.com/in/merlimejia/"
          className="hover:text-[#DCDCDC]"
        >
          <Typography variant="body1">{matches ? 'LinkedIn' : 'in'}</Typography>
        </Link>
      </div>
    </div>
  );
};

const PageLayout = ({ children }: PageLayoutProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className="min-h-screen py-2">
      <PageMenu matches={matches} />
      {children}
      <PageMenu matches={matches} isTop={false} className="mt-28" />
    </div>
  );
};

export default PageLayout;
