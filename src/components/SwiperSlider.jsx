import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const SwiperSlider = ({ imagesArray }) => {
  return (
    <div className="mt-4 mb-2">
      <Swiper
        grabCursor
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
        }}
      >
        {imagesArray.map((slide) => (
          <SwiperSlide className="w-full" key={slide}>
            <img
              onClick={() => console.log(555)}
              className="rounded-xl"
              src={slide}
              alt={slide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
