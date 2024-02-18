import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="p-2 text-base font-semibold text-neutral-900 transition-colors duration-100 hover:text-blue-600 hover:underline"
    >
      {children}
    </a>
  );
};

export default NavLink;
