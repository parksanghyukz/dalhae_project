import React from 'react'
import styles from './story.module.css'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';


export default function Story() {
  return (
    <div id={styles.story_box}>
      <section id={styles.story_section}>
      <h2 className='hidden'>story영역</h2>
        <div id={styles.story_title_wrap}>
          <p id={styles.story_title}>Our Story</p>
          <p id={styles.story_text}>작업현장사진</p>
        </div>
        <div id={styles.story_list_wrap}>
          <ul id={styles.story_list}>
            <li>
              <Link to='/Construction'>
                <p className={styles.story_img}>
                  <img src='../../images/story00.png' alt='보양작업이미지'/>
                </p>
                <p className={styles.story_img_thema}>
                  보양작업
                </p>
                <p className={styles.story_img_title}>
                  시공 전에 철저한 보양작업 진행
                </p>
                <p className={styles.story_img_text}>
                  Read More 
                  <HiOutlineArrowNarrowRight className={styles.story_arrow}/>
                </p>
              </Link>
            </li>
            <li>
              <Link to='/Construction'>
                <p className={styles.story_img}>
                  <img src='../../images/story01.png' alt='이물질철거이미지'/>
                </p>
                <p className={styles.story_img_thema}>
                  이물질 철거
                </p>
                <p className={styles.story_img_title}>
                  기존창과 잔여 실리콘 등 이물질을 철거
                </p>
                <p className={styles.story_img_text}>
                  Read More 
                  <HiOutlineArrowNarrowRight className={styles.story_arrow}/>
                </p>
              </Link>
            </li>
            <li>
              <Link to='/Construction'>
                <p className={styles.story_img}>
                  <img src='../../images/story02.png' alt='우레탄작업이미지'/>
                </p>
                <p className={styles.story_img_thema}>
                  우레탄작업
                </p>
                <p className={styles.story_img_title}>
                  창 사이 빈공간이 없도록 우레탄폼 작업
                </p>
                <p className={styles.story_img_text}>
                  Read More 
                  <HiOutlineArrowNarrowRight className={styles.story_arrow}/>
                </p>
              </Link>
            </li>
            <li>
              <Link to='/Construction'>
                <p className={styles.story_img}>
                  <img src='../../images/story03.png' alt='실리콘작업이미지'/>
                </p>
                <p className={styles.story_img_thema}>
                  실리콘작업
                </p>
                <p className={styles.story_img_title}>
                  실리콘으로 깔끔하게 마무리작업
                </p>
                <p className={styles.story_img_text}>
                  Read More 
                  <HiOutlineArrowNarrowRight className={styles.story_arrow}/>
                </p>
              </Link>
            </li>
          
          </ul>
        </div>
      </section>





    </div>
  )
}
