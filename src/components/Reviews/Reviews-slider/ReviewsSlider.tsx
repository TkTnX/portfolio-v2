import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import s from "./s.module.scss";
import data from "./../../../data/reviews.json";
import ReviewsSliderItem from "../Reviews-slider-item/ReviewsSliderItem";

const ReviewsSlider = () => {
  return (
    <Swiper
      className={s.wrapper}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      {data.map((review, index) => (
        <SwiperSlide key={index}>
          <ReviewsSliderItem
            title={review.title}
            review={review.review}
            projectImg={review.projectImg}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsSlider;
