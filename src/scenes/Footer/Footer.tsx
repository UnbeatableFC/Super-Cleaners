import ActionButton from "../../shared/ActionButton";
import { SelectedPage } from "../../shared/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="contact"
      className="flex flex-col px-5 w-5/6 md:px-0 md:w-[70%] mx-auto pb-10"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        className="flex border-b-2 border-gray-200 pb-5 flex-col gap-3 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4"
      >
        <div className="flex flex-col gap-3 ">
          <p className="text-3xl text-nowrap text-bluelogo-500 font-bold">
            Super Cleaners
          </p>
          <div className="flex flex-wrap sm:flex-col sm:flex-nowrap gap-4">
            <p className="text-gray-500 text-sm">
              {" "}
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="text-blue-500 text-xl"
              />{" "}
              +234 (0) 703-2191-259{" "}
            </p>
            <p className="text-gray-500 text-sm">
              {" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-blue-500 text-xl"
              />{" "}
              mpamugow@gmail.com{" "}
            </p>
            <p className="text-gray-500 text-sm">
              {" "}
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-blue-500 text-xl"
              />{" "}
              Lagos,Nigeria{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:items-start justify-center items-center">
          <h3 className="text-xl text-center sm:text-start md:text-center  md:text-lg font-bold">
            Services
          </h3>
          <div className="flex sm:flex-col justify-between flex-row gap-3">
            <a
              className="text-gray-500 text-sm hover:text-blue-500 transition duration-300"
              href="#services"
              onClick={() => setSelectedPage(SelectedPage.Services)}
            >
              Carpet Cleaning
            </a>
            <a
              className="text-gray-500 text-sm hover:text-blue-500 transition duration-300"
              href="#services"
              onClick={() => setSelectedPage(SelectedPage.Services)}
            >
              Mattress Cleaning
            </a>
            <a
              className="text-gray-500 text-sm hover:text-blue-500 transition duration-300"
              href="#services"
              onClick={() => setSelectedPage(SelectedPage.Services)}
            >
              Oven Cleaning
            </a>
          </div>
          <div className="flex md:flex-col sm:flex-col sm:gap-3 justify-between text-nowrap flex-row gap-1">
            <a
              className="text-gray-500 text-sm hover:text-blue-500 transition duration-300"
              href="#services"
              onClick={() => setSelectedPage(SelectedPage.Services)}
            >
              Window Cleaning
            </a>
            <a
              className="text-gray-500 text-sm hover:text-blue-500 transition duration-300"
              href="#services"
              onClick={() => setSelectedPage(SelectedPage.Services)}
            >
              End of Tenancy Cleaning
            </a>
            <a
              className="text-gray-500 text-sm hover:text-blue-500 transition duration-300"
              href="#services"
              onClick={() => setSelectedPage(SelectedPage.Services)}
            >
              Upholstery Cleaning
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:items-start justify-center items-center">
          <h3 className="text-xl text-center sm:text-start md:text-center  md:text-lg font-bold">
            Help & Information
          </h3>
          <div className="flex md:flex-col justify-between flex-row sm:flex-col  sm:gap-3 gap-7">
            <a
              className="text-gray-500 text-sm hover:text-blue-500 transition duration-300"
              href="#about"
              onClick={() => setSelectedPage(SelectedPage.About)}
            >
              About Us
            </a>
            <a
              className="text-gray-500 text-sm hover:text-blue-500 transition duration-300"
              href="#pricing"
              onClick={() => setSelectedPage(SelectedPage.Pricing)}
            >
              Pricing
            </a>
            <a
              className="text-gray-500 text-sm hover:text-blue-500 transition duration-300"
              href="#reviews"
              onClick={() => setSelectedPage(SelectedPage.Reviews)}
            >
              Client Reviews
            </a>
          </div>
          <div className="flex md:flex-col justify-between flex-row gap-5 sm:flex-col sm:gap-3 ">
            <a
              className="text-gray-500 text-sm hover:text-blue-500 transition duration-300"
              href="#services"
              onClick={() => setSelectedPage(SelectedPage.Services)}
            >
              Blog
            </a>
            <a
              className="text-gray-500 text-sm hover:text-blue-500 transition duration-300"
              href="#about"
              onClick={() => setSelectedPage(SelectedPage.About)}
            >
              Privacy Policy
            </a>
            <a
              className="text-gray-500 text-sm hover:text-blue-500 transition duration-300"
              href="#services"
              onClick={() => setSelectedPage(SelectedPage.Services)}
            >
              Terms Of Service
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center sm:justify-center md:justify-start md:items-start gap-3 md:gap-4">
          <h3 className="text-lg font-bold">Become a SUPER CLEANER!</h3>
          <p className="text-gray-500 text-sm text-center md:text-start">
            Join our team of professional cleaners and enjoy flexible hours,
            competitive pay, and a supportive work environment.
          </p>
          <ActionButton setSelectedPage={setSelectedPage}>
            Apply to Join Us
          </ActionButton>
        </div>
      </motion.div>
      {/* last part */}
      <div className="flex justify-between items-center mx-auto pt-3 sm:w-5/6">
        <p className="text-gray-500 text-[10px] sm:text-sm">©️2025 WhizzyDigics. All Rights Reserved.</p>

        <div className="flex gap-2 ">
          <FontAwesomeIcon icon={faFacebook} className="text-white p-[2px] sm:p-1 md:p-1 text-sm sm:text-lg md:text-2xl md:rounded-full rounded-[100%] bg-blue-500" />
          <FontAwesomeIcon icon={faTwitter} className="text-white p-[2px] sm:p-1 md:p-1 text-sm sm:text-lg md:text-2xl md:rounded-full rounded-[100%] bg-blue-500" />
          <FontAwesomeIcon icon={faInstagram} className="text-white p-[2px] sm:p-1 md:p-1 text-sm sm:text-lg md:text-2xl md:rounded-full rounded-[100%] bg-blue-500" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
