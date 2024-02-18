import React from 'react';

interface StatsProps {
  number: number | string;
  label: string;
}

const Stats: React.FC<StatsProps> = ({ number, label }) => {
  return (
    <div className="flex min-w-[180px] flex-col items-center gap-1">
      <span className="text-4xl font-bold text-neutral-900">
        <span className="text-blue-500">+</span>
        {number}
      </span>
      <span className="font-regular text-xl text-neutral-700">{label}</span>
    </div>
  );
};

export default Stats;
