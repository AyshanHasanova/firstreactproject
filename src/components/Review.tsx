import React,{useEffect,useState} from 'react'
import ReviewCard from './ReviewCard'
import { Swiper, SwiperSlide} from 'swiper/react';
import axios from 'axios';

interface Melumat{
  id:number;
  review_caption:string;
  review_text : string;
  review_link : string;
}

const Review:React.FC = () => {
  const [melumat,setMelumat]=useState <Melumat []>([])
  useEffect(()=>{
    axios.get("/assets/reviews.json").then(cavab=>setMelumat(cavab.data))
  },[melumat])
  
  return (
    <>
    
    <section className="reviews py-5">
    <div className="container product">
      <div className="idea">
        <h2>Deation & Evaluation - Best Way <br/> to Kick off Your Product Idea</h2>
      </div>
      <Swiper
    slidesPerView={4}
    spaceBetween={30}
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
   
    className="mySwiper reviewsKarusel"
  >
   
     {
      melumat && melumat.map(birMelumat =>(
        <SwiperSlide key={birMelumat.id}><ReviewCard shekilProps = {birMelumat.review_text} captionProps={birMelumat.review_caption} linkProps={birMelumat.review_link}/></SwiperSlide>
      )
        
      )
     }
  
  </Swiper>
        

      </div>

  </section>
    </>





  )
}

export default Review