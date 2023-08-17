import React from 'react'
import styles from './guide.module.css'
import { Link } from 'react-router-dom'


export default function Guide() {
  return (
    <div id={styles.guide_wrap}>
      <section id={styles.guide_section}>
        <ul id={styles.guide_list}>
          <li>
            <Link>
              <p className={styles.guide_title}>오시는길</p>
              <p className={styles.guide_text}>오시는길을 알려드립니다</p>
            </Link>
          </li>
          <li>
            <Link>
              <p className={styles.guide_title}>공지사항</p>
              <p className={styles.guide_text}>공지사항을 알려드립니다</p>
            </Link>
          </li>
          <li>
            <Link>
              <p className={styles.guide_title}>이벤트</p>
              <p className={styles.guide_text}>이벤트소식을 전달합니다</p>
            </Link>
          </li>
          <li>
            <Link>
              <p className={styles.guide_title}>QnA</p>
              <p className={styles.guide_text}>자주하는 질문에 답변드립니다</p>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
