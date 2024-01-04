import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import EvolveText from "@/assets/EvolveText.png";
import ActionButton from "@/shared/ActionButton ";

function Contact() {
  return (
    <div className="mx-auto mt-16 w-5/6">
      <div className="md:my-5 md:w-3/5">
        <h2 className="font-montserrat text-xl font-extrabold">
          <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
        </h2>
        <p className="my-5">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
          leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </p>
      </div>
      <div className="flex justify-between gap-16">
        <form className="flex w-full flex-col gap-3">
          <input
            className="rounded-md bg-primary-300 p-2 text-white placeholder:text-white"
            type="text"
            placeholder="NAME"
          />
          <input
            className="rounded-md bg-primary-300 p-2 text-white placeholder:text-white"
            type="text"
            placeholder="EMAIL"
          />
          <textarea
            className="resize-none rounded-md bg-primary-300 p-2 text-white placeholder:text-white"
            name=""
            placeholder="MESSAGE"
            id=""
            rows={3}
          ></textarea>
          <div className="mt-3">
            <ActionButton>Submit</ActionButton>
          </div>
        </form>
        <div className="relative w-[680px] h-[430px]">
          <img
            className="h-full w-full"
            src={ContactUsPageGraphic}
            alt="ContactUsPageGraphic"
          />
          <img className="-mt-7 absolute opacity-90 -z-50" src={EvolveText} alt="EvolveText" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
