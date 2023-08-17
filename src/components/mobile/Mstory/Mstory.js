import React, { useEffect, useState } from 'react'
import styles from './Mstory.module.css'
import { BsArrowRight } from 'react-icons/bs';
import axios from 'axios';
import { getStorys } from '../../../api/firebase';

export default function Mstory() {

  const [allStorys, setAllStorys] = useState([])

  // useEffect(()=>{
  //   axios.get('/data/mstory.json').then((res)=>{
  //     setAllStorys(res.data)
  //   })
  // }, [])

  useEffect(()=>{
    getStorys().then((res)=>{
      setAllStorys(res)
    })
  })


  return (
    <div id={styles.mobile_story_wrap}>
      <section id={styles.mobile_story_section}>
        <p id={styles.mobile_story_title}>
          Our story <span>작업현장사진</span>
        </p>
        <div id={styles.mobile_story_box}>
          <ul id={styles.mobile_story_list}>
            {
              allStorys.map((item)=>(
                <li id={item.key}>
                  <p className={styles.mobile_story_img}>
                    {/* <img src='../../../images/mobile/Mstory1.png' alt='이미지1'/> */}
                    <img src={item.image} alt='이미지1'/>
                  </p>
                  <div className={styles.mobile_story_list_wrap}>
                    <p className={styles.mobile_story_list_title}>
                      {item.title}
                    </p>
                    <span className={styles.mobile_story_btn_short}>{item.subTitle}</span>
                    <p className={styles.mobile_story_list_text}>
                      {item.text}
                    </p>
                    <p className={styles.mobile_story_list_date}>
                      {item.date}
                    </p>
                    <p className={styles.mobile_story_list_readMore}>
                      Read More <span><BsArrowRight/></span> 
                    </p>
                  </div>  
                </li>

              ))
            }
            
              {/* <p className={styles.mobile_story_img}>
                <img src='../../../images/mobile/Mstory1.png' alt='이미지1'/>
              </p>
              <div className={styles.mobile_story_list_wrap}>
                  <p className={styles.mobile_story_list_title}>
                    Covering 
                  </p>
                  <span className={styles.mobile_story_btn_short}>보양작업</span>
                  <p className={styles.mobile_story_list_text}>
                    시공 전에 철저한 보양작업 진행
                  </p>
                  <p className={styles.mobile_story_list_date}>
                    2023-08-07
                  </p>
                  <p className={styles.mobile_story_list_readMore}>
                    Read More <span><BsArrowRight/></span> 
                  </p>
              </div> */}
            {/* <li>
              <p className={styles.mobile_story_img}>
                <img src='../../../images/mobile/Mstory2.png' alt='이미지1'/>
              </p>
              <div className={styles.mobile_story_list_wrap}>
                  <p className={styles.mobile_story_list_title}>
                    Demolition
                  </p>
                  <span className={styles.mobile_story_btn_short}>철거작업</span>
                  <p className={styles.mobile_story_list_text}>
                    기존창과 잔여 실리콘 등
                    완벽하게 이물질을 철거
                  </p>
                  <p className={styles.mobile_story_list_date}>
                    2023-08-07
                  </p>
                  <p className={styles.mobile_story_list_readMore}>
                    Read More <span><BsArrowRight/></span> 
                  </p>
              </div>
            </li>
            <li>
              <p className={styles.mobile_story_img}>
                <img src='../../../images/mobile/Mstory3.png' alt='이미지1'/>
              </p>
              <div className={styles.mobile_story_list_wrap}>
                  <p className={styles.mobile_story_list_title}>
                    urethane
                  </p>
                  <span className={styles.mobile_story_btn_long}>우레탄작업</span>
                  <p className={styles.mobile_story_list_text}>
                    창 사이 빈공간이 없도록 
                    우레탄폼 작업
                  </p>
                  <p className={styles.mobile_story_list_date}>
                    2023-08-07
                  </p>
                  <p className={styles.mobile_story_list_readMore}>
                    Read More <span><BsArrowRight/></span> 
                  </p>
              </div>
            </li>
            <li>
              <p className={styles.mobile_story_img}>
                <img src='../../../images/mobile/Mstory4.png' alt='이미지1'/>
              </p>
              <div className={styles.mobile_story_list_wrap}>
                  <p className={styles.mobile_story_list_title}>
                    silicon
                  </p>
                  <span className={styles.mobile_story_btn_long}>실리콘작업</span>
                  <p className={styles.mobile_story_list_text}>
                    실리콘으로 깔끔하게 
                    마무리 작업
                  </p>
                  <p className={styles.mobile_story_list_date}>
                    2023-08-07
                  </p>
                  <p className={styles.mobile_story_list_readMore}>
                    Read More <span><BsArrowRight/></span> 
                  </p>
              </div>
            </li> */}
          </ul>
        </div>
      </section>
    </div>
  )
}
