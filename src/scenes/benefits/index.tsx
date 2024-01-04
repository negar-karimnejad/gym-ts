import AbstractWaves from "@/assets/AbstractWaves.png";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Sparkles from "@/assets/Sparkles.png";
import ActionButton from "@/shared/ActionButton ";
import { benefitsProps } from "@/shared/types";
import {
    AcademicCapIcon,
    HomeModernIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import Benefit from "./Benefit";

function Benefits() {
  const benefits: benefitsProps[] = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];

  return (
    <div className="mx-auto mt-16 w-5/6">
      <div className="md:my-5 md:w-3/5">
        <h2 className="font-montserrat text-xl font-extrabold">
          MORE THAN JUST GYM.
        </h2>
        <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2  md:grid-cols-3">
        {benefits.map((item) => (
          <Benefit key={item.title} {...item} />
        ))}
      </div>
      <div className="mt-20 flex flex-col items-center gap-16 md:flex-row">
        <img src={BenefitsPageGraphic} alt="BenefitsPageGraphic" />
        <div className="relative">
          <img
            src={AbstractWaves}
            className="absolute -left-16 -top-14 w-24"
            alt="AbstractWaves"
          />
          <h2 className="basis-3/5 font-montserrat text-xl font-bold tracking-tight">
            MILLIONS OF HAPPY MEMBERS GETTING{" "}
            <span className="text-primary-500">FIT</span>
          </h2>
          <p className="my-5">
            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
            ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
            vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
            sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
            pretium sapien proin integer nisl. Felis orci diam odio.
          </p>
          <p className="mb-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
          <ActionButton>Join Now</ActionButton>
          <img
            src={Sparkles}
            alt="Sparkles"
            className="absolute right-0 -bottom-10 h-20 w-20"
          />
        </div>
      </div>
    </div>
  );
}

export default Benefits;