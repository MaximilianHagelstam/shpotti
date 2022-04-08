import Navbar from "./Navbar";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div className="min-h-full">
      <Navbar />

      <header>
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
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
