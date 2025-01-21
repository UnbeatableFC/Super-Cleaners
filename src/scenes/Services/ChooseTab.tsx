
import { ServiceType, } from "../../shared/types";
import { motion } from "framer-motion";


const childVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit = (
  { icon, title, description }: ServiceType,
) => {
  return (
    <motion.div
      variants={childVariants}
      className="mt-5 rounded-md border-2 flex-1 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
    </motion.div>
  );
};

export default Benefit;

