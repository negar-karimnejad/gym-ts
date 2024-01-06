import Logo from "@/assets/Logo.png";
import ActionButton from "@/shared/ActionButton ";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "./Link";

type NavbarProps = {
  activeNavItem: string;
  setActiveNavItem: (value: string) => void;
};

const navbarMenu = ["Home", "Benefits", "Our Classes", "Contact Us"];

const Navbar = ({ activeNavItem, setActiveNavItem }: NavbarProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setActiveNavItem("Home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${
          isTopOfPage
            ? ""
            : "fixed top-0 left-0 z-40 w-full bg-primary-100 drop-shadow"
        }`}
      >
        <nav className="lg:max-w-screen-md sticky top-0 mx-auto flex w-5/6 justify-between py-5">
          <div className="flex items-center gap-20">
            <img src={Logo} alt="Logo" />
            <ul className="hidden items-center gap-5 md:flex">
              {navbarMenu.map((item) => (
                <Link
                  title={item}
                  activeNavItem={activeNavItem}
                  setActiveNavItem={setActiveNavItem}
                />
              ))}
            </ul>
          </div>
          <div className="hidden items-center gap-5 md:flex">
            <AnchorLink
              onClick={() => setActiveNavItem("Contact Us")}
              href="#contact-us"
            >
              Sign In
            </AnchorLink>
            <ActionButton setActiveNavItem={setActiveNavItem}>
              Become a Member
            </ActionButton>
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-secondary-400 md:hidden">
            <Bars3Icon
              onClick={() => setIsMenuToggled(true)}
              className="h-5 w-5 text-white"
            />
          </div>
        </nav>
      </div>

      {/* Mobile Menu Modal */}
      <div
        onClick={() => setIsMenuToggled(false)}
        className={`${
          isMenuToggled ? "block" : "hidden"
        } fixed left-0 top-0 z-40 h-full w-full md:hidden`}
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
