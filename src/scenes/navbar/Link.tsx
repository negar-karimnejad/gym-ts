import AnchorLink from "react-anchor-link-smooth-scroll";

type LinkProps = {
  title: string;
  activeNavItem: string;
  setActiveNavItem: (value: string) => void;
};

function Link({ title, activeNavItem, setActiveNavItem }: LinkProps) {
  console.log(title);

  return (
    <AnchorLink
      className={`${
        activeNavItem === title ? "text-primary-500" : ""
      } cursor-pointer transition duration-500 hover:text-primary-300`}
      onClick={() => setActiveNavItem(title)}
      href={`#${title.toLocaleLowerCase().replace(" ", "-")}`}
    >
      {title}
    </AnchorLink>
  );
}

export default Link;
