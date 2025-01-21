import { TestType, SelectedPage, MoveType } from "../../shared/types";
import Test from "./Test";
import Review1 from "../../assets/Review1.jpg";
import Review2 from "../../assets/Review2.jpg";
import Review3 from "../../assets/Review3.jpg";
import { motion } from "framer-motion";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Move from "./Move";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const move: Array<MoveType> = [
  { title: "Carpet Cleaning" },
  { title: "Mattress Cleaning" },
  { title: "Oven Cleaning" },
  { title: "Window Cleaning" },
  { title: "End of Tenancy Cleaning" },
  { title: "Upholstery Cleaning" },
];

const testimon: Array<TestType> = [
  {
    image: Review1,
    name: "Ralph Edwards",
    location: "Dore, Sheffield",
    testimonial:
      "SuperCleaners provided excellent service! My home has never looked better. Highly recommend them for their professionalism and attention to detail. I will definitely be using their services again.",
  },
  {
    image: Review2,
    name: "Kriston Watson",
    location: "Lisvane, Cardiff",
    testimonial:
      "SuperCleaners exceeded my expectations! They were prompt, thorough, and left my house spotless. Their team was courteous and respectful, making the whole experience pleasant and stress-free.",
  },
  {
    image: Review3,
    name: "Courtney Lisa",
    location: "Knighton, Leicester",
    testimonial:
      "SuperCleaners did an amazing job! They were prompt, thorough, and left my house spotless. Their attention to detail and commitment to quality is unmatched. Highly recommend them to anyone in need of cleaning services.",
  },
];

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Testimonial = ({ setSelectedPage }: Props) => {
  return (
    <section id="reviews" className="w-5/6 bg-gray-50 mb-10 py-5 mt-36 mx-auto">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Reviews)}
        className="flex flex-col items-center justify-center mx-auto "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        <div className="flex items-center justify-center pb-8">
          <h1 className="md:text-4xl text-3xl text-center">
            What our customer says
          </h1>
        </div>

        <motion.div className="flex flex-col sm:flex-row items-center md:grid md:grid-cols-3 mx-auto justify-center md:w-4/5">
          {testimon.map((testimon: TestType) => (
            <Test
              key={testimon.name}
              location={testimon.location}
              image={testimon.image}
              name={testimon.name}
              testimonial={testimon.testimonial}
            />
          ))}
        </motion.div>

        <div className="hidden md:flex gap-4 mt-10">
          <button title="previous">
            <ArrowLeftIcon className="bg-blue-300 w-12 p-4 text-white rounded-full hover:bg-blue-600 transition duration-300" />
          </button>
          <button title="next">
            <ArrowRightIcon className="bg-blue-300 w-12 p-4 text-white rounded-full hover:bg-blue-600 transition duration-300" />
          </button>
        </div>
        <div className="flex items-center mt-4 md:hidden">
          <button className="bg-blue-300 p-2 text-white rounded-full hover:bg-blue-600 transition duration-300">
            More Reviews
          </button>
        </div>
      </motion.div>

      <div className="overflow-hidden w-full h-16 mt-12 bg-blue-400 py-8 md:py-16 flex items-center">
        <motion.div
          className="flex gap-3 whitespace-nowrap text-xl font-bold"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "80%", display: "inline-flex" }}
        >
          <span className=" flex gap-3">
            {move.map((move: MoveType, index) => (
              <Move key={index} title={move.title} />
            ))}
          </span>
          <span className=" flex gap-3">
            {move.map((move: MoveType, index) => (
              <Move key={index} title={move.title} />
            ))}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
