import React, { useEffect, useState } from 'react'
import styles from '../components/css/customerCenter.module.css'
import axios from 'axios'
import Customer_announce from '../components/Customer_Announce/Customer_announce'








export default function CustomerCenter() {



const categorys=[
  {index:1, title: "공지사항"},
  {index:2, title: "이벤트"},
  {index:3, title: "QnA  "},
]


const [selectCategory, setSelectCategory] = useState(categorys[0].title)

console.log(selectCategory)

useEffect(()=>{
  window.scrollTo(0,0)
},[])




  return (
    <>
      {/* <div style={{margin:'120px auto', width:'900px',height:'520px'}}> */}
        {/* <img style={{width:'100%'}} src='../../../images/page_wait.jpg' alt='오버플로우 방지턱'/> */}
        {/* <img style={{width:'100%'}} src='../../../images/img_page_ready.png' alt='준비중이미지'/> */}
      {/* </div> */}
      
      <div id={styles.customer_visual_wrap}>
        <section id={styles.customer_section}>
          <p id={styles.customer_visual_title}>
            고객센터
          </p>
          <p id={styles.customer_visual_text}>customer center</p>
        </section>
      </div>



      <div id={styles.customer_contents_wrap}>
        <div id={styles.customer_category}>
          <ul id={styles.customer_list}>
            {
              categorys.map((item)=>(
                <li className={selectCategory===item.title && styles.selected} onClick={()=>{setSelectCategory(item.title)}}>
                  {item.title}
                </li>
              ))
            }
          </ul>
        </div>





        <div id={styles.customer_title_wrap}>
            <p id={styles.customer_top_title}>
              <span id={styles.span_first}></span>
              <span id={styles.span_second}></span>
              <span id={styles.span_third}></span>
            </p>
            {
            <p id={styles.customer_title}>
              {selectCategory}
            </p>
            }
        </div>



            
          
        {

        selectCategory==="공지사항" ?
        

          <Customer_announce/>

        :

        
          <img src='/images/img_page_ready.png' alt='준비중입니다' className={styles.ready_img}/>

          
        }


      </div>
    
    
    
    
    
    </>
  )
}
