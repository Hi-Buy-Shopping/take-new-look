import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Services", href: "/services", current: false },
  { name: "About", href: "/about-us", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Help", href: "/contact-us", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 lg:py-4  z-40 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to={"/"}>
                  <img
                    className="block h-12 w-40 lg:hidden"
                    src={"/assets/logo/logo.png"}
                    alt="dsign-logo"
                  />
                </Link>
                <Link to={"/"}>
                  <img
                    className="hidden h-full w-full lg:block"
                    src={"/assets/logo/logo.png"}
                    alt="dsign-logo"
                  />
                </Link>
              </div>

              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? " text-black hover:opacity-100"
                          : "hover:text-black hover:opacity-100",
                        "px-3 py-4 text-lg font-normal opacity-75 space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Signdialog />

            <Registerdialog />

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
