import ActionButton from "../../shared/ActionButton";
import { SelectedPage } from "../../shared/types";
import { CheckIcon } from "@heroicons/react/24/solid";
import AboutPhoto from "../../assets/AboutPhoto.jpg";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="about"
      className=" justify-evenly items-center my-10 py-10 md:h-full md:pb-0"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
        className="flex md:flex-row flex-col mx-3 md:mx-auto md:px-auto  md:w-5/6 gap-16 bg-primarybg-100 items-center justify-evenly"
      >
        {/* Image */}
        <div className="md:flex hidden md:basis-2/5 md:w-2/3 justify-center items-center md:rounded-[40px] md:bg-white  md:px-12 md:mx-9 md:z-10 md:py-10">
          <img src={AboutPhoto} alt="" className='rounded-[40px]  h-[308px] w-full ' />
        </div>

        {/* About */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col gap-4 basis-2/5 my-12 mx-8 rounded-3xl p-8 bg-white items-start"
        >
          <h2 className="text-3xl font-bold">Few Words About Super Cleaners Cleaning Services</h2>

          <p className="text-[12px] ">
            Founded in 2021, Super Cleaners is a premier cleaning service
            provider dedicated to delivering top-notch cleaning solutions for
            both residential and commercial spaces. Our team of experienced
            professionals uses eco-friendly products and state-of-the-art
            equipment to ensure your environment is spotless and healthy.<span className="hidden md:inline"> We
            pride ourselves on our attention to detail, reliability, and
            exceptional customer service, making us the trusted choice for all
            your cleaning needs.</span>
          </p>

          <ul className="text-sm mb-1 justify-start items-start font-semibold">
            <li className="flex gap-1">
              <CheckIcon className="w-5 text-blue-700 font-bold" />
              <span>Coverage of 90% of UK cities and towns</span>
            </li>
            <li className="flex gap-1">
              <CheckIcon className="w-5 text-blue-700 font-bold" />
              <span>6 types of Cleaning available.</span>
            </li>
            <li className="flex gap-1">
              <CheckIcon className="w-5 text-blue-700 font-bold" />
              <span>Over 120 professional cleaners</span>
            </li>
            <li className="flex gap-1">
              <CheckIcon className="w-5 text-blue-700 font-bold" />
              <span>7 days a week service</span>
            </li>
            <li className="flex gap-1">
              <CheckIcon className="w-5 text-blue-700 font-bold" />
              <span>UK based office for support</span>
            </li>
          </ul>

          <ActionButton setSelectedPage={setSelectedPage}>
            View Services
          </ActionButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
