import { ServiceTabType } from "../../shared/types";

const ServiceTab = ({ image, title }: ServiceTabType) => {
  return (
    <li className="flex flex-1 min-w-[250px] p-4 ">
      <div className="flex flex-col justify-center items-center">
        <img
          className="flex basis-4/5 w-fit h-52 rounded-t-2xl object-cover"
          src={`${image}`}
          alt={title}
        />
        <div className="bg-slate-300/40 w-full rounded-b-2xl py-3">
          <p className="text-sm font-bold text-center">{title}</p>
        </div>
      </div>
    </li>
  );
};

export default ServiceTab;
