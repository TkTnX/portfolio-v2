import React from "react";

import s from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <h3 className={s.logo}>timur.dev</h3>
      <nav className={s.nav}>
        <ul className={s.list}>
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
