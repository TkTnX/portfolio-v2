import Title from '../ui/Title/Title';
import ReviewsKwork from './Reviews-kwork/ReviewsKwork';
import s from "./s.module.scss"
import ReviewsSlider from './Reviews-slider/ReviewsSlider';
const Reviews = () => {
  return (
    <div className={s.wrapper} id="reviews">
      <Title title="Отзывы и фриланс" />
      <ReviewsKwork />
          <ReviewsSlider />
    </div>
  );
}

export default Reviews