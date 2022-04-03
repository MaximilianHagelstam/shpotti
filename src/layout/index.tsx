import { Disclosure } from "@headlessui/react";
import {
  LoginIcon,
  LogoutIcon,
  MenuIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import classNames from "../utils/classNames";
import navLinks from "./navLinks";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  const { data: session } = useSession();

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <Image
                    height={32}
                    width={32}
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Shpotti"
                  />
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navLinks.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-indigo-500 text-white"
                              : "text-gray-500 hover:bg-indigo-50 hover:text-black transition ease-in-out",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {session ? (
                      <>
                        <a
                          className="inline-flex items-center px-4 mx-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                          href={`/api/auth/signout`}
                          onClick={(e) => {
                            e.preventDefault();
                            signOut();
                          }}
                        >
                          <LogoutIcon
                            className="-ml-1 mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                          Sign Out
                        </a>
                        <Link href="/profile" passHref>
                          <UserIcon
                            className="h-6 w-6 text-gray-500 hover:text-gray-900"
                            aria-hidden="true"
                          />
                        </Link>
                      </>
                    ) : (
                      <a
                        href={`/api/auth/signin`}
                        onClick={(e) => {
                          e.preventDefault();
                          signIn();
                        }}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        <LoginIcon
                          className="-ml-1 mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                        Sign In
                      </a>
                    )}
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-indigo-500 text-white"
                        : "text-gray-500 hover:bg-indigo-50 hover:text-black",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>

              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-5">
                  {session ? (
                    <>
                      <Link href="/profile" passHref>
                        <UserIcon
                          className="h-6 w-6 text-gray-500 hover:text-gray-900"
                          aria-hidden="true"
                        />
                      </Link>
                      <div className="ml-auto flex-shrink-0 p-1">
                        <a
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                          href={`/api/auth/signout`}
                          onClick={(e) => {
                            e.preventDefault();
                            signOut();
                          }}
                        >
                          <LogoutIcon
                            className="-ml-1 mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                          Sign Out
                        </a>
                      </div>
                    </>
                  ) : (
                    <a
                      href={`/api/auth/signin`}
                      onClick={(e) => {
                        e.preventDefault();
                        signIn();
                      }}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      <LoginIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Sign In
                    </a>
                  )}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

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
