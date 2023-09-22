import React, { useEffect, useState } from "react"
import styles from '../components/css/construction.module.css'
import axios from "axios"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export default function Construction() {



  const [allConstruction, setAllConstruction] = useState([])

  useEffect(()=>{
    window.scrollTo(0,0)
    axios.get('/data/construction.json').then((res)=>{
      setAllConstruction(res.data)
    })
  },[])

  


  return (
    <>

      <div id={styles.construction_visual_wrap}>
        <section id={styles.construction_section}>
          <p id={styles.construction_visual_title}>
            시공소개
          </p>
          <p id={styles.construction_visual_text}>Introduction of construction</p>
        </section>
      </div>
    
      <div id={styles.construction_title_wrap}>
          <p id={styles.construction_top_title}>
            <span id={styles.span_first}></span>
            <span id={styles.span_second}></span>
            <span id={styles.span_third}></span>
          </p>

          <p id={styles.construction_title}>
            시공순서
          </p>
      </div>

      <div id={styles.construction_step_wrap}>
        <ul id={styles.construction_step_list}>
            {
              allConstruction.map((item)=>(
                <li>
                  <p className={styles.construction_step_img}>
                    <img src={item.image} alt="시공이미지"/>
                  </p>
                  <p className={styles.construction_step}>{item.step}</p>
                  <p className={styles.construction_step_title}>{item.title}</p>
                  <p className={styles.construction_step_text}>{item.text}</p>




                </li>
              ))
            }

    
        </ul>
      </div>


      <div id={styles.construction_photo_wrap}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
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
          {
          allConstruction.map((item)=>(
            <SwiperSlide>
              <img src={item.image} alt="슬라이드이미지"/>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
    
        <div className={styles.construction_photo_text_wrap}>
          <p className={styles.construction_photo_text}>
            달해기업의 모든 시공은 시공전문팀이 철저하게 시공하고 있습니다.<br/>
          </p>
          <p className={styles.construction_photo_text}>
            창호시공 전문업체 <span>달해기업</span> 입니다.
          </p>
        </div>
    
    
    </>
  )
}
