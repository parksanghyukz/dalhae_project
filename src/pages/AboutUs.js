import React from 'react'
import styles from '../components/css/aboutUs.module.css'
export default function AboutUs() {
  return (
    <>
      <div id={styles.aboutUs_visual_wrap}>
        <p id={styles.aboutUs_visual_title}>
          회사소개
        </p>
        <p id={styles.aboutUs_visual_text}>
          About Company
        </p>
      </div>
      <div id={styles.aboutUs_contents_wrap}>
        <section id={styles.aboutUs_contents_section}>
          <div id={styles.aboutUs_contents_title_box}>
            <p className={styles.aboutUs_contents_title}>DalHae Company</p>
            <p className={styles.aboutUs_contents_title}>쾌적한 삶을 위한 최상의 서비스를 제공합니다.</p>
          </div>
          <div id={styles.aboutUs_contents_text_box}>
            
          </div>
        </section>
      </div>
    </>
  )
}
