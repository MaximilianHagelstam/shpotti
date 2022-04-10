interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Discover", href: "/" },
  { name: "Liked Spots", href: "/liked" },
  { name: "Add Spot", href: "/add" },
];

export default navLinks;
