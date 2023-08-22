import React from 'react'
import styles from './Mbusiness.module.css'



export default function Mbusiness() {



  return (
    <>
      <div id={styles.mobile_business_wrap}>
          <p id={styles.mobile_business_title}>
            Business <span>업체소개</span>
          </p>
        <section id={styles.mobile_business_section}>
          <div id={styles.mobile_business_text_wrap}>
            <p id={styles.mobile_business_text}>
              인천 경기 전 지역! <br/>
              달해샷시인테리어
            </p>
            <p id={styles.mobile_business_sub_text}>
              소비자의 가장 가까운 곳에서 소통하는 <br/> 
              기업으로서 보답하겠습니다.
            </p>
            <button id={styles.mobile_business_btn}>
              업체소개
            </button>
            <p id={styles.mobile_business_img}>
              <img src='../../../images/mobile/Mbusiness.png' alt='비즈니스이미지'/>
            </p>
          </div>
        </section>

      </div>
    
    
    </>
  )
}
