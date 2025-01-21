import { ServiceType } from "../../shared/types";
import { motion } from "framer-motion";

const childVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const GrowthTab = ({ icon, title, description }: ServiceType) => {
  return (
    <motion.div
      variants={childVariants}
      className="flex flex-col rounded-xl bg-white items-center w-48 h-44 object-cover gap-3 justify-center px-5 py-5 text-center"
    >
      <div className="mb-2 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 text-blue-700 bg-blue-200 p-4">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="text-2xl">{title}</h4>
        <p className="my-1 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default GrowthTab;
