import { Disclosure, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import classNames from "../utils/classNames";
import navLinks from "./navLinks";

const Navbar = () => {
  const { data: session } = useSession();

  return (
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
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs rounded-full flex items-center text-sm focus:ring-gray-500 focus:ring-1">
                          <Image
                            className="rounded-full"
                            width={32}
                            height={32}
                            src={session.user.image}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/profile"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href={`/api/auth/signout`}
                              onClick={(e) => {
                                e.preventDefault();
                                signOut();
                              }}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign Out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  ) : (
                    <a
                      href={`/api/auth/signin`}
                      onClick={(e) => {
                        e.preventDefault();
                        signIn();
                      }}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
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

              <div className="border-t border-gray-200">
                {session ? (
                  <>
                    <Disclosure.Button
                      as="a"
                      href="/profile"
                      className={classNames(
                        "block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-indigo-50 hover:text-black"
                      )}
                    >
                      Profile
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href={`/api/auth/signout`}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      onClick={(e: any) => {
                        e.preventDefault();
                        signOut();
                      }}
                      className={classNames(
                        "block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-indigo-50 hover:text-black"
                      )}
                    >
                      Sign Out
                    </Disclosure.Button>
                  </>
                ) : (
                  <Disclosure.Button
                    as="a"
                    href={`/api/auth/signin`}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onClick={(e: any) => {
                      e.preventDefault();
                      signIn();
                    }}
                    className={classNames(
                      "block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-indigo-50 hover:text-black"
                    )}
                  >
                    Sign In
                  </Disclosure.Button>
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
