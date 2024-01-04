import AnchorLink from "react-anchor-link-smooth-scroll";

type LinkProps = {
  title: string;
  activeNavItem: string;
  setActiveNavItem: React.Dispatch<React.SetStateAction<string>>;
};

function Link({ title, activeNavItem, setActiveNavItem }: LinkProps) {
  console.log(title.toLocaleLowerCase().replace(" ", "-"));

  return (
    <AnchorLink
      className={`${
        activeNavItem === title ? "text-primary-500" : ""
      } cursor-pointer`}
      onClick={() => setActiveNavItem(title)}
      href={`#${title.toLocaleLowerCase().replace(" ", "-")}`}
    >
      {title}
    </AnchorLink>
  );
}

export default Link;
