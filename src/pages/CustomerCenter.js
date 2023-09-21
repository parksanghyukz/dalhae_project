import React from 'react'
import styles from '../components/css/customerCenter.module.css'



export default function CustomerCenter() {
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
    
    
    
    
    
    </>
  )
}
