import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import HeroPhoto from "../../assets/HeroPhoto.jpg";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="gap-16 justify-center items-center my-10 py-10 md:h-full md:pb-0">
      {/* IMAGE AND HEADER */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      >
        {/* MAIN HEADER */}
        <div className="z-10 py-12 md:py-24 md:mt-12 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className=""
          >
            <div className="flex flex-col gap-4 justify-center items-center md:items-start">
              <p className="text-sm md:text-md md:text-start text-blue-700 bg-blue-200 py-2 px-2 font-bold rounded-md">
                Professional Cleaning Service Company
              </p>
              <h2 className="text-4xl text-center md:text-5xl font-bold">
                Trusted and Reliable <br /> Cleaning Services
              </h2>
              <p className="mt-2 md:mt-8 text-md  md:text-sm text-center md:text-start">
                Super Cleaners is a professional cleaning service in your local
                area. We provide a range of services including house cleaning,
                office cleaning, and more.
              </p>
            </div>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center justify-center gap-8 md:justify-start"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Contact Us
            </ActionButton>
            <ActionButton setSelectedPage={setSelectedPage}>
              View Services
            </ActionButton>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:h-[450px] md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HeroPhoto} alt="Hero Photo" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
