import React, { ReactNode } from "react";
type ActionButtonProps = {
  children: ReactNode;
};
function  ActionButton({ children }: ActionButtonProps) {
  return (
    <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
      {children}
    </button>
  );
}

export default ActionButton;
