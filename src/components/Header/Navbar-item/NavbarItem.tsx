import * as React from "react";
import s from "./s.module.scss";
interface INavbarItemProps {
  name: string;
  link: string;
  isBig?: boolean;
  setOpen: (open: boolean) => void;
}

const NavbarItem: React.FunctionComponent<INavbarItemProps> = ({
  name,
  link,
  isBig,
  setOpen,
}) => {



  return (
    <li
      onClick={() => setOpen(false)}
      className={`${s.list__item} ${isBig ? s.list__itemBig : ""}`}
    >
      <a href={link} className={s.list__link}>
        {name}
      </a>
    </li>
  );
};

export default NavbarItem;
