import React from 'react';
import Button from './Button';
import { PhoneIcon } from '@heroicons/react/24/solid';
import NavLink from './NavLink';

const InfoTop = () => {
  return (
    <div className="flex w-full max-w-screen-xl flex-wrap items-center justify-between gap-2 p-6 sm:gap-4 md:p-8">
      <h2 className="text-base font-semibold text-neutral-900">
        Voicu D. Valentin
      </h2>
      <div className="hidden flex-row gap-4 lg:flex">
        <NavLink href="#despre">Despre</NavLink>
        <NavLink href="#servicii">Servicii</NavLink>
        {/* <NavLink href="google.ro">Lucrari</NavLink> */}
        <NavLink href="#contact">Contact</NavLink>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="hidden sm:block">
          <Button
            type="ghost"
            icon={<PhoneIcon />}
            onClick={() => {
              window.location.href = 'tel:+0732843299';
            }}
          >
            0732 843 299
          </Button>
        </div>
        <Button
          type="primary"
          onClick={() => {
            window.location.href = 'tel:+0732843299';
          }}
        >
          Suna acum
        </Button>
      </div>
    </div>
  );
};

export default InfoTop;
