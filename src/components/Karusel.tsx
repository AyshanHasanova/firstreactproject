import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';


const Karusel:React.FC = () => {
  return (
    <>
  <div className="karusel py-5">
    <div className="container">
    
    <Swiper
         breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}



      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}

      className="mySwiper menimKaruselim "
    >
      <SwiperSlide><img src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101828859_246042513158214_2148064336253716561_nfull.jpg" alt=""  /></SwiperSlide>
      <SwiperSlide><img src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101385840_2667918190199058_5277434084403536262_nfull.jpg" alt=""  /></SwiperSlide>
      <SwiperSlide><img src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101231471_667679957345148_6345634492369991092_nfull.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101183570_163433185176419_801555554346684831_nfull.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101828859_246042513158214_2148064336253716561_nfull.jpg" alt=""  /></SwiperSlide>
      <SwiperSlide><img src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101385840_2667918190199058_5277434084403536262_nfull.jpg" alt=""  /></SwiperSlide>
      <SwiperSlide><img src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101231471_667679957345148_6345634492369991092_nfull.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101183570_163433185176419_801555554346684831_nfull.jpg" alt="" /></SwiperSlide>
 
   
    </Swiper>
    </div>
  </div>


  </>
  )
}

export default Karusel