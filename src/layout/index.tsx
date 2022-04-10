import { useRouter } from "next/router";
import Navbar from "./Navbar";
import navLinks from "./navLinks";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <div className="min-h-full">
      <Navbar />

      <header>
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {navLinks.map((navLink) => {
              if (navLink.href === router.pathname) {
                return navLink.name;
              } else {
                return;
              }
            })}
          </h1>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
