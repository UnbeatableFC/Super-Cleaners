import { MoveType } from "../../shared/types";
import { StarIcon } from "@heroicons/react/24/solid";

const Move = ({ title }: MoveType) => {
  return (
    <div className="flex gap-1 p-3">
      <div className="flex">
      <StarIcon className="w-4 md:w-6 text-white font-bold" />
      </div>
      <div>
        <p className="text-white text-sm md:text-lg ">{title}</p>
      </div>
    </div>
  );
};

export default Move;
