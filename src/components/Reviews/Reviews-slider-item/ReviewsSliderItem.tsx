import * as React from "react";
import s from "./s.module.scss";
import { Smile } from "lucide-react";
interface IReviewsSliderItemProps {
  review: string;
  title: string;
  projectImg: string;
}

const ReviewsSliderItem: React.FunctionComponent<IReviewsSliderItemProps> = ({
  review,
  title,
  projectImg,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <a href="https://kwork.ru/user/timurttx">
          <img src={projectImg} alt={title} />
        </a>
        <div>
          <div className={s.clientWrapper}>
            <p className={s.client}>{title}</p>
            <Smile color="#84b747" />
          </div>
          <p className={s.review}>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSliderItem;
