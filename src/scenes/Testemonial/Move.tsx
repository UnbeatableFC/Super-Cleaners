import { MoveType } from "../../shared/types";
import { StarIcon } from "@heroicons/react/24/solid";

const Move = ({ title }: MoveType) => {
  return (
    <div className="flex gap-1 p-4">
      <div className="flex">
      <StarIcon className="w-8 text-white font-bold" />
      </div>
      <div>
        <p className="text-white ">{title}</p>
      </div>
    </div>
  );
};

export default Move;
