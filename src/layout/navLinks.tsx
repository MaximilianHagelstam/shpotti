interface NavLink {
  name: string;
  href: string;
  current: boolean;
}

const navLinks: NavLink[] = [
  { name: "Discover", href: "/", current: true },
  { name: "Liked Spots", href: "/liked", current: false },
  { name: "Add Spot", href: "/add", current: false },
];

export default navLinks;
