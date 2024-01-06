import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import EvolveText from "@/assets/EvolveText.png";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type ContactProps = {
  setActiveNavItem: (value: string) => void;
};

function Contact({ setActiveNavItem }: ContactProps) {
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <motion.div
      onViewportEnter={() => setActiveNavItem("Contact Us")}
      className="mx-auto mt-16 w-5/6"
      id="contact-us"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="md:my-5 md:w-3/5"
      >
        <h2 className="font-montserrat text-xl font-extrabold">
          <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
        </h2>
        <p className="my-5">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
          leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </p>
      </motion.div>

      {/* FORM AND IMAGE */}
      <div className="flex flex-col justify-between gap-16 sm:flex-row">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            method="POST"
            action="https://formsubmit.co/negar.karimnejad@gmail.com"
            className="flex w-full flex-1 flex-col gap-3"
          >
            <input
              className="rounded-md bg-primary-300 p-2 font-bold outline-none placeholder:text-white"
              type="text"
              placeholder="NAME"
              {...register("name", { required: true, maxLength: 100 })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500 ">
                {errors.name.type === "required" && "This field is required"}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input
              className="rounded-md bg-primary-300 p-2 font-bold outline-none placeholder:text-white"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-primary-500 ">
                {errors.email.type === "required" && "This field is required"}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            <textarea
              className="resize-none rounded-md bg-primary-300 p-2 font-bold outline-none placeholder:text-white"
              placeholder="MESSAGE"
              rows={4}
              cols={50}
              {...register("message", { required: true, maxLength: 2000 })}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-primary-500 ">
                {errors.message.type === "required" && "This field is required"}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <div className="mt-3">
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </motion.div>

        <div className="relative flex-1">
          <img
            className="h-full w-full"
            src={ContactUsPageGraphic}
            alt="ContactUsPageGraphic"
          />
          <img
            className="absolute -z-50 -mt-[7%] opacity-90"
            src={EvolveText}
            alt="EvolveText"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
