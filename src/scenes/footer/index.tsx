import Logo from "@/assets/Logo.png";

export default function Footer() {
  return (
    <div className="mt-20 w-full bg-primary-100">
      <div className="mx-auto flex w-5/6 flex-col gap-16 py-10 sm:flex-row sm:gap-0">
        <div className="flex-1">
          <img src={Logo} alt="Logo" />
          <p className="my-5 w-4/5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="flex flex-1 flex-col gap-16 sm:flex-row md:gap-0">
          <div className="flex-1">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Massa orci senectus</p>
            <p className="my-5">Et gravida id et etiam</p>
            <p>Ullamcorper vivamus</p>
          </div>
          <div className="flex-1">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
            <p>(333)425-6825</p>
          </div>
        </div>
      </div>
    </div>
  );
}
