interface NavLink {
  name: string;
  href: string;
  current: boolean;
}

const navLinks: NavLink[] = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

export default navLinks;
