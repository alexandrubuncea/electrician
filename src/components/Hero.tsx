import React, { FC } from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  primaryAction: { label: string; onClick: () => void };
  secondaryAction: { label: string; onClick: () => void };
}

const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc,
  primaryAction,
  secondaryAction,
}) => {
  return (
    <div className="relative flex max-h-[560px] items-center justify-between gap-14 rounded-xl ">
      <div className="flex max-w-[560px] flex-col gap-4 ">
        <h1 className=" text-3xl font-semibold text-neutral-900 lg:text-5xl">
          {title}
        </h1>
        <p className="font-regular text-base text-neutral-700">{subtitle}</p>

        <div className="flex flex-col gap-4 md:flex-row">
          <Button type="primary" onClick={primaryAction.onClick}>
            {primaryAction.label}
          </Button>
          <Button type="secondary" onClick={secondaryAction.onClick}>
            {secondaryAction.label}
          </Button>
        </div>
      </div>
      <div className="hidden aspect-[1] max-h-[560px] min-h-[360px]  md:flex">
        <img
          src={imageSrc}
          alt=""
          className=" aspect-[1] h-full w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
