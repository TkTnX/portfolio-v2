import React, { useState } from "react";

import s from "./styles.module.scss";

export const Header: React.FC = () => {
  const [blackTheme, setBlackTheme] = useState(false);

  const onClickSetBlackTheme = () => {
    setBlackTheme(!blackTheme);
    localStorage.setItem("setDarkTheme", blackTheme ? "light" : "black");
  };
  const getLocalData = localStorage.getItem("setDarkTheme") === "black";

  getLocalData
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");

  return (
    <header className={s.header}>
      <h3 className={s.logo}>timur.dev</h3>
      <nav className={s.nav}>
        <ul className={s.list}>
          <button onClick={onClickSetBlackTheme} className={s.theme}>
            <span className={`${getLocalData ? s.black : s.light}`}>
              {getLocalData ? "🌙" : "🌞"}
            </span>
          </button>
          <li className={s.list__item}>
            <a href="#about" className={s.list__link}>
              Обо мне
            </a>
          </li>
          <li className={s.list__item}>
            <a href="#projects" className={s.list__link}>
              Проекты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
