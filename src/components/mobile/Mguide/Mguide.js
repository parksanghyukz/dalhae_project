import React from 'react'
import styles from './Mguide.module.css'
import { BsMap,BsLightbulb,BsBell } from 'react-icons/bs';
import { SlSpeech } from 'react-icons/sl';


export default function Mguide() {
  return (
    <>
      <div id={styles.mobile_guide_wrap}>
        <section id={styles.mobile_guide_section}>
          <ul id={styles.mobile_guide_list}>
            <li>
              <p className={styles.mobile_guide_title}>Location</p>
              <p className={styles.mobile_guide_text}>오시는 길</p>
              <p className={styles.mobile_guide_icon}><BsMap/></p>
            </li>
            <li>
              <p className={styles.mobile_guide_title}>Notice</p>
              <p className={styles.mobile_guide_text}>공지사항 안내</p>
              <p className={styles.mobile_guide_icon}><BsLightbulb/></p>
            </li>
            <li>
              <p className={styles.mobile_guide_title}>Event</p>
              <p className={styles.mobile_guide_text}>이벤트 소식</p>
              <p className={styles.mobile_guide_icon}><BsBell/></p>
            </li>
            <li>
              <p className={styles.mobile_guide_title}>QnA</p>
              <p className={styles.mobile_guide_text}>자주하는 질문</p>
              <p className={styles.mobile_guide_icon}><SlSpeech/></p>
            </li>


          </ul>
        </section>


      </div>
    
    
    
    
    
    </>
  )
}
