import React, { useState } from "react";
import navbarItems from "../../data/navbar.json";
import s from "./styles.module.scss";
import NavbarMobileBtn from "../NavbarMobileBtn/NavbarMobileBtn";
import NavbarItem from "./Navbar-item/NavbarItem";
import MobileMenu from "../Mobile-menu/MobileMenu";

export const Header: React.FC = () => {
  const [blackTheme, setBlackTheme] = useState(false);
  const [open, setOpen] = useState(false);
  const swiper = document.querySelector(".swiper") as HTMLElement;
  const onClickSetBlackTheme = () => {
    setBlackTheme(!blackTheme);
    localStorage.setItem("setDarkTheme", blackTheme ? "light" : "black");
  };
  const getLocalData = localStorage.getItem("setDarkTheme") === "black";

  getLocalData
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");

  if (open) {
    document.body.style.overflow = "hidden";
    if (swiper) swiper.style.zIndex = "-1";
  } else {
    document.body.style.overflow = "auto";
    if (swiper) swiper.style.zIndex = "0";
  }

  return (
    <header className={s.header}>
      <div className={`container ${s.wrapper}`}>
        <h3 className={s.logo}>timur.dev</h3>
        <nav className={s.nav}>
          <ul className={s.list}>
            <button onClick={onClickSetBlackTheme} className={s.theme}>
              <span className={`${getLocalData ? s.black : s.light}`}>
                {getLocalData ? "🌙" : "🌞"}
              </span>
            </button>

            {navbarItems.map((item, index) => (
              <NavbarItem
                key={index}
                name={item.name}
                link={item.link}
                isBig={true}
                setOpen={setOpen}
              />
            ))}

            <NavbarMobileBtn open={open} setOpen={setOpen} />
          </ul>
        </nav>
      </div>
      {open && <MobileMenu setOpen={setOpen} />}
    </header>
  );
};
