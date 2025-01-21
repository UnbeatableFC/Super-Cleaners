import { SelectedPage, ServiceTabType, ServiceType } from "../../shared/types";
import { motion } from "framer-motion";
import {
  WrenchIcon,
  CheckBadgeIcon,
  CalendarDaysIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import ChooseTab from "./ChooseTab";
import MattressCleaning from "../../assets/MattressCleaning.jpg";
import OvenCleaning from "../../assets/OvenCleaning.jpg";
import WindowCleaning from "../../assets/WindowCleaning.jpg";
import EndOfTenancy from "../../assets/EndOfTenancy.jpg";
import Upholstery from "../../assets/Upholstery.jpg";
import ServiceTab from "./ServiceTab";
import ActionButton from "../../shared/ActionButton";
import { HomeModernIcon, TrashIcon } from "@heroicons/react/24/solid";
import GrowthTab from "./GrowthTab";
import ServiceMan from "../../assets/ServiceMan.png";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  children: React.ReactNode;
};

const Services = ({ setSelectedPage }: Props) => {
  const choose: Array<ServiceType> = [
    {
      icon: <WrenchIcon className="h-6 w-6" />,
      title: "Professional Machines",
      description:
        "We use the latest and most efficient professional cleaning machines to ensure the highest quality service.",
    },
    {
      icon: <CalendarDaysIcon className="h-6 w-6" />,
      title: "Years of Experience",
      description:
        "With over 20 years of experience in the cleaning industry, we have honed our skills to provide top-notch services.",
    },
    {
      icon: <CheckBadgeIcon className="h-6 w-6" />,
      title: "Trusted and Reliable",
      description:
        " Our clients trust us to deliver reliable and consistent cleaning services every time we offer them.",
    },
  ];
  const growths: Array<ServiceType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "750+",
      description: "Projects Finished",
    },
    {
      icon: <TrashIcon className="h-6 w-6" />,
      title: "15+",
      description: "Years Of Experience",
    },
    {
      icon: <HandThumbUpIcon className="h-6 w-6" />,
      title: "700+",
      description: "Satisfied Customers",
    },
    {
      icon: <UserIcon className="h-6 w-6" />,
      title: "120+",
      description: " Professional Cleaners",
    },
  ];

  const services: Array<ServiceTabType> = [
    {
      image: MattressCleaning,
      title: "Mattress Cleaning",
    },
    {
      image: MattressCleaning,
      title: "Mattress Cleaning",
    },
    {
      image: OvenCleaning,
      title: "Oven Cleaning",
    },
    {
      image: WindowCleaning,
      title: "Window Cleaning",
    },
    {
      image: EndOfTenancy,
      title: "End of Tenancy Cleaning",
    },
    {
      image: Upholstery,
      title: "Upholstery Cleaning",
    },
  ];

  return (
    <section id="services" className=" py-1">
      {/* Choose Tab */}
      <div className=" bg-gray-400/5 py-1">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
          className="mt-16 w-5/6 mx-auto justify-center items-center "
        >
          <div className="flex justify-center items-center">
            <h2 className="text-xl md:text-3xl font-bold">
              Why Choose Super Cleaners
            </h2>
          </div>
          <motion.div
            className="md:flex items-center justify-center gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {choose.map((choose: ServiceType) => (
              <ChooseTab
                key={choose.title}
                icon={choose.icon}
                title={choose.title}
                description={choose.description}
              />
            ))}
          </motion.div>
          <div></div>
        </motion.div>
      </div>

      {/* Main Service Div */}
      <div>
        <motion.div
          className="mx-auto flex flex-col w-5/6 mt-24 py-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex justify-center items-center mb-8">
            <h2 className="text-xl md:text-3xl font-bold">Cleaning Services</h2>
          </div>

          <div className="w-5/6 mx-auto">
            <ul className="grid grid-cols-3 gap-6 mx-auto">
              {services.map((item: ServiceTabType, index) => (
                <ServiceTab
                  key={`${item.title} - ${index}`}
                  title={item.title}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
        </motion.div>
        <div className="flex justify-center items-center">
          <ActionButton setSelectedPage={setSelectedPage}>
            View All Services
          </ActionButton>
        </div>
      </div>

      {/* Growth Flex */}
      <div id="pricing" className="flex justify-center items-center mt-20 w-5/6 mx-auto bg-blue-700 rounded-[45px]">
        {/* Four In One */}
        <div className="flex basis-3/4 flex-wrap gap-6 mx-auto py-14">
          <ul className="grid grid-cols-2 gap-6 mx-auto">
            {growths.map((growth: ServiceType) => (
              <GrowthTab
                key={growth.title}
                icon={growth.icon}
                title={growth.title}
                description={growth.description}
              />
            ))}
          </ul>
        </div>
        {/* Growth Text */}
        <div className="flex basis-2/5 flex-col items-start justify-start mr-12 -ml-10">
          <h2 className="md:text-3xl text-2xl font-semibold">
            We are the Fastest Growing Cleaning Company
          </h2>
          <p className="text-sm py-4 mb-3">
            With a commitment to excellence and a passion for cleanliness, we
            have rapidly expanded our services and client base. Our dedication
            to providing top-quality cleaning solutions has earned us a
            reputation as a trusted and reliable cleaning company. Join our
            growing list of satisfied customers and experience the Super
            Cleaners difference today.
          </p>
          <ActionButton setSelectedPage={setSelectedPage}>
            View Services
          </ActionButton>
        </div>
      </div>

      {/* Easier Cleaning */}
      <div className="flex w-5/6 mt-24 mx-auto items-center justify-evenly ">
        {/* Text */}
        <div className="flex basis-2/5 flex-col gap-3 items-start justify-center my-auto  ">
          <h2 className="text-3xl font-bold">
            We Make Cleaning Easier and More Convenient{" "}
          </h2>
          <p className="text-sm">
            Our team of professional cleaners is dedicated to making your life
            easier by providing efficient and thorough cleaning services. We
            understand the importance of a clean and healthy environment, and we
            strive to deliver exceptional results every time. Whether you need a
            one-time deep clean or regular maintenance, we have the expertise
            and resources to meet your needs.
          </p>
          <p className="text-sm">
            We offer a wide range of cleaning services tailored to suit your
            specific requirements. Our flexible scheduling options and
            competitive pricing make it easy for you to maintain a clean and
            organized space without any hassle. Let us take care of the cleaning
            so you can focus on what matters most to you.
          </p>
          <ActionButton setSelectedPage={setSelectedPage}>
            View Services
          </ActionButton>
        </div>
        {/* Image */}
        <div className="flex basis-3/5 items-center justify-center">
          <img className="object-contain" src={ServiceMan} alt="serviceman" />
        </div>
      </div>
    </section>
  );
};

export default Services;
