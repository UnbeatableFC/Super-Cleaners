import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-2xl w-fit text-white bg-blue-20 px-7 py-2 hover:bg-white hover:text-blue-20 transition duration-500"
      onClick={() => setSelectedPage(SelectedPage.Services)}
      href={`${SelectedPage.Services}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
