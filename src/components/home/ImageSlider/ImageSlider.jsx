import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function ImageSlider() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-10">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className=" rounded-lg shadow-lg"
      >
        <SwiperSlide>
          <img
            src="/images/slider2.jpg"
            alt="Slide 1"
            className="w-full max-h-[30rem] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slider3.jpg" alt="Slide 2"
            className="w-full max-h-[30rem] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slider4.jpg" alt="Slide 3"
            className="w-full max-h-[30rem] object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
