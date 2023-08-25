import React, { useRef } from 'react'
import styles from '../components/css/aboutItemDetail.module.css'
import { useNavigate, useParams, useLocation, } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import useCategory from '../Hooks/useCategory'
import { getProductDetail, getProducts } from '../api/firebase'
import useProducts from '../Hooks/useProducts'
// Import Swiper React components






export default function AboutItemDetail() {

  const aaa = useCategory()

  //const [urlCategory, setUrlCategory] = useState()

  // 1. AboutItem.js에서 보내준 Id값을 useParams를 사용해 받아온다
  const {productId} = useParams()

  // const [allProducts, setAllProducts] = useState([])


  // // 2. 모든 json을 뿌려준다
  // useEffect(()=>{
  //   axios.get('/data/products.json').then((res)=>{
  //     setAllProducts(res.data)
  //   })
  // }, [])


  // 만들놓은 Hook을 사용해서 로컬의 json파일 가져오기!
  // const [allProducts] = useProducts()


  
  // 이건 db에 올려둔 json파일 가져오기!
  const [allProducts, setAllProducts] = useState([])

  useEffect(()=>{
    getProducts().then((res)=>{
      setAllProducts(res)
    })
  })



  const [productItem, setProductItem] = useState([])

  useEffect(()=>{
    const productItem = allProducts.filter((item)=>(item.id===productId))
    setProductItem(productItem)
  }, [allProducts])


  // firebase 로직 사용해서 결과값출력하기
  // useEffect(()=>{
  //   getProductDetail(productId).then((res)=>{
  //     setProductItem(res)
  //   })
  // })




  // useNavigate() import해주기 
  const navigate= useNavigate();

  // 목록보기 버튼을 클릭했을때 발생하는 이벤트
  const goList=()=>{
    // navigate(-1)
    // useNavigate() 에서 약속된 값 -1을 하면 뒤로가기 1을하면 앞으로가기이다
    navigate(`/AboutItem?category=${aaa}`)
  }
  // const {search} = useLocation()
  // // # 내가한 방법
  // useEffect(() => {
  //   const value = decodeURIComponent(new URLSearchParams(search).get('category')) // search 전체값을 받아와서 category 속성값만 얻어내는 약속된 객체함수      
  //   setUrlCategory(value)
  //   console.log(value)
  // }, [search])


  // // useEffect를 사용해서 AboutItem에서 받은 item.category값 확인해보기
  // useEffect(() => {

  //   decodeURIComponent(new URLSearchParams(search).get('category'))

  //   console.log(decodeURIComponent(new URLSearchParams(search).get('category')))
  // }, [search])


  // const {pathname} = useLocation()

  // useEffect(()=>{
  //   window.scrollTo(0.0)
  // }, [pathname])


  const infoImg = useRef();


  const changeImg=()=>{
    console.log(infoImg)
  }




  return (
    <>

      {
        productItem.map((item)=>(
      <>
        <div id={styles.aboutItem_visual_wrap}>
          <section id={styles.aboutItem_section}>
            <p id={styles.aboutItem_visual_title}>
              제품소개
            </p>
            <p id={styles.aboutItem_visual_text}>Introduction of Item</p>
          </section>
        </div>
        <div id={styles.aboutItemDetail_info_wrap}>
          <section id={styles.aboutItemDetail_info_section}>
            <div id={styles.info_section_img_wrap}>
              <div id={styles.info_section_img_box}>
                <p id={styles.aboutItemDetail_info_img}>
                  <img src={item.image} alt='제품이미지'  ref={infoImg}/>  
                </p>
              </div>
              <ul id={styles.info_section_img_list}>

                {
                    productItem.subImage?.map((item)=>(
                      <li className={styles.selected}>
                         <img src={item.image} alt='제품이미지'/>
                      </li>
                    ))
                }





                {/* <li className={styles.selected}>
                  <img src={item.image} alt='제품이미지'/>
                </li>
                <li onClick={changeImg}>
                  <img src='../../../images/Window_detail_00.png' alt='제품이미지'/>
                </li>
                <li>
                  <img src='../../../images/Window_detail_01.png' alt='제품이미지'/>
                </li>
                <li>
                  <img src='../../../images/Window_detail_02.png' alt='제품이미지'/>
                </li> */}
              </ul>
            </div>
            <div id={styles.info_section_font_wrap}>
              <div id={styles.info_section_title_wrap}>
                <p id={styles.aboutItemDetail_info_title}>{item.title}</p>
                <p id={styles.aboutItemDetail_info_name}>{item.text}</p>
              </div>
              <div className={styles.info_section_text_wrap}>
                <p className={styles.aboutItemDetail_info_text}>용도</p>
                <p className={styles.aboutItemDetail_info_sub_text}>{item.usage}</p>
              </div>
              <div className={styles.info_section_text_wrap}>
                <p className={styles.aboutItemDetail_info_text}>유리사양</p>
                <p className={styles.aboutItemDetail_info_sub_text}>{item.spec}</p>
              </div>
              <div className={styles.info_section_text_wrap}>
                <p className={styles.aboutItemDetail_info_text}>색상</p>
                <p className={styles.aboutItemDetail_info_sub_text}>{item.color}</p>
              </div>
              <div className={styles.info_section_text_wrap}>
                <p className={styles.aboutItemDetail_info_text}>상세설명</p>
                <p className={styles.aboutItemDetail_info_sub_text}>상세설명참고</p>
              </div>
            </div>
          </section>
        </div>
        <div id={styles.aboutItemDetail_contents_wrap}>
        <section id={styles.aboutItemDetail_contents_top_section}>
          <p id={styles.aboutItemDetail_contents_logo}></p>
          <p className={styles.aboutItemDetail_contents_normal_title}>window</p>
          <p className={styles.aboutItemDetail_contents_bold_title}>달해기업 {item.title}</p>
          <p className={styles.aboutItemDetail_contents_normal_title}>{item.text}</p>
        </section>
        <section id={styles.aboutItemDetail_contents_bottom_section}>
          <p id={styles.aboutItemDetail_contents_img}>
            <img src={item.image} alt='제품이미지'/>
          </p>
          <div id={styles.aboutItemDetail_contents_list_box}>
            <ul id={styles.aboutItemDetail_contents_list}>
              <li>
                <p className={styles.aboutItemDetail_contents_list_Num}>detail 1</p>
                <p className={styles.aboutItemDetail_contents_list_title}>오버플로우 방지턱</p>
              </li>
              <li>
                <p className={styles.aboutItemDetail_contents_list_Num}>detail 2</p>
                <p className={styles.aboutItemDetail_contents_list_title}>자동개폐 물구멍</p>
              </li>
              <li>
                <p className={styles.aboutItemDetail_contents_list_Num}>detail 3</p>
                <p className={styles.aboutItemDetail_contents_list_title}>에너지 효율 1등급</p>
              </li>
              <li>
                <p className={styles.aboutItemDetail_contents_list_Num}>detail 4</p>
                <p className={styles.aboutItemDetail_contents_list_title}>우수한 방음효과</p>
              </li>
            </ul>
          </div>
        </section>
        <section id={styles.aboutItemDetail_contents_detail_section}>
          <div id={styles.detail_section_text_wrap}>
            <p id={styles.detail_section_title}>detail</p>
            <p id={styles.detail_section_text}>
              <span>달해기업</span> 창호의 디테일 <br/>
              반드시 확인하고 시공하세요!
            </p>
            <p id={styles.detail_section_subtext}>
            달해기업은 아파트 외 다양한 주택 환경에도 맞는 창을 개발하기 위하여<br/>
            시공 노하우를 바탕으로 연구하고 최고의 창을 만들었습니다
            </p>
          </div>
          <div id={styles.detail_section_visual}>

          </div>
          <div id={styles.detail_list_wrap}>
            <ul id={styles.detail_list}>
              <li>
                <p className={styles.detail_list_Num}>detail 1</p>
                <p className={styles.detail_list_title}>오버플로우 방지턱</p>
                <p className={styles.detail_list_text}>
                  용접식 제작과 내부 물막이턱 높이 증대, 창짝과 창틀 레일의 <br/>
                  오버랩 구조의 설계로 빗물이 스며들 우려가 적습니다.
                </p>
                <p className={styles.detail_list_img}>
                  <img src='../../../images/detail1.png' alt='오버플로우 방지턱'/>
                </p>
              </li>
              <li>
                <p className={styles.detail_list_Num}>detail 2</p>
                <p className={styles.detail_list_title}>자동개폐 물구멍</p>
                <p className={styles.detail_list_text}>해충으로부터 실내유입을 막을 수 있습니다</p>
                <p className={styles.detail_list_img}>
                <img src='../../../images/detail2.png' alt='오버플로우 방지턱'/>
                </p>
              </li>
              <li>
                <p className={styles.detail_list_Num}>detail 3</p>
                <p className={styles.detail_list_title}>에너지 효율 1등급</p>
                <p className={styles.detail_list_text}>
                재질(U-PVC)의 매우 낮은 열전도율(AL 대비 약 1/1,250)과 우수한
                기밀재의 사용, 다격실 구조의 설계로 창을 통한 에너지 손실을 
                막아주기 때문에 냉난방 에너지 절감에 효과적입니다.
                </p>
                <p className={styles.detail_list_img}>
                <img src='../../../images/detail3.png' alt='오버플로우 방지턱'/>
                </p>
              </li>
              <li>
                <p className={styles.detail_list_Num}>detail 4</p>
                <p className={styles.detail_list_title}>우수한 방음효과</p>
                <p className={styles.detail_list_text}>
                  용접식으로 제작되는 KCC창호는 우수한 기밀재의 사용으로 통기량을 
                  극소화하여 밀폐성이 우수합니다. 다양한 두께의 유리를 적용할 수 있어
                  외부의 소음을 효과적으로 차단할 수 있습니다.
                </p>
                <p className={styles.detail_list_img}>
                <img src='../../../images/detail4.png' alt='오버플로우 방지턱'/>
                </p>
              </li>
            </ul>
          </div>
        </section>
        <div id={styles.detail_visual}>
          <p></p>
        </div>
        <div id={styles.detail_visual_title_wrap}>
          <p id={styles.detail_visual_title}>실측부터 시공까지 대표가 직접!</p>
          <p id={styles.detail_visual_text}>완벽한 창호시공 전문기업인 달해기업과 함께하세요</p>
        </div>
      </div>

      <div id={styles.aboutItemDetail_spec_wrap}>
        <table id={styles.aboutItemDetail_spec_table}>
            <caption id={styles.aboutItemDetail_spec_caption}>제품사양</caption>
              <tr className={styles.aboutItemDetail_spec}>
                <th className={styles.aboutItemDetail_spec_title}>제품명</th>
                <td className={styles.aboutItemDetail_spec_text}>{item.text}</td>
              </tr>
              <tr className={styles.aboutItemDetail_spec}>
                <th className={styles.aboutItemDetail_spec_title}>용도</th>
                <td className={styles.aboutItemDetail_spec_text}>{item.usage}</td>
              </tr>
              <tr className={styles.aboutItemDetail_spec}>
                <th className={styles.aboutItemDetail_spec_title}>유리사양</th>
                <td className={styles.aboutItemDetail_spec_text}>{item.spec}</td>
              </tr>
              <tr className={styles.aboutItemDetail_spec}>
                <th className={styles.aboutItemDetail_spec_title}>{item.category}두께</th>
                <td className={styles.aboutItemDetail_spec_text}>{item.weight}</td>
              </tr>
        </table>
      </div>
      <div id={styles.back_aboutItem_wrap}>
        <button id={styles.go_aboutItem_btn} onClick={goList}>목록보기</button>
      </div>


      </>
        ))
      }
      {/* <div id={styles.aboutItem_visual_wrap}>
        <section id={styles.aboutItem_section}>
          <p id={styles.aboutItem_visual_title}>
            제품소개
          </p>
          <p id={styles.aboutItem_visual_text}>Introduction of Item</p>
        </section>
      </div> */}
      {/* <div id={styles.aboutItemDetail_info_wrap}>
        <section id={styles.aboutItemDetail_info_section}>
          <div id={styles.info_section_img_wrap}>
            <p id={styles.aboutItemDetail_info_img}>
              <img src='../../../images/AboutImg_00.png' alt='이중창이미지'/>
            </p>
            <ul id={styles.info_section_img_list}>
              <li>상세이미지</li>
              <li>상세이미지</li>
              <li>상세이미지</li>
              <li>상세이미지</li>
            </ul>
          </div>
          <div id={styles.info_section_font_wrap}>
            <div id={styles.info_section_title_wrap}>
              <p id={styles.aboutItemDetail_info_title}>확장형 이중창</p>
              <p id={styles.aboutItemDetail_info_name}>BF-255RB(확장용이중창)</p>
            </div>
            <div className={styles.info_section_text_wrap}>
              <p className={styles.aboutItemDetail_info_text}>용도</p>
              <p className={styles.aboutItemDetail_info_sub_text}>거실 확장, 확장방, 고급빌라 등 외부용 이중창</p>
            </div>
            <div className={styles.info_section_text_wrap}>
              <p className={styles.aboutItemDetail_info_text}>유리사양</p>
              <p className={styles.aboutItemDetail_info_sub_text}>26mm TPS단열간봉(그린+로이+아르곤가스)</p>
            </div>
            <div className={styles.info_section_text_wrap}>
              <p className={styles.aboutItemDetail_info_text}>상세설명</p>
              <p className={styles.aboutItemDetail_info_sub_text}>상세설명참고</p>
            </div>
          </div>
        </section>
      </div> */}
      {/* 
      <div id={styles.aboutItemDetail_contents_wrap}>
        <section id={styles.aboutItemDetail_contents_top_section}>
          <p id={styles.aboutItemDetail_contents_logo}></p>
          <p className={styles.aboutItemDetail_contents_normal_title}>window</p>
          <p className={styles.aboutItemDetail_contents_bold_title}>달해기업 확장형 이중창</p>
          <p className={styles.aboutItemDetail_contents_normal_title}>발코니 이중창 BF-255RB</p>
        </section>
        <section id={styles.aboutItemDetail_contents_bottom_section}>
          <p id={styles.aboutItemDetail_contents_img}>
            <img src='../../../images/AboutImg_00.png' alt='이중창이미지'/>
          </p>
          <div id={styles.aboutItemDetail_contents_list_box}>
            <ul id={styles.aboutItemDetail_contents_list}>
              <li>
                <p className={styles.aboutItemDetail_contents_list_Num}>detail 1</p>
                <p className={styles.aboutItemDetail_contents_list_title}>오버플로우 방지턱</p>
              </li>
              <li>
                <p className={styles.aboutItemDetail_contents_list_Num}>detail 2</p>
                <p className={styles.aboutItemDetail_contents_list_title}>자동개폐 물구멍</p>
              </li>
              <li>
                <p className={styles.aboutItemDetail_contents_list_Num}>detail 3</p>
                <p className={styles.aboutItemDetail_contents_list_title}>에너지 효율 1등급</p>
              </li>
              <li>
                <p className={styles.aboutItemDetail_contents_list_Num}>detail 4</p>
                <p className={styles.aboutItemDetail_contents_list_title}>우수한 방음효과</p>
              </li>
            </ul>
          </div>
        </section>
        <section id={styles.aboutItemDetail_contents_detail_section}>
          <div id={styles.detail_section_text_wrap}>
            <p id={styles.detail_section_title}>detail</p>
            <p id={styles.detail_section_text}>
              <span>달해기업</span> 창호의 디테일 <br/>
              반드시 확인하고 시공하세요!
            </p>
            <p id={styles.detail_section_subtext}>
            달해기업은 아파트 외 다양한 주택 환경에도 맞는 창을 개발하기 위하여<br/>
            시공 노하우를 바탕으로 연구하고 최고의 창을 만들었습니다
            </p>
          </div>
          <div id={styles.detail_section_visual}>

          </div>
          <div id={styles.detail_list_wrap}>
            <ul id={styles.detail_list}>
              <li>
                <p className={styles.detail_list_Num}>detail 1</p>
                <p className={styles.detail_list_title}>오버플로우 방지턱</p>
                <p className={styles.detail_list_text}>
                  용접식 제작과 내부 물막이턱 높이 증대, 창짝과 창틀 레일의 <br/>
                  오버랩 구조의 설계로 빗물이 스며들 우려가 적습니다.
                </p>
                <p className={styles.detail_list_img}>
                  <img src='../../../images/detail1.png' alt='오버플로우 방지턱'/>
                </p>
              </li>
              <li>
                <p className={styles.detail_list_Num}>detail 2</p>
                <p className={styles.detail_list_title}>자동개폐 물구멍</p>
                <p className={styles.detail_list_text}>해충으로부터 실내유입을 막을 수 있습니다</p>
                <p className={styles.detail_list_img}>
                <img src='../../../images/detail2.png' alt='오버플로우 방지턱'/>
                </p>
              </li>
              <li>
                <p className={styles.detail_list_Num}>detail 3</p>
                <p className={styles.detail_list_title}>에너지 효율 1등급</p>
                <p className={styles.detail_list_text}>
                재질(U-PVC)의 매우 낮은 열전도율(AL 대비 약 1/1,250)과 우수한
                기밀재의 사용, 다격실 구조의 설계로 창을 통한 에너지 손실을 
                막아주기 때문에 냉난방 에너지 절감에 효과적입니다.
                </p>
                <p className={styles.detail_list_img}>
                <img src='../../../images/detail3.png' alt='오버플로우 방지턱'/>
                </p>
              </li>
              <li>
                <p className={styles.detail_list_Num}>detail 4</p>
                <p className={styles.detail_list_title}>우수한 방음효과</p>
                <p className={styles.detail_list_text}>
                  용접식으로 제작되는 KCC창호는 우수한 기밀재의 사용으로 통기량을 
                  극소화하여 밀폐성이 우수합니다. 다양한 두께의 유리를 적용할 수 있어
                  외부의 소음을 효과적으로 차단할 수 있습니다.
                </p>
                <p className={styles.detail_list_img}>
                <img src='../../../images/detail4.png' alt='오버플로우 방지턱'/>
                </p>
              </li>
            </ul>
          </div>
        </section>
        <div id={styles.detail_visual}>
          <p></p>
        </div>
        <div id={styles.detail_visual_title_wrap}>
          <p id={styles.detail_visual_title}>실측부터 시공까지 대표가 직접!</p>
          <p id={styles.detail_visual_text}>완벽한 창호시공 전문기업인 달해기업과 함께하세요</p>
        </div>
      </div>
      <div id={styles.aboutItemDetail_spec_wrap}>
        <table id={styles.aboutItemDetail_spec_table}>
            <caption id={styles.aboutItemDetail_spec_caption}>제품사양</caption>
              <tr className={styles.aboutItemDetail_spec}>
                <th className={styles.aboutItemDetail_spec_title}>제품명</th>
                <td className={styles.aboutItemDetail_spec_text}>발코니 이중창 BF255(외부확장용 이중창)</td>
              </tr>
              <tr className={styles.aboutItemDetail_spec}>
                <th className={styles.aboutItemDetail_spec_title}>용도</th>
                <td className={styles.aboutItemDetail_spec_text}>거실확장, 고급빌라 등 외부용 이중창</td>
              </tr>
              <tr className={styles.aboutItemDetail_spec}>
                <th className={styles.aboutItemDetail_spec_title}>유리사양</th>
                <td className={styles.aboutItemDetail_spec_text}>TPS단열간봉 그린+로이+아르곤가스</td>
              </tr>
              <tr className={styles.aboutItemDetail_spec}>
                <th className={styles.aboutItemDetail_spec_title}>유리두께</th>
                <td className={styles.aboutItemDetail_spec_text}>26mm</td>
              </tr>
        </table>
      </div>
      <div id={styles.back_aboutItem_wrap}>
        <button id={styles.go_aboutItem_btn}>목록보기</button>
      </div> */}

    </>
  )
}
