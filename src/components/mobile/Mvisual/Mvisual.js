import React from 'react'
import styles from './Mvisual.module.css'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Mvisual() {
  return (
    <>
      <div id={styles.mobile_visual_wrap}>
        <section id={styles.mobile_main_visual}>
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
            <SwiperSlide>
              <div id={styles.mobile_main_visual_img1}>
                  <p className={styles.mobile_main_visual_title}>실측부터 시공까지 대표가 직접!</p>
                  <p className={styles.mobile_main_visual_text}>창호시공 전문기업 달해기업입니다</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div id={styles.mobile_main_visual_img2}>
                  <p className={styles.mobile_main_visual_title}>실측부터 시공까지 대표가 직접!</p>
                  <p className={styles.mobile_main_visual_text}>창호시공 전문기업 달해기업입니다</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div id={styles.mobile_main_visual_img3}>
                  <p className={styles.mobile_main_visual_title}>실측부터 시공까지 대표가 직접!</p>
                  <p className={styles.mobile_main_visual_text}>창호시공 전문기업 달해기업입니다</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div id={styles.mobile_main_visual_img4}>
                  <p className={styles.mobile_main_visual_title}>실측부터 시공까지 대표가 직접!</p>
                  <p className={styles.mobile_main_visual_text}>창호시공 전문기업 달해기업입니다</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div id={styles.mobile_main_visual_img5}>
                  <p className={styles.mobile_main_visual_title}>실측부터 시공까지 대표가 직접!</p>
                  <p className={styles.mobile_main_visual_text}>창호시공 전문기업 달해기업입니다</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>



      
    </>
  )
}
