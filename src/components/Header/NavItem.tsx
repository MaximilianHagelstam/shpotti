interface NavItemProps {
  title: string;
  link: string;
}

const NavItem = ({ title, link }: NavItemProps) => {
  return (
    <a className="mr-4" href={link}>
      {title}
    </a>
  );
};

export default NavItem;
