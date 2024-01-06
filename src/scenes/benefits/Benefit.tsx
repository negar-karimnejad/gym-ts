import { BenefitProps } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type BenefitPageProps = {
  item: BenefitProps;
  setActiveNavItem: (value: string) => void;
};

function Benefit({ item, setActiveNavItem }: BenefitPageProps) {
  return (
    <div className="mt-5 flex flex-col items-center justify-center gap-4 rounded-md border py-8 px-5">
      <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
        {item.icon}
      </div>
      <h4 className="font-montserrat font-bold">{item.title}</h4>
      <p className="text-center text-sm">{item.description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setActiveNavItem("Contact Us")}
        href="#contact-us"
      >
        <p>Learn More</p>
      </AnchorLink>
    </div>
  );
}

export default Benefit;
