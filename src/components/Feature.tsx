import React from 'react';

interface FeatureProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({
  href,
  icon,
  title,
  description,
}) => {
  return (
    <a href={href} className="group flex flex-row gap-4 md:max-w-[280px]">
      <div className="flex h-fit w-fit rounded-full bg-blue-50 p-2 group-hover:bg-blue-100">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-blue-600 underline  group-hover:text-blue-700 group-hover:no-underline">
          {title}
        </h3>
        <p className="font-regular text-base text-neutral-700 group-hover:text-neutral-900">
          {description}
        </p>
      </div>
    </a>
  );
};

export default Feature;
