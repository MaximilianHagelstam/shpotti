import React from "react";

interface NavItemProps {
  title: string;
  link: string;
}

const NavItem = ({ title, link }: NavItemProps) => {
  return <a href={link}>{title}</a>;
};

export default NavItem;
