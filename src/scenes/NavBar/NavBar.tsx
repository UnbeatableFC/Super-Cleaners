import { useState } from "react";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import Logo from "../../assets/Logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import ActionButton from "../../shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopPage: boolean;
};

const NavBar = ({ selectedPage, setSelectedPage, isTopPage }: Props) => {
  const flexBetween = "flex justify-between items-center";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const navbarBackground = isTopPage ? "" : "bg-blue-20 drop-shadow";

  return (
    <nav>
      <div
        className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-3`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <div className="flex items-center gap-4">
              <img className="w-16" src={Logo} alt="Logo" />
              <p className="text-xl text-nowrap text-bluelogo-500 font-bold">
                Super Cleaners
              </p>
            </div>

            {isAboveMediumScreens ? (
              <div className={`flex justify-end items-center gap-24 w-full`}>
                <>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link
                      page="About"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <Link
                      page="Services"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <Link
                      page="Pricing"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <Link
                      page="Reviews"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="Contact"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <ActionButton setSelectedPage={setSelectedPage}>
                      Book Now
                    </ActionButton>
                  </div>
                </>
              </div>
            ) : (
              <>
                <button
                  title="Menu-Bar"
                  className="rounded-full bg-blueicon-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[250px] bg-blue-300 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button title='Close-Icon' onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-slate-700" />
            </button>
          </div>

          <div>
            <div className={`${flexBetween} flex-col gap-10 text-xl`}>
            <Link
                      page="About"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <Link
                      page="Services"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <Link
                      page="Pricing"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <Link
                      page="Reviews"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="Contact"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
