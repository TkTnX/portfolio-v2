import React from "react";
import s from "./styles.module.scss";
import githubImg from "./../Title/images/github.svg";
import tabImg from "./tab.svg";

interface CardProps {
  id: number;
  img: string;
  title: string;
  goals: string;
  technologies: string;
  github?: string;
  demo?: string;
}

export const Card: React.FC<CardProps> = ({
  id,
  img,
  title,
  goals,
  technologies,
  github,
  demo,
}) => {
  return (
    <li className={s.item}>
      <div
        className={id % 2 === 0 ? `${s.wrapper} ${s.rowReverse}` : s.wrapper}
      >
        <div className={s.imgWrap}>
          <img src={img} alt="inkHouse" />
        </div>
        <div className={s.info}>
          <h1 className={s.cardTitle}>{title}</h1>
          <p className={s.desc}>Цели: {goals}</p>

          <p className={s.desc}>Технологии: {technologies}</p>
          <div className={s.deployments}>
            {github && (
              <a target="_blank" href={github} className={s.deployment}>
                Код
                <img src={githubImg} alt="github" />
              </a>
            )}

            {demo && (
              <a target="_blank" href={demo} className={s.deployment}>
                Демо
                <img src={tabImg} alt="Демо" />
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
