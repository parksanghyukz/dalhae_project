import React from 'react'
import styles from './introduction.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export default function Introduction() {
  return (
    <>
      <div id={styles.introduction_wrap}>
        <section id={styles.introduction_section}>
          <div id={styles.introduction_text_wrap}>
            <p id={styles.introduction_title}>
              인천 경기 전 지역!<br/>
              달해샷시인테리어
            </p>
            <p id={styles.introduction_text}>
              소비자의 요구에 부합하는 합리적인 가격과 풍부한경험을 바탕으로
              창호시공법인을 설립하였습니다.
              최고효율의 완성창을 자체 생산하여 창호 제작부터 시공까지 완벽하게!
              소비자의 가장 가까운 곳에서 소통하는 기업으로서 보답하겠습니다.
            </p>
            <p id={styles.introduction_text_2}>
              나아가 여름엔 시원하게! 겨울엔 따뜻하게!
              이상 기온으로 인한 집중호우, 자연재해로부터 더욱 안전하게 사용할 수 있도록
              저희 달해기업 완성창으로 최선을 다해 시공해 드리겠습니다.
              감사합니다.
            </p>
            <button id={styles.introduction_btn}><Link to='/AboutUS'>업체소개</Link></button>
          </div>
          <div id={styles.introduction_img}>
            <img src='../../images/introduction.png'/>
          </div>
          <div id={styles.introduction_list_wrap}>
            <ul id={styles.introduction_list}>
              <li>
                <p className={styles.introduction_list_number}>25</p>
                <p className={styles.introduction_list_text}>Years of Experience</p>
                <AiOutlinePlusCircle className={styles.introduction_list_plus}/>
              </li>
              <li>
                <p className={styles.introduction_list_number}>82</p>
                <p className={styles.introduction_list_text}>Years of Experience</p>
                <AiOutlinePlusCircle className={styles.introduction_list_plus}/>
              </li>
              <li>
                <p className={styles.introduction_list_number}>366</p>
                <p className={styles.introduction_list_text}>Years of Experience</p>
                <AiOutlinePlusCircle className={styles.introduction_list_plus}/>
              </li>
              <li>
                <p className={styles.introduction_list_number}>25</p>
                <p className={styles.introduction_list_text}>Years of Experience</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
    
  )
}
