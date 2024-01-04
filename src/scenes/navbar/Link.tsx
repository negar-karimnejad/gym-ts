type LinkProps = {
  title: string;
  activeNavItem: string;
  setActiveNavItem: React.Dispatch<React.SetStateAction<string>>;
};

function Link({ title, activeNavItem, setActiveNavItem }: LinkProps) {
  return (
    <li
      className={`${
        activeNavItem === title ? "text-primary-500" : ""
      } cursor-pointer`}
      onClick={() => setActiveNavItem(title)}
    >
      {title}
    </li>
  );
}

export default Link;
