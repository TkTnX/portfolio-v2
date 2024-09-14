import * as React from "react";
import s from "./s.module.scss";
interface INavbarMobileBtnProps {
  setOpen: (open: boolean) => void;
  open: boolean;
}

const NavbarMobileBtn: React.FunctionComponent<INavbarMobileBtnProps> = ({
  setOpen,
  open,
}) => {
  return (
    <button onClick={() => setOpen(!open)} className={`${s.button} ${open && s.open}`}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default NavbarMobileBtn;
