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
        modules={[Pagination, Navigation,Autoplay ]}
        className=" rounded-lg shadow-lg"
      >
        <SwiperSlide>
          <img
            src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
            alt="Slide 1"
            className="w-full max-h-[30rem] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Slide 2"
            className="w-full max-h-[30rem] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg"
            alt="Slide 3"
           className="w-full max-h-[30rem] object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
