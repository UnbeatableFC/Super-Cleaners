import { TestType } from "../../shared/types";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const childVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Test = ({ image, name, testimonial, location }: TestType) => {
  return (
    <motion.div
      variants={childVariants}
      className="flex-col mt-5 rounded-2xl border-2 flex w-4/5 bg-white/100 border-gray-100 px-5 sm:px-2 md:px-5 py-6 text-center gap-4"
    >
      <div className="flex sm:flex-col md:flex-row justify-start gap-4 items-center">
        <div>
          <img
            className="rounded-full w-12 h-12 object-fit"
            src={`${image}`}
            alt={name}
          />
        </div>
        <div className="flex flex-col">
          <h5 className="text-sm font-semibold justify-start">{name}</h5>
          <p className="text-[12px] italic text-start">{location}</p>
        </div>
      </div>
      <div className="flex items-start">
        <p className="text-[11px] text-start sm:text-center md:text-start">{testimonial}</p>
      </div>
      <div className="flex bg-blue-500 p-3 rounded-3xl gap-1">
        <StarIcon className="w-4 text-white font-bold" />
        <StarIcon className="w-4 text-white font-bold" />
        <StarIcon className="w-4 text-white font-bold" />
        <StarIcon className="w-4 text-white font-bold" />
        <StarIcon className="w-4 text-white font-bold" />
      </div>
    </motion.div>
  );
};

export default Test;
