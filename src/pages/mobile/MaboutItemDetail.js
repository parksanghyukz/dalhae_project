import React, { useEffect, useState } from 'react';
import styles from '../../components/mobile/css/MaboutItemDetail.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import useCategory from '../../Hooks/useCategory';
import { getProducts } from '../../api/firebase';
import axios from 'axios'



export default function MaboutItemDetail() {

  const bbb = useCategory()

  const {productId} = useParams()

  const [allProducts, setAllProducts] = useState([])

  useEffect(()=>{
    axios.get('/data/products.json').then((res)=>{
      setAllProducts(res.data)
    })
  }, [])


  // 이건 로컬이 아닌 db에서 데이터 불러오기!
  // const [allProducts, setAllProducts] = useState([])

  // useEffect(()=>{
  //   getProducts().then((res)=>{
  //     setAllProducts(res)
  //   })
  // })


  const [productItem, setProductItem] = useState([])

  useEffect(()=>{
    const productItem = allProducts.filter((item)=>(item.id===productId))
    setProductItem(productItem)
  }, [allProducts])


  const navigate = useNavigate();

  const goList=()=>{
    navigate(`/MaboutItem?category=${bbb}`)
  }
  return (
    <>
      {
        productItem.map((item)=>(
          <>
            <div id={styles.mobile_aboutItem_visual_wrap}>
              <section id={styles.mobile_aboutItem_section}>
                <p id={styles.mobile_aboutItem_visual_title}>제품소개</p>
                <p id={styles.mobile_aboutItem_visual_text}>Introduction of Item</p>
              </section>
            </div>
            <div id={styles.mobile_aboutItemDetail_info_wrap}>
              <section id={styles.mobile_aboutItemDetail_info_section}>
                <div id={styles.mobile_info_section_img_wrap}>
                  <div id={styles.mobile_info_section_img_box}>
                    <p id={styles.mobile_aboutItemDetail_info_img}>
                      {/* <img src='../../../../images/Window_00.png'/> */}
                      <img src={item.image} alt='제품이미지'/>
                    </p>
                  </div>
                </div>
                <div id={styles.mobile_info_section_font_wrap}>
                  <div id={styles.mobile_info_section_title_wrap}>
                    {/* <p id={styles.mobile_aboutItemDetail_info_title}>발코니창</p> */}
                    <p id={styles.mobile_aboutItemDetail_info_title}>{item.title}</p>
                    {/* <p id={styles.mobile_aboutItemDetail_info_name}>발코니단창</p> */}
                    <p id={styles.mobile_aboutItemDetail_info_name}>{item.text}</p>
                  </div>
                  <div className={styles.mobile_info_section_text_wrap}>
                    <p className={styles.mobile_aboutItemDetail_info_text}>용도</p>
                    <p className={styles.mobile_aboutItemDetail_info_sub_text}>{item.usage}</p>
                  </div>
                  <div className={styles.mobile_info_section_text_wrap}>
                      <p className={styles.mobile_aboutItemDetail_info_text}>유리사양</p>
                      <p className={styles.mobile_aboutItemDetail_info_sub_text}>{item.spec}</p>
                    </div>
                  <div className={styles.mobile_info_section_text_wrap}>
                    <p className={styles.mobile_aboutItemDetail_info_text}>색상</p>
                    <p className={styles.mobile_aboutItemDetail_info_sub_text}>{item.color}</p>
                  </div>
                  <div className={styles.mobile_info_section_text_wrap}>
                    <p className={styles.mobile_aboutItemDetail_info_text}>상세설명</p>
                    <p className={styles.mobile_aboutItemDetail_info_sub_text}>상세설명참고</p>
                  </div>

                </div>
              </section>
            </div>




            <div id={styles.mobile_aboutItemDetail_contents_wrap}>
              <section id={styles.mobile_aboutItemDetail_contents_top_section}>
                <p id={styles.mobile_aboutItemDetail_contents_logo}></p>
                <p className={styles.mobile_aboutItemDetail_contents_normal_title}>window</p>
                <p className={styles.mobile_aboutItemDetail_contents_bold_title}>달해기업 {item.title}</p>
                <p className={styles.mobile_aboutItemDetail_contents_normal_title}>{item.text}</p>
              </section>
              <section id={styles.mobile_aboutItemDetail_contents_bottom_section}>
                <p id={styles.mobile_aboutItemDetail_contents_img}>
                  {/* <img src='../../../images/Window_00.png' alt='제품이미지'/> */}
                  <img src={item.image} alt='제품이미지'/>
                </p>
                <div id={styles.mobile_aboutItemDetail_contents_list_box}>
                  <ul id={styles.mobile_aboutItemDetail_contents_list}>
                    <li>
                      <p className={styles.mobile_aboutItemDetail_contents_list_Num}>detail 1</p>
                      <p className={styles.mobile_aboutItemDetail_contents_list_title}>오버플로우 방지턱</p>
                    </li>
                    <li>
                      <p className={styles.mobile_aboutItemDetail_contents_list_Num}>detail 2</p>
                      <p className={styles.mobile_aboutItemDetail_contents_list_title}>자동개폐 물구멍</p>
                    </li>
                    <li>
                      <p className={styles.mobile_aboutItemDetail_contents_list_Num}>detail 3</p>
                      <p className={styles.mobile_aboutItemDetail_contents_list_title}>에너지 효율 1등급</p>
                    </li>
                    <li>
                      <p className={styles.mobile_aboutItemDetail_contents_list_Num}>detail 4</p>
                      <p className={styles.mobile_aboutItemDetail_contents_list_title}>우수한 방음효과</p>
                    </li>
                  </ul>
                </div>
              </section>
              <section id={styles.mobile_aboutItemDetail_contents_detail_section}>
                <div id={styles.mobile_detail_section_text_wrap}>
                  <p id={styles.mobile_detail_section_title}>detail</p>
                  <p id={styles.mobile_detail_section_text}>
                    <span>달해기업</span> 창호의 디테일 <br/>
                    반드시 확인하고 시공하세요!
                  </p>
                  <p id={styles.mobile_detail_section_subtext}>
                  달해기업은 아파트 외 다양한 주택 환경에도 맞는 창을 개발하기 위하여
                  시공 노하우를 바탕으로 연구하고 최고의 창을 만들었습니다
                  </p>
                </div>
                <div id={styles.mobile_detail_section_visual}>

                </div>
                <div id={styles.mobile_detail_list_wrap}>
                  <ul id={styles.mobile_detail_list}>
                    <li>
                      <p className={styles.mobile_detail_list_Num}>detail 1</p>
                      <p className={styles.mobile_detail_list_title}>오버플로우 방지턱</p>
                      <p className={styles.mobile_detail_list_text}>
                        용접식 제작과 내부 물막이턱 높이 증대, 창짝과 창틀 레일의
                        오버랩 구조의 설계로 빗물이 스며들 우려가 적습니다.
                      </p>
                    </li>
                    <li>
                      <p className={styles.mobile_detail_list_Num}>detail 2</p>
                      <p className={styles.mobile_detail_list_title}>자동개폐 물구멍</p>
                      <p className={styles.mobile_detail_list_text}>해충으로부터 실내유입을 막을 수 있습니다</p>
                    </li>
                    <li>
                      <p className={styles.mobile_detail_list_Num}>detail 3</p>
                      <p className={styles.mobile_detail_list_title}>에너지 효율 1등급</p>
                      <p className={styles.mobile_detail_list_text}>
                      재질(U-PVC)의 매우 낮은 열전도율(AL 대비 약 1/1,250)과 우수한
                      기밀재의 사용, 다격실 구조의 설계로 창을 통한 에너지 손실을 
                      막아주기 때문에 냉난방 에너지 절감에 효과적입니다.
                      </p>
                    </li>
                    <li>
                      <p className={styles.mobile_detail_list_Num}>detail 4</p>
                      <p className={styles.mobile_detail_list_title}>우수한 방음효과</p>
                      <p className={styles.mobile_detail_list_text}>
                        용접식으로 제작되는 KCC창호는 우수한 기밀재의 사용으로 통기량을 
                        극소화하여 밀폐성이 우수합니다. 다양한 두께의 유리를 적용할 수 있어
                        외부의 소음을 효과적으로 차단할 수 있습니다.
                      </p>
                    </li>
                  </ul>
                </div>
                <div id={styles.mobile_detail_visual}>
                  <p></p>
                </div>
              </section>

              <div id={styles.mobile_detail_visual_title_wrap}>
                <p id={styles.mobile_detail_visual_title}>실측부터 시공까지 대표가 직접!</p>
                <p id={styles.mobile_detail_visual_text}>완벽한 창호시공 전문기업인 달해기업과 함께하세요</p>
              </div>
            </div>

            <div id={styles.mobile_aboutItemDetail_spec_wrap}>
              <table id={styles.mobile_aboutItemDetail_spec_table}>
                  <caption id={styles.mobile_aboutItemDetail_spec_caption}>제품사양</caption>
                    <tr className={styles.mobile_aboutItemDetail_spec}>
                      <th className={styles.mobile_aboutItemDetail_spec_title}>제품명</th>
                      <td className={styles.mobile_aboutItemDetail_spec_text}>{item.text}</td>
                    </tr>
                    <tr className={styles.mobile_aboutItemDetail_spec}>
                      <th className={styles.mobile_aboutItemDetail_spec_title}>용도</th>
                      <td className={styles.mobile_aboutItemDetail_spec_text}>{item.usage}</td>
                    </tr>
                    <tr className={styles.mobile_aboutItemDetail_spec}>
                      <th className={styles.mobile_aboutItemDetail_spec_title}>유리사양</th>
                      <td className={styles.mobile_aboutItemDetail_spec_text}>{item.spec}</td>
                    </tr>
                    <tr className={styles.mobile_aboutItemDetail_spec}>
                      <th className={styles.mobile_aboutItemDetail_spec_title}>두께</th>
                      <td className={styles.mobile_aboutItemDetail_spec_text}>{item.weight}</td>
                    </tr>
              </table>
            </div>
            <div id={styles.mobile_back_aboutItem_wrap}>
              <button id={styles.mobile_back_aboutItem_btn} onClick={goList}>목록보기</button>
            </div>

          </>
        ))
      }
      {/* <div id={styles.mobile_aboutItem_visual_wrap}>
        <section id={styles.mobile_aboutItem_section}>
          <p id={styles.mobile_aboutItem_visual_title}>제품소개</p>
          <p id={styles.mobile_aboutItem_visual_text}>Introduction of Item</p>
        </section>
      </div>
      <div id={styles.mobile_aboutItemDetail_info_wrap}>
        <section id={styles.mobile_aboutItemDetail_info_section}>
          <div id={styles.mobile_info_section_img_wrap}>
            <div id={styles.mobile_info_section_img_box}>
              <p id={styles.mobile_aboutItemDetail_info_img}>
                <img src='../../../../images/Window_00.png'/>
              </p>
            </div>
          </div>
          <div id={styles.mobile_info_section_font_wrap}>
            <div id={styles.mobile_info_section_title_wrap}>
              <p id={styles.mobile_aboutItemDetail_info_title}>발코니창</p>
              <p id={styles.mobile_aboutItemDetail_info_name}>발코니단창</p>
            </div>
            <div className={styles.mobile_info_section_text_wrap}>
              <p className={styles.mobile_aboutItemDetail_info_text}>용도</p>
              <p className={styles.mobile_aboutItemDetail_info_sub_text}>z</p>
            </div>
            <div className={styles.mobile_info_section_text_wrap}>
                <p className={styles.mobile_aboutItemDetail_info_text}>유리사양</p>
                <p className={styles.mobile_aboutItemDetail_info_sub_text}>z</p>
              </div>
            <div className={styles.mobile_info_section_text_wrap}>
              <p className={styles.mobile_aboutItemDetail_info_text}>색상</p>
              <p className={styles.mobile_aboutItemDetail_info_sub_text}>z</p>
            </div>
            <div className={styles.mobile_info_section_text_wrap}>
              <p className={styles.mobile_aboutItemDetail_info_text}>상세설명</p>
              <p className={styles.mobile_aboutItemDetail_info_sub_text}>상세설명참고</p>
            </div>

          </div>
        </section>
      </div>




      <div id={styles.mobile_aboutItemDetail_contents_wrap}>
        <section id={styles.mobile_aboutItemDetail_contents_top_section}>
          <p id={styles.mobile_aboutItemDetail_contents_logo}></p>
          <p className={styles.mobile_aboutItemDetail_contents_normal_title}>window</p>
          <p className={styles.mobile_aboutItemDetail_contents_bold_title}>달해기업</p>
          <p className={styles.mobile_aboutItemDetail_contents_normal_title}>발코니단창</p>
        </section>
        <section id={styles.mobile_aboutItemDetail_contents_bottom_section}>
          <p id={styles.mobile_aboutItemDetail_contents_img}>
            <img src='../../../images/Window_00.png' alt='제품이미지'/>
          </p>
          <div id={styles.mobile_aboutItemDetail_contents_list_box}>
            <ul id={styles.mobile_aboutItemDetail_contents_list}>
              <li>
                <p className={styles.mobile_aboutItemDetail_contents_list_Num}>detail 1</p>
                <p className={styles.mobile_aboutItemDetail_contents_list_title}>오버플로우 방지턱</p>
              </li>
              <li>
                <p className={styles.mobile_aboutItemDetail_contents_list_Num}>detail 2</p>
                <p className={styles.mobile_aboutItemDetail_contents_list_title}>자동개폐 물구멍</p>
              </li>
              <li>
                <p className={styles.mobile_aboutItemDetail_contents_list_Num}>detail 3</p>
                <p className={styles.mobile_aboutItemDetail_contents_list_title}>에너지 효율 1등급</p>
              </li>
              <li>
                <p className={styles.mobile_aboutItemDetail_contents_list_Num}>detail 4</p>
                <p className={styles.mobile_aboutItemDetail_contents_list_title}>우수한 방음효과</p>
              </li>
            </ul>
          </div>
        </section>
        <section id={styles.mobile_aboutItemDetail_contents_detail_section}>
          <div id={styles.mobile_detail_section_text_wrap}>
            <p id={styles.mobile_detail_section_title}>detail</p>
            <p id={styles.mobile_detail_section_text}>
              <span>달해기업</span> 창호의 디테일 <br/>
              반드시 확인하고 시공하세요!
            </p>
            <p id={styles.mobile_detail_section_subtext}>
            달해기업은 아파트 외 다양한 주택 환경에도 맞는 창을 개발하기 위하여
            시공 노하우를 바탕으로 연구하고 최고의 창을 만들었습니다
            </p>
          </div>
          <div id={styles.mobile_detail_section_visual}>

          </div>
          <div id={styles.mobile_detail_list_wrap}>
            <ul id={styles.mobile_detail_list}>
              <li>
                <p className={styles.mobile_detail_list_Num}>detail 1</p>
                <p className={styles.mobile_detail_list_title}>오버플로우 방지턱</p>
                <p className={styles.mobile_detail_list_text}>
                  용접식 제작과 내부 물막이턱 높이 증대, 창짝과 창틀 레일의
                  오버랩 구조의 설계로 빗물이 스며들 우려가 적습니다.
                </p>
              </li>
              <li>
                <p className={styles.mobile_detail_list_Num}>detail 2</p>
                <p className={styles.mobile_detail_list_title}>자동개폐 물구멍</p>
                <p className={styles.mobile_detail_list_text}>해충으로부터 실내유입을 막을 수 있습니다</p>
              </li>
              <li>
                <p className={styles.mobile_detail_list_Num}>detail 3</p>
                <p className={styles.mobile_detail_list_title}>에너지 효율 1등급</p>
                <p className={styles.mobile_detail_list_text}>
                재질(U-PVC)의 매우 낮은 열전도율(AL 대비 약 1/1,250)과 우수한
                기밀재의 사용, 다격실 구조의 설계로 창을 통한 에너지 손실을 
                막아주기 때문에 냉난방 에너지 절감에 효과적입니다.
                </p>
              </li>
              <li>
                <p className={styles.mobile_detail_list_Num}>detail 4</p>
                <p className={styles.mobile_detail_list_title}>우수한 방음효과</p>
                <p className={styles.mobile_detail_list_text}>
                  용접식으로 제작되는 KCC창호는 우수한 기밀재의 사용으로 통기량을 
                  극소화하여 밀폐성이 우수합니다. 다양한 두께의 유리를 적용할 수 있어
                  외부의 소음을 효과적으로 차단할 수 있습니다.
                </p>
              </li>
            </ul>
          </div>
          <div id={styles.mobile_detail_visual}>
            <p></p>
          </div>
        </section>

        <div id={styles.mobile_detail_visual_title_wrap}>
          <p id={styles.mobile_detail_visual_title}>실측부터 시공까지 대표가 직접!</p>
          <p id={styles.mobile_detail_visual_text}>완벽한 창호시공 전문기업인 달해기업과 함께하세요</p>
        </div>
      </div>

      <div id={styles.mobile_aboutItemDetail_spec_wrap}>
        <table id={styles.mobile_aboutItemDetail_spec_table}>
            <caption id={styles.mobile_aboutItemDetail_spec_caption}>제품사양</caption>
              <tr className={styles.mobile_aboutItemDetail_spec}>
                <th className={styles.mobile_aboutItemDetail_spec_title}>제품명</th>
                <td className={styles.mobile_aboutItemDetail_spec_text}>zzzzzzzzzzzzzz</td>
              </tr>
              <tr className={styles.mobile_aboutItemDetail_spec}>
                <th className={styles.mobile_aboutItemDetail_spec_title}>용도</th>
                <td className={styles.mobile_aboutItemDetail_spec_text}>zzzzzzzzzzzzz</td>
              </tr>
              <tr className={styles.mobile_aboutItemDetail_spec}>
                <th className={styles.mobile_aboutItemDetail_spec_title}>유리사양</th>
                <td className={styles.mobile_aboutItemDetail_spec_text}>zzzzzzzzz</td>
              </tr>
              <tr className={styles.mobile_aboutItemDetail_spec}>
                <th className={styles.mobile_aboutItemDetail_spec_title}>두께</th>
                <td className={styles.mobile_aboutItemDetail_spec_text}>zzzzzzzzz</td>
              </tr>
        </table>
      </div>
      <div id={styles.mobile_back_aboutItem_wrap}>
        <button id={styles.mobile_back_aboutItem_btn} onClick={goList}>목록보기</button>
      </div> */}

    
    
    
    
    </>
  )
}
