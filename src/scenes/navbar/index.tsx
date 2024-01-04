import Logo from "@/assets/Logo.png";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import ActionButton from "@/shared/ActionButton ";

const navbarMenu = ["Home", "Benefits", "Our Classes", " Contact Us"];

type Props = {};

const Navbar = (props: Props) => {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <>
      <nav className="mx-auto flex w-5/6 justify-between py-6 md:max-w-screen-md">
        <div className="flex items-center gap-20">
          <img src={Logo} alt="" />
          <ul className="hidden items-center gap-5 sm:flex">
            {navbarMenu.map((item) => (
              <Link
                title={item}
                activeNavItem={activeNavItem}
                setActiveNavItem={setActiveNavItem}
              />
            ))}
          </ul>
        </div>
        <div className="hidden gap-5 sm:flex">
          <button>Sign In</button>
          <ActionButton>Become a Member</ActionButton>
        </div>
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-secondary-400 sm:hidden">
          <Bars3Icon
            onClick={() => setIsMenuToggled(true)}
            className="h-5 w-5 text-white"
          />
        </div>
      </nav>

      <div
        onClick={() => setIsMenuToggled(false)}
        className={`${
          isMenuToggled ? "block" : "hidden"
        } fixed left-0 top-0 z-40 h-full w-full`}
      >
        <div
          onClick={() => setIsMenuToggled(false)}
          className="absolute right-14 top-10 z-50 h-6 w-6 cursor-pointer text-gray-400"
        >
          <XMarkIcon />
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed bottom-0 right-0 flex h-full w-[300px] justify-center bg-primary-100 p-12 drop-shadow-xl"
        >
          <ul className="mt-[40%] flex flex-col gap-10 text-2xl">
            {navbarMenu.map((item) => (
              <Link
                title={item}
                activeNavItem={activeNavItem}
                setActiveNavItem={setActiveNavItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
