import { techs } from '@/data';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const TechSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = React.useState(false);

  useEffect(() => {
    const scroll = () => {
      if (!containerRef.current) return;
      if (isHovering) return;

      const container = containerRef.current;

      const direction = container.scrollLeft === 0 ? 'right' : 'left';

      container.scrollTo({
        behavior: 'smooth',
        left:
          direction === 'right'
            ? container.scrollWidth - container.clientWidth
            : 0,
      });
    };
    const interval = setInterval(scroll, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [containerRef, isHovering]);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={containerRef}
      className="w-full scroll-smooth bg-[#1A1A1A] py-14 border-[1px] border-[#242424] my-28 flex justify-start items-center px-10 overflow-x-scroll gap-12"
    >
      {techs.map((_, index) => (
        <Image
          key={index}
          className="grayscale"
          src={techs[index].src}
          alt={techs[index].alt}
          width={techs[index].width}
          height={techs[index].height}
        />
      ))}
    </div>
  );
};

export default TechSlider;
