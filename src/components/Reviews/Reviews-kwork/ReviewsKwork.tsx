import s from "./s.module.scss";
const ReviewsKwork = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>
        <span>K</span>work
      </h2>
      <div className={s.userWrapper}>
        <div className={s.userImgWrapper}>
          <img
            className={s.img}
            src="https://cdn-edge.kwork.ru/files/avatar/large/03/16801985-2.jpg"
            alt="Kwork Profile"
          />
          <a className={s.userLink} href="https://kwork.ru/user/timurttx">
            Посмотреть профиль
          </a>
        </div>

        <div className={s.userText}>
          <h3 className={s.userTitle}>Тимур - профиль на Kwork</h3>
          <p className={s.userSubtitle}>Frontend-разработчик, верстальщик</p>
          <p className={s.userDesc}>
            Добро пожаловать! Я профессиональный веб-разработчик с опытом работы
            в области веб-технологий, включая HTML, CSS, SCSS, JavaScript, React
            и TypeScript. Меня зовут Тимур, и я готов помочь вам с реализацией
            вашего проекта! <br /> Буду делать всё качественно и быстро.
            Надеюсь, мы с вами поработаем.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsKwork;
