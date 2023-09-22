import React from 'react'
import styles from './guide.module.css'
import { Link, createSearchParams } from 'react-router-dom'


export default function Guide() {


  const categorys=[
    {index:1, path:`/AboutUs` ,title:"오시는길",text:'오시는길을 알려드립니다'},
    {index:2, path:`/CustomerCenter`,title:"공지사항", text:'공지사항을 알려드립니다'},
    {index:3, path:`/CustomerCenter`,title:"이벤트", text:'이벤트소식을 전달합니다'},
    {index:4, path:`/CustomerCenter`,title:"QnA", text:'자주하는 질문에 답변드립니다.'},
    
  ]




  return (
    <div id={styles.guide_wrap}>
      <h2 className='hidden'>guide영역</h2>
      <section id={styles.guide_section}>
        <ul id={styles.guide_list}>
          {
            categorys.map((item)=>(
              <li>
                <Link to={{ pathname: item.path , search: `${createSearchParams({ title: item.title})}` }}>
                  <p className={styles.guide_title}>{item.title}</p>
                  <p className={styles.guide_text}>{item.text}</p>
                </Link>
              </li>
            ))
          }
          {/* <li>
            <Link to='/AboutUs'>
              <p className={styles.guide_title}>오시는길</p>
              <p className={styles.guide_text}>오시는길을 알려드립니다</p>
            </Link>
          </li>
          <li>
            <Link to={{ pathname: `/CustomerCenter`, search: `${createSearchParams({})}`}}>
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
          </li> */}
        </ul>
      </section>
    </div>
  )
}
