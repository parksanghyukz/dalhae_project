import React from 'react'
import styles from './visual.module.css'
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io';
import { AiOutlinePause } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export default function Visual() {
  return (

    <>
    <div id={styles.visual_wrap}>
      <section id={styles.main_visual}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // speed={200}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
        {/* <div id={styles.auto_play_wrap}>
          <button id={styles.prev_btn}><IoIosArrowBack/></button>
          <button id={styles.next_btn}><IoIosArrowForward/></button>
          <span>1/2</span>
          <button id={styles.stop_btn}><AiOutlinePause/></button>
        </div> */}
            {/* <SwiperSlide>
                <div id={styles.main_visual_img}> 
                  <div className={styles.main_visual_text_wrap}>
                    <p className={styles.main_visual_title}>실측부터 시공까지 대표가 직접!</p>
                    <p className={styles.main_visual_text}>창호시공 전문기업 달해기업입니다</p>
                  </div>
                </div>
            </SwiperSlide> */}
            <SwiperSlide>
                <div id={styles.main_visual_img2}> 
                  <div className={styles.main_visual_text_wrap}>
                    <p className={styles.main_visual_title}>실측부터 시공까지 대표가 직접!</p>
                    <p className={styles.main_visual_text}>창호시공 전문기업 달해기업입니다</p>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div id={styles.main_visual_img3}> 
                  <div className={styles.main_visual_text_wrap}>
                    <p className={styles.main_visual_title}>실측부터 시공까지 대표가 직접!</p>
                    <p className={styles.main_visual_text}>창호시공 전문기업 달해기업입니다</p>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div id={styles.main_visual_img4}> 
                <div className={styles.main_visual_text_wrap}>
                  <p className={styles.main_visual_title}>실측부터 시공까지 대표가 직접!</p>
                  <p className={styles.main_visual_text}>창호시공 전문기업 달해기업입니다</p>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </section>
    </div>

   
      {/* <div id={styles.visual_wrap}>

        <section id={styles.main_visual}> 
          <div id={styles.main_visual_text_wrap}>
            <p className={styles.main_visual_title}>실측부터 시공까지 대표가 직접!</p>
            <p className={styles.main_visual_text}>창호시공 전문기업 달해기업입니다</p>
          </div>
        </section>

        <div id={styles.auto_play_wrap}>
          <button id={styles.prev_btn}><IoIosArrowBack/></button>
          <button id={styles.next_btn}><IoIosArrowForward/></button>
          <span>1/2</span>
          <button id={styles.stop_btn}><AiOutlinePause/></button>
        </div>
      </div> */}

    </>
  )
}
