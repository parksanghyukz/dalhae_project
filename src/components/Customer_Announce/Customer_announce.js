import React, {useEffect, useState} from 'react'
import styles from './customer_announce.module.css'
import axios from 'axios'


export default function Customer_announce() {


  const [allAnnouncement, setAllAnnouncement] = useState([])

  useEffect(()=>{
    axios.get('/data/announcement.json').then((res)=>{
      setAllAnnouncement(res.data)
    })
  },[])




  return (
    <div id={styles.customer_announcement_wrap}>
      <ul id={styles.customer_announcement_list}>
        <li id={styles.customer_announcement_title}>
          <div className={styles.customer_announcement_Num}>번호</div>
          <div className={styles.customer_announcement_sub_title}>제목</div>
          <div className={styles.customer_announcement_writer}>글쓴이</div>
          <div className={styles.customer_announcement_date}>날짜</div>
          <div className={styles.customer_announcement_search}>조회</div>
        </li>


        {
          allAnnouncement.map((item)=>(
            <li className={styles.customer_announcement_text}>
              <div className={styles.customer_announcement_Num}>{item.num}</div>
              <div className={styles.customer_announcement_sub_title}>{item.title}</div>
              <div className={styles.customer_announcement_writer}>{item.writer}</div>
              <div className={styles.customer_announcement_date}>{item.date}</div>
              <div className={styles.customer_announcement_search}>{item.search}</div>
            </li>
          ))
        }
      </ul>
  </div>
  )
}
