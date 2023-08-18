import React, { useEffect, useState } from 'react'
import styles from '../../components/mobile/css/MaboutItem.module.css'
import { Link, createSearchParams, useLocation } from 'react-router-dom'
import axios from 'axios'
import useProducts from '../../Hooks/useProducts'
import { getProducts } from '../../api/firebase'


export default function MaboutItem() {
  // useProducts라는 내가 만든 훅 사용해서 json데이터 불러오기!
  // const [allProducts] = useProducts()


  const [allProducts, setAllProducts] = useState([])

  // 이건 로컬이 아닌 db에서 데이터 불러오기!
  useEffect(()=>{
    getProducts().then((res)=>{
      setAllProducts(res)
    })
  })

  const categorys = [
    {index:0, text:'ALL'},
    {index:1, text:'창호'},
    {index:2, text:'유리'},
    {index:3, text:'현관문'},
  ]

  const [selectCategory, setSelectCategory] = useState(JSON.parse(localStorage.getItem('category')) || categorys[0].text)

  console.log(selectCategory)

  const [categoryItems, setCategoryItems] = useState([])

  useEffect(()=>{
    if(selectCategory==='ALL'){
      setCategoryItems(allProducts)
    } else{
      const categoryItems=allProducts.filter((item)=>(item.category===selectCategory))
      setCategoryItems(categoryItems)
    }
  }, [selectCategory, allProducts])



  const {search} = useLocation()

  useEffect(() => {


    const ct = decodeURIComponent(new URLSearchParams(search).get('category'))

    setSelectCategory(ct);
  }, [search])


  useEffect(()=> {
    localStorage.setItem('category', JSON.stringify(selectCategory))
  }, [selectCategory])




  // const {pathname} = useLocation()

  // useEffect(()=>{
  //   window.scrollTo(0,0)
  // }, [pathname])




  return (
    <>
      <div id={styles.mobile_aboutItem_visual_wrap}>
        <section id={styles.mobile_aboutItem_section}>
          <p id={styles.mobile_aboutItem_visual_title}>제품소개</p>
          <p id={styles.mobile_aboutItem_visual_text}>Introduction of Item</p>
        </section>
      </div>


      <div id={styles.mobile_aboutItem_contents_wrap}>
        <div id={styles.mobile_aboutItem_category}>
          <ul id={styles.mobile_aboutItem_list}>
            {/* <li>ALL</li>
            <li>창호</li>
            <li>유리</li>
            <li>현관문</li> */}
            {
              categorys.map((item)=>(
                <li className={selectCategory===item.text && styles.selected}  key={item.index} onClick={()=>{setSelectCategory(item.text)}}> 
                  {item.text}
                </li>
              ))
            }
          </ul>
        </div>



        <div id={styles.mobile_aboutItem_title_wrap}>
          <p id={styles.mobile_aboutItem_top_title}>
            <span id={styles.mobile_span_first}></span>
            <span id={styles.mobile_span_second}></span>
            <span id={styles.mobile_span_third}></span>
          </p>

          <p id={styles.mobile_aboutItem_title}>
            {selectCategory}
          </p>
        </div>

        <ul id={styles.mobile_aboutItem_contents_list}>
          {
            categoryItems.map((item)=>(
              <li>
                <Link to={{ pathname: `/MaboutItem/${item.id}` ,search: `?${createSearchParams({ category: item.category})}`}} >
                    <p className={styles.mobile_aboutItem_contents_img}>
                      <img src={item.image} alt='제품이미지'/>
                    </p>
                    <p className={styles.mobile_aboutItem_contents_title}>{item.title}</p>
                    <p className={styles.mobile_aboutItem_contents_text}>{item.text}</p>    
                </Link>
              </li>
            ))
          }
        </ul>


      </div>
    
    
    
    
    </>
  )
}
