import React from 'react';

type ButtonProps = {
  type: 'primary' | 'secondary' | 'ghost';
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ type, icon, children, onClick }) => {
  let buttonClass =
    'h-12 rounded-full transition-colors duration-100 text-base font-semibold box-border flex flex-row items-center';

  switch (type) {
    case 'primary':
      buttonClass +=
        ' bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-md active:shadow-none';
      break;
    case 'secondary':
      buttonClass +=
        ' bg-white hover:bg-neutral-100 active:bg-neutral-200 text-neutral-900 border border-neutral-300 shadow-md active:shadow-none';
      break;
    case 'ghost':
      buttonClass +=
        ' bg-transparent hover:bg-neutral-100 active:bg-neutral-200 text-black';
      break;
  }

  return (
    <button className={`${buttonClass} flex justify-center`} onClick={onClick}>
      <div className="mx-6 my-3 flex flex-row">
        {icon && <span className="text-neutral-900- mr-2 h-6 w-6">{icon}</span>}
        {children}
      </div>
    </button>
  );
};

export default Button;
