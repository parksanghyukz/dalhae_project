import React, { useRef, useState } from "react";
import styles from './Mproduct.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link, createSearchParams } from "react-router-dom";


// Mproduct 컴포넌트에서는 swiper의 styles.css와 module.css를 합쳤다


export default function Mproduct() {
  return (
    <>
      <div id={styles.mobile_product_wrap}>
        <section id={styles.mobile_product_section}>
          <div id={styles.mobile_product_title_wrap}>
            <p id={styles.mobile_product_title}>Our Product <span>제품소개</span></p>
            <p id={styles.mobile_product_text}>달해기업의 다양한 제품들을 확인하실 수 있습니다</p>
          </div>

          <div id={styles.mobile_product_list_wrap}>
            {/* <Swiper navigation={true} slidesPerView={'auto'} modules={[Navigation]} spaceBetween={30} */}
            <Swiper         
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Navigation]}
              className="mySwiper">
              <SwiperSlide className={styles.mobile_product_slide}>  
                  <Link to={{ pathname: `/MaboutItem`, search: `?${createSearchParams({ category: '창호'})}`}}>
                    <img src='../../../images/mobile/product1.png' alt='이미지1'/>
                  </Link>       
              </SwiperSlide>
              <SwiperSlide className={styles.mobile_product_slide}>
                  <Link to={{ pathname: `/MaboutItem`, search: `?${createSearchParams({ category: '유리'})}`}}>
                    <img src='../../../images/mobile/product2.png' alt='이미지2'/>  
                  </Link>
              </SwiperSlide>
              <SwiperSlide className={styles.mobile_product_slide}>
                <Link to={{ pathname: `/MaboutItem`, search: `?${createSearchParams({ category: '현관문'})}`}}>
                  <img src='../../../images/mobile/product3.png' alt='이미지3'/>
                </Link> 
              </SwiperSlide>
            </Swiper>

          </div>
{/* 
            <li>
              <img src='../../../images/mobile/product1.png' alt='이미지1'/>
            </li>
            <li>
              <img src='../../../images/mobile/product2.png' alt='이미지1'/>
            </li>
            <li>
              <img src='../../../images/mobile/product3.png' alt='이미지1'/>
            </li> */}
        </section>
      </div>

      

    
    
    </>
  )
}

// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
    
//       <div id={styles.mobile_product_wrap}>
//         <div id={styles.mobile_product_title_wrap}>
//           <p id={styles.mobile_product_title}>Our Product <span>제품소개</span></p>
//           <p id={styles.mobile_product_text}>달해기업의 다양한 제품들을 확인하실 수 있습니다</p>
//         </div>
//         <section id={styles.mobile_product_section}>
        
//           <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={'auto'}
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               // slideShadows: true,
//             }}
//             pagination={true}
//             modules={[EffectCoverflow, Pagination]}
//             className="mySwiper"
//           >
//             <div className={styles.mobile_slide_wrap}>
//               <SwiperSlide>
//                 <img src='../../../images/mobile/product1.png'/>
//               </SwiperSlide>
//             </div>
//             <div className={styles.mobile_slide_wrap}>
//             <SwiperSlide>
//               <img src='../../../images/mobile/product2.png'/>
//             </SwiperSlide>
//             </div>
//             <div className={styles.mobile_slide_wrap}>
//             <SwiperSlide>
//               <img src='../../../images/mobile/product3.png'/>
//             </SwiperSlide>
//             </div>
//           </Swiper>
//         </section>
//       </div>
//     </>
//   );
// }
