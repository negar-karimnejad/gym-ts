import { ClassesProps } from "@/shared/types";

function Class(item: ClassesProps) {
  return (
    <div className="group relative mx-3 inline-block w-[315px] cursor-pointer">
      <img src={item.image} alt={item.name} />
      <div className="absolute left-0 right-0 top-0 bottom-0 m-auto flex flex-col items-center justify-center p-5 text-center text-white opacity-0 transition-all group-hover:opacity-100">
        <div className="absolute h-full w-full bg-primary-500 opacity-80"></div>
        <h4 className="z-10 mb-5 font-montserrat text-xl font-bold text-white opacity-100">
          {item.name}
        </h4>
        <p className="z-10 text-sm leading-5">{item.description}</p>
      </div>
    </div>
  );
}

export default Class;
