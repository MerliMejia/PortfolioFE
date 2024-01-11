import { Typography } from '@mui/material';
import { ReactNode } from 'react';

type TextWithGradientProps = {
  children?: ReactNode;
  className?: string;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'subtitle1'
    | 'subtitle2';
};

const TextWithGradient = ({
  children,
  className,
  variant,
  ...props
}: TextWithGradientProps) => {
  return (
    <Typography
      variant={variant || 'body1'}
      className={`text-[#9A9A9A] text-center max-w-xl ${className || ''}`}
      style={{
        background:
          'linear-gradient(102.13deg, #E9E9E9 0%, #515151 100%) !important',
        // @ts-ignore
        '-webkit-background-clip': 'text !important',
        // @ts-ignore
        '-webkit-text-fill-color': 'transparent !important',
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default TextWithGradient;