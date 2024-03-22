import React from "react";
import s from "./styles.module.scss";
import { Card } from "../Card/Card";
import projectsList from "./../../data/projects.json";
export const Portfolio: React.FC = () => {
  return (
    <section id="projects" className={s.portfolio}>
      <div className={`hint ${s.hint}`}>ПОРТФОЛИО</div>
      <ul className={s.list}>
        {projectsList.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </ul>
    </section>
  );
};
