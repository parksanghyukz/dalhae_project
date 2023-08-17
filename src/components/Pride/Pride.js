import React from 'react'
import styles from './pride.module.css'

export default function Pride() {
  return (
    <div id={styles.pride_wrap}>
      <section id={styles.pride_section}>
        <ul id={styles.pride_list}>
          <li>
            <p className={styles.pride_img}>
              <img src='../../../images/highQuality.png' alt='하이퀄리티이미지'/>
            </p>
            <p className={styles.pride_title}>
              High&nbsp;Quality
            </p>
            <p className={styles.pride_text}>
              최고의 재료
            </p>
          </li>
          <li>
            <p className={styles.pride_img}>
              <img src='../../../images/warranyProtect.png' alt='보증기간이미지'/>
            </p>
            <p className={styles.pride_title}>
              Warrany Protection
            </p>
            <p className={styles.pride_text}>
              2년의 보증기간
            </p>
          </li>
          <li>
            <p className={styles.pride_img}>
              <img src='../../../images/support.png' alt='전담지원이미지'/>
            </p>
            <p className={styles.pride_title}>
              365X24 Support
            </p>
            <p className={styles.pride_text}>
              24시간 전담지원
            </p>
          </li>
        </ul>
      </section>
    </div>
  )
}
