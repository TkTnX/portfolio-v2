import React from "react";
import s from "./styles.module.scss";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import GithubImg from "./images/github.svg?react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TelegramImg from "./images/telegram.svg?react";
import myImg from "./images/myImg.jpg";

const technologiesList = [
  {
    img: "/images/js.svg",
  },
  {
    img: "/images/ts.svg",
  },
  {
    img: "/images/react.svg",
  },
  {
    img: "/images/html.svg",
  },
  {
    img: "/images/css.svg",
  },
  {
    img: "/images/scss.svg",
  },
  {
    img: "/images/nextjs.svg",
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
            Привет, меня зовут <span>Тимур</span>! Я  фронтенд
            разработчик, верстальщик
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
                {technologiesList.map((item, index) => {
                  return (
                    <li className={s.stack__item} key={index}>
                      <img width={50} src={item.img} alt="технология" />
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
