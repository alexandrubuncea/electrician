import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  imgSrc: string;
  title: string;
  imgOnRight?: boolean;
  children: ReactNode;
  badge?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  imgSrc,
  title,
  imgOnRight,
  children,
  badge,
}) => {
  return (
    <div
      id={id}
      className={`grid grid-cols-1 items-center  gap-8 md:grid-cols-2 `}
    >
      <div className="relative flex aspect-[1] max-h-[560px] max-w-[560px] flex-col items-center justify-center rounded-xl p-5">
        <img
          src={imgSrc}
          alt=""
          className={`aspect-[1] h-full w-full rounded-lg object-cover ${imgOnRight ? 'md:order-last' : ''} `}
        />
        <div className="absolute inset-0  z-10 rounded-xl bg-blue-200 opacity-15"></div>
      </div>

      <div
        className={`flex max-w-[560px] flex-col gap-6 ${imgOnRight ? 'md:order-first' : ''}`}
      >
        {badge && (
          <div className="w-fit rounded bg-blue-200 px-2 py-1 text-blue-800">
            {badge}
          </div>
        )}
        <h2 className="text-4xl font-semibold text-neutral-900">{title}</h2>
        <div className="font-regular flex flex-col gap-2 text-base text-neutral-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
