import React, { useEffect } from 'react'
import styles from './product.module.css'
import { Link, createSearchParams } from 'react-router-dom'




export default function Product() {


// useEffect(()=>{
//   localStorage.removeItem('category')
// }, [])

  return (
    <>
      <div id={styles.product_box}>
        <section id={styles.product_section}>
          <div id={styles.product_title_wrap}>
            <p id={styles.product_title}>Our Product</p>
            <p id={styles.product_subTitle}>제품소개</p>
            <p id={styles.product_text}>달해기업의 다양한 제품들을 확인하실 수 있습니다</p>
          </div>

          <div id={styles.product_contents_wrap}>
            <ul id={styles.product_contents_list}>
              <li>
                <Link to={{ pathname: `/AboutItem`, search: `?${createSearchParams({ category: '창호' })}`}}>
                  <p className={styles.product_contents_img}>
                    <img src='../../images/product00.png'/>
                  </p>
                  <p className={styles.product_contents_title}>창호</p>
                  <button className={styles.product_contents_btn}>자세히보기</button>
                </Link>
              </li>
              <li>
              <Link to={{ pathname: `/AboutItem`, search: `?${createSearchParams({ category: '유리'})}`}}>
                  <p className={styles.product_contents_img}>
                    <img src='../../images/product01.png'/>
                  </p>
                  <p className={styles.product_contents_title}>유리</p>
                  <button className={styles.product_contents_btn}>자세히보기</button>
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `/AboutItem`, search: `?${createSearchParams({ category: '현관문'})}`}}>
                  <p className={styles.product_contents_img}>
                    <img src='../../images/product02.png'/>
                  </p>
                  <p className={styles.product_contents_title}>현관문</p>
                  <button className={styles.product_contents_btn}>자세히보기</button>
                </Link>
              </li>
              
            </ul>
            
          </div>          




        </section>




      </div>
    
    
    </>
  )
}
