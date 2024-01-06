import EvolveText from "@/assets/EvolveText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import ActionButton from "@/shared/ActionButton ";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type HomeProps = {
  setActiveNavItem: (value: string) => void;
};

function Home({ setActiveNavItem }: HomeProps) {
  return (
    <div className="bg-gray-20" id="home">
      <motion.div
        onViewportEnter={() => setActiveNavItem("Home")}
        className="mx-auto mt-16 flex w-5/6 flex-col items-center gap-16 py-10 md:flex-row"
      >
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
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
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-5 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setActiveNavItem={setActiveNavItem}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setActiveNavItem("Contact Us")}
              href="#contact-us"
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>
        <div>
          <img src={HomePageGraphic} alt="HomePageGraphic" />
        </div>
      </motion.div>

      {/* SPONSORS */}
      <div className="h-20 w-full bg-primary-100 ">
        <div className="mx-auto grid h-full w-5/6 grid-cols-3 place-content-center items-center gap-x-14 md:grid-cols-4 md:gap-x-5">
          <img src={SponsorRedBull} alt="Sponsor RedBull" />
          <img src={SponsorForbes} alt="Sponsor Forbes" />
          <img src={SponsorFortune} alt="Sponsor Fortune" />
        </div>
      </div>
    </div>
  );
}

export default Home;
