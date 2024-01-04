import HomePageGraphic from "@/assets/HomePageGraphic.png";
import EvolveText from "@/assets/EvolveText.png";
import HomePageText from "@/assets/HomePageText.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionButton from "@/shared/ActionButton ";

function Home() {
  return (
    <div className="bg-gray-20">
      <div className="mx-auto mt-16 flex w-5/6 items-center gap-16 py-10">
        <div>
          <img src={EvolveText} alt="EvolveText" className="w-[550px]" />
          <img
            src={HomePageText}
            alt="HomePageText"
            className="ml-[5%] -mt-10 w-[470px]"
          />
          <p className="mt-8 text-sm">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </p>
          <div className="mt-5 flex items-center gap-8">
            <ActionButton>Join Now</ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              href=""
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        <div>
          <img src={HomePageGraphic} alt="HomePageGraphic" />
        </div>
      </div>
      <div className="h-20 w-full bg-primary-100 ">
        <div className="mx-auto grid h-full w-5/6 grid-cols-4 gap-x-5 place-content-center items-center">
          <img src={SponsorRedBull} alt="SponsorRedBull" />
          <img src={SponsorForbes} alt="SponsorForbes" />
          <img src={SponsorFortune} alt="SponsorFortune" />
        </div>
      </div>
    </div>
  );
}

export default Home;