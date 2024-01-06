import React, { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
type ActionButtonProps = {
  children: ReactNode;
  setActiveNavItem: (value: string) => void;
};
function ActionButton({ children, setActiveNavItem }: ActionButtonProps) {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setActiveNavItem("Contact Us")}
      href="#contact-us"
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
