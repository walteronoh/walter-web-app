import React from 'react';

interface NavbarProps {
  links: { label: string; url: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;