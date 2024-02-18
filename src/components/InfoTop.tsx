import React from 'react';
import { ClockIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/16/solid';

const InfoTop = () => {
  return (
    <div className="w-full border-b border-neutral-300">
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center gap-2 px-6 py-2 sm:gap-4 md:px-8">
        <div className="flex flex-row gap-2 py-2">
          <EnvelopeIcon className="h6 w-6 text-neutral-700" />
          <a href="mailto:voicu.electriciananre@gmail.com">
            <p className="cursor-pinter whitespace-nowrap text-neutral-700 hover:text-neutral-900 hover:underline">
              voicu.electriciananre@gmail.com
            </p>
          </a>
        </div>
        <div className="flex flex-row gap-2 py-2">
          <MapPinIcon className="h6 w-6 text-neutral-700" />
          <p className="whitespace-nowrap text-neutral-700">
            Constanta, Romania
          </p>
        </div>
        <div className="flex flex-row gap-2 py-2">
          <ClockIcon className="h6 w-6 text-neutral-700" />
          <p className="whitespace-nowrap text-neutral-700">
            Luni - Vineri 09:00 - 19:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoTop;
