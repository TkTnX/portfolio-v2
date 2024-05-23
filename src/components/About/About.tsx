import React from "react";
import s from "./styles.module.scss";
import img from "./img.jpg";
export const About: React.FC = () => {
  return (
    <section id="about" className={s.about}>
      <div className={s.wrapper}>
        <div className={s.wrapper__img}>
          <img src={img} alt="img" />
        </div>
        <div className={s.text}>
          <div className={`hint ${s.hint}`}>ОБО МНЕ</div>
          <p className={s.info}>
            <span>Я - Тимур, фронтенд разработчик.</span> Мой путь в разработке
            начался осенью 2023 года. Сейчас мне 15 лет и я учусь в школе. Я
            стремлюсь к развитию в сфере веб-разработки и хочу продолжать
            изучать новые технологии и методики. На данный момент я использую
            <span> React</span>, <span>TypeScript</span> и много других
            технологий для разработки своих проектов.
          </p>
        </div>
      </div>
    </section>
  );
};
