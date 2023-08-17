import React, { useEffect, useState } from 'react'
import styles from '../components/css/aboutItem.module.css'
import axios from 'axios'
import { Link, useNavigate, useLocation, createSearchParams } from 'react-router-dom'
import useCategory from '../Hooks/useCategory'
import { getProducts } from '../api/firebase'
import useProducts from '../Hooks/useProducts'


export default function AboutItem() {


  // 1. data폴더에 만들어 놓은 json파일 불러오기

  // const [allProducts, setAllProducts] = useState([])

  // useEffect(()=>{
  //   axios.get('/data/products.json').then((res)=>{
  //     setAllProducts(res.data)
  //   })
  // }, [])

  
  // 이건 로컬에서 만든 json이 아닌 db에서 불러오기!
  const [allProducts, setAllProducts] = useState([])

  useEffect(()=>{
    getProducts().then((res)=>{
      setAllProducts(res)
    })
  })

  // 2. category의 순번과 제목 적어주기
  const categorys = [
    {index:0, text:'ALL'},
    {index:1, text:'창호'},
    {index:2, text:'유리'},
    {index:3, text:'현관문'},
  ]
  // 3. 카테고리의 초기값을 'ALL'로 지정해주기
  // const [selectCategory, setSelectCategory] = useState(categorys[0].text)
  const [selectCategory, setSelectCategory] = useState(JSON.parse(localStorage.getItem('category')) || categorys[0].text)

  // 5. 콘솔에 클릭한 카테고리명 출력해보기
  // console.log(selectCategory)



  // 6. 클릭된 카테고리에 맞는 아이템을 저장할 곳을 생성하기

  const [categoryItems, setCategoryItems] = useState([])

  // 7. useEffect를 사용해 선택된 카테고리가 창호일경우 출력해주고 그게아닐경우 출력해주기!
  useEffect(()=>{
    if(selectCategory==='ALL'){
      //localStorage.removeItem('category')
      setCategoryItems(allProducts)
    }else{
      const categoryItems=allProducts.filter((item)=>(item.category===selectCategory))
      setCategoryItems(categoryItems)
    }
  }, [selectCategory, allProducts])

  // 10. UseNavigate()를 선언하고 import한다
  const navigate = useNavigate()

  
  const {search} = useLocation()

  useEffect(() => { // 메인에서 선택한 카테고리 보여줌     
    
      
    const ct = decodeURIComponent(new URLSearchParams(search).get('category')) // serch 전체값을 받아와서 category 속성값만 얻어내는 약속된 객체함수 
     
    setSelectCategory(ct);
    //console.log(ct)
  }, [search])


  useEffect(()=>{
    // selectCategory의 데이터를 'category'에 저장할것이다, [selectCategory]의 값이 바뀔때마다 
    localStorage.setItem('category', JSON.stringify(selectCategory))
  },[selectCategory])



  // # 경로가 변경될때마다 스크롤을 위로 올려주는 것이다.
  const {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo(0,200)
  }, [pathname])



  return (
    <>
      {/* <div ref={(item)=>(test.current[0]=item)} id={styles.aboutItem_visual_wrap}> */}
      <div id={styles.aboutItem_visual_wrap}>
        <section id={styles.aboutItem_section}>
          <p id={styles.aboutItem_visual_title}>
            제품소개
          </p>
          <p id={styles.aboutItem_visual_text}>Introduction of Item</p>
        </section>
      </div>

      {/* <div ref={(item)=>(test.current[1]=item)} id={styles.aboutItem_contents_wrap}> */}
      <div id={styles.aboutItem_contents_wrap}>
        <div id={styles.aboutItem_category}>
          <ul id={styles.aboutItem_list}>
            {/* <li className={styles.selected}>창호</li>
            <li>유리</li>
            <li>현관문</li> */}
            {
              // 4. categorys를 map을 돌려 클릭한 카테고리명 알아내기
              categorys.map((item)=>(
                // 9. 선택한 카테고리에 selected라는 스타일을 넣어준다!
                <li className={selectCategory===item.text && styles.selected} key={item.index} onClick={()=>{setSelectCategory(item.text)}}>
                  <Link>{item.text}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        {/* <div ref={(item)=>(test.current[2]=item)} id={styles.aboutItem_title_wrap}> */}
        <div id={styles.aboutItem_title_wrap}>
          <p id={styles.aboutItem_top_title}>
            <span id={styles.span_first}></span>
            <span id={styles.span_second}></span>
            <span id={styles.span_third}></span>
          </p>

          <p id={styles.aboutItem_title}>
            {selectCategory}
            {/* 클릭한 카테고리명으로 변경하기 */}
          </p>

        </div>
        <ul id={styles.aboutItem_contents_list}>
          {
            // 8. categoryItems를 map을 돌려 products.json에 있는 속성값을 넣어준다
            categoryItems.map((item)=>(
              <li>
                <Link to={{ pathname: `/AboutItem/${item.id}` ,search: `?${createSearchParams({ category: item.category })}` }}>
                 <div className={styles.aboutItem_box}>
                   <p className={styles.aboutItem_contents_img}>
                     <img src={item.image} alt='제품이미지'/>
                   </p>
                   <p className={styles.aboutItem_contents_title}>{item.title}</p>
                   <p className={styles.aboutItem_contents_text}>{item.text}</p>
                  </div>
                </Link>

              </li>


                // <li key={item.id} onClick={()=>{
                //   // Navigate(`/AboutItem/${item.id}`)
                //   // Navigate(`/AboutItem/${item.id}`)
                //   navigate(`/AboutItem/${item.id}`)
                //   // 11. 위에서 선언한 useNavigate를 사용한다 
                // }}>
                // <div className={styles.aboutItem_box}>
                //   <p className={styles.aboutItem_contents_img}>
                //     <img src={item.image} alt='제품이미지'/>
                //   </p>
                //   <p className={styles.aboutItem_contents_title}>{item.title}</p>
                //   <p className={styles.aboutItem_contents_text}>{item.text}</p>
                // </div>
                // </li>


            ))
          }
          {/* <li>
            <div className={styles.aboutItem_box}>
              <p className={styles.aboutItem_contents_img}>
                <img src='../../../images/AboutImg_00.png' alt='이중창이미지'/>
              </p>
            </div>
            <p className={styles.aboutItem_contents_title}>확장형 이중창</p>
            <p className={styles.aboutItem_contents_text}>BF-255RB(확장용이중창)</p>
          </li>
          <li>
            <div className={styles.aboutItem_box}>
              <p className={styles.aboutItem_contents_img}>
                <img src='../../../images/AboutImg_01.png' alt='발코니창이미지'/>
              </p>
              <p className={styles.aboutItem_contents_title}>발코니 창</p>
              <p className={styles.aboutItem_contents_text}>BF-255RB(확장용이중창)</p>
            </div>
          </li>
         
          <li>
            <div className={styles.aboutItem_box}>
              <p className={styles.aboutItem_contents_img}>
                <img src='../../../images/AboutImg_02.png' alt='분합창이미지'/>
              </p>
              <p className={styles.aboutItem_contents_title}>분합창</p>
              <p className={styles.aboutItem_contents_text}>BF-255RB(확장용이중창)</p>
            </div>
          </li>
          <li>
            <div className={styles.aboutItem_box}>
              <p className={styles.aboutItem_contents_img}>
                <img src='../../../images/AboutImg_03.png' alt='이중창이미지'/>
              </p>
              <p className={styles.aboutItem_contents_title}>이중창</p>
              <p className={styles.aboutItem_contents_text}>BF-255RB(확장용이중창)</p>
            </div>
          </li>
          <li>
            <div className={styles.aboutItem_box}>
              <p className={styles.aboutItem_contents_img}>
                <img src='../../../images/AboutImg_04.png' alt='이중창이미지'/>
              </p>
              <p className={styles.aboutItem_contents_title}>단창</p>
              <p className={styles.aboutItem_contents_text}>BF-255RB(확장용이중창)</p>
            </div>
          </li> */}
        </ul>
      </div>
    </>
  )
}
