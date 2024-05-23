import React from "react";
import s from "./styles.module.scss";

// @ts-ignore
import GithubImg from "./images/github.svg?react";
// @ts-ignore
import TelegramImg from "./images/telegram.svg?react";
import myImg from "./images/myImg.jpg";

const technologiesList = [
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
];

export const Title: React.FC = () => {
  return (
    <section className={s.title}>
      <div className={s.wrapper}>
        <div className={s.text}>
          <h1 className={s.text__title}>
            Front-End <span>React</span> Developer
          </h1>
          <p className={s.text__desc}>
            Привет, меня зовут <span>Тимур</span>! Я начинающий фронтенд
            разработчик
          </p>
          <ul className={s.text__socials}>
            <li className={s.social}>
              <a href="https://github.com/TkTnX">
                <GithubImg className={`${s.socialImg} socialImg`} />
              </a>
            </li>
            <li className={s.social}>
              <a href="https://t.me/Timurka2077">
                <TelegramImg className={`${s.socialImg} socialImg`} />
              </a>
            </li>
          </ul>

          <div className={s.stack}>
            <div className={s.stack__title}>
              <span>Технологии</span>
              <ul className={s.stack__list}>
                {technologiesList.map(({ img }, index) => {
                  return (
                    <li className={s.stack__item} key={index}>
                      <img width={50} src={img} alt="технология" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={s.wrapper__img}>
          <img src={myImg} alt="картинка" />
        </div>
      </div>
    </section>
  );
};
