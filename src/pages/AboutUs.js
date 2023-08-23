import React, { useEffect } from 'react'
import styles from '../components/css/aboutUs.module.css'
import { Map, MapMarker} from 'react-kakao-maps-sdk'
import { useLocation } from 'react-router-dom'
export default function AboutUs() {


    // # 경로가 변경될때마다 스크롤을 위로 올려주는 것이다.
    const {pathname} = useLocation()

    useEffect(()=>{
      window.scrollTo(0,0)
    }, [pathname])


  return (

    


    <>
      <div id={styles.aboutUs_visual_wrap}>
        <p id={styles.aboutUs_visual_title}>
          회사소개
        </p>
        <p id={styles.aboutUs_visual_text}>
          About Company
        </p>
      </div>
      <div id={styles.aboutUs_contents_wrap}>
        <section id={styles.aboutUs_contents_section}>
          <div id={styles.aboutUs_contents_title_box}>
            <p className={styles.aboutUs_contents_title}>DalHae Company</p>
            <p className={styles.aboutUs_contents_title}>쾌적한 삶을 위한 최상의 서비스를 제공합니다.</p>
          </div>
          <div id={styles.aboutUs_contents_text_box}>
            <ul id={styles.aboutUs_contents_text_list}>
              <li>
                <p className={styles.aboutUs_contents_text_Num}>1</p>
                <p className={styles.aboutUs_contents_text_title}>최상의</p>
                <p className={styles.aboutUs_contents_text_text}>
                  최상의 자재 사용으로 <br/>
                  성능과 효율성을 향상 시킵니다.
                </p>
              </li>
              <li>
                <p className={styles.aboutUs_contents_text_Num}>2</p>
                <p className={styles.aboutUs_contents_text_title}>서비스를</p>
                <p className={styles.aboutUs_contents_text_text}>
                  최상의 자재 사용으로 <br/>
                  성능과 효율성을 향상 시킵니다.
                </p>
              </li>
              <li>
                <p className={styles.aboutUs_contents_text_Num}>3</p>
                <p className={styles.aboutUs_contents_text_title}>제공합니다.</p>
                <p className={styles.aboutUs_contents_text_text}>
                  최상의 자재 사용으로 <br/>
                  성능과 효율성을 향상 시킵니다.
                </p>
              </li>
            </ul>
          </div>
          <div id={styles.aboutUs_contents_box}>
            <ul id={styles.aboutUs_contents_box_list}>
              <li>
                <div className={styles.aboutUs_contents_box_text}>
                  <p className={styles.aboutUs_contents_box_title}>
                    창호시공에 대한 <br/>
                    서비스제공
                  </p>
                  <p className={styles.aboutUs_contents_box_subtitle}>
                    창호 시공 전문 기업으로서 정확한 실측과 <br/>
                    시공을 통해 좋은 서비스를 제공합니다. 
                  </p>
                  <p className={styles.aboutUs_contents_box_hashtag}>
                    #달해기업 #DalHae
                  </p>
                  <p className={styles.aboutUs_contents_box_text}>
                  달해기업은 아파트 주택 학교 상가 오피스텔 원룸 병원등에
                  크고 작은 수백개의 샷시를 시공해온 샷시전문 업체입니다.
                  또한 경기, 인천, 서울권의 오래된 아파트,  빌라, 주택의 
                  발코니 샷시 및 거실창 방창의 교체작업을 전문적으로 하고 있습니다.
                  오래된 주택의 현관문을 방화문으로 교체하는 작업도 하고 있습니다. 
                  좋은 서비스로 고객 여러분께 다가갈 것을 약속드립니다.
                  </p>
                </div>
                <p className={styles.aboutUs_contents_box_img}>
                  <img src='../../../images/AboutUs01.png' alt='이미지1'/>
                </p>
              </li>
              <li>
                <p id={styles.aboutUs_contents_box_img}>
                  <img src='../../../images/AboutUs02.png' alt='이미지2'/>
                </p>
                <div id={styles.aboutUs_contents_box_text}>
                  <p className={styles.aboutUs_contents_box_title}>
                    고객의 요구를<br/>
                    우선으로
                  </p>
                  <p className={styles.aboutUs_contents_box_subtitle}>
                    달해기업의 목표는 고객의 요구를 충족시키는 것,<br/>
                    혁신적인 디자인과 최고의 품질의 제품을 제공하는 것입니다. 
                  </p>
                  <p className={styles.aboutUs_contents_box_hashtag}>
                    #달해기업 #DalHae
                  </p>
                  <p className={styles.aboutUs_contents_box_text}>
                    달해기업은 품질, 신뢰성, 인용을 달해기업의 핵심 가치로 여깁니다. 
                    달해기업의 제품은 최고의 품질의 재료와 접점 제조 공정을 통해 제작됩니다.또한 달해기업은 항상 새로운 아이디어와 기술을 도입하여 
                    창호 분야에 인용하고 있습니다
                  </p>
                </div>


              </li>
              <li>
                <div className={styles.aboutUs_contents_box_text}>
                  <p className={styles.aboutUs_contents_box_title}>
                  지속 가능한 <br/>
                  창호 자재 사용
                  </p>
                  <p className={styles.aboutUs_contents_box_subtitle}>
                  달해기업은 지속 가능한 창호 솔루션을 제공하는 주문자로서,<br/>
                  환경 보호와 고객 만족을 동시에 여는 기업입니다 .
                  </p>
                  <p className={styles.aboutUs_contents_box_hashtag}>
                    #달해기업 #DalHae
                  </p>
                  <p className={styles.aboutUs_contents_box_text}>
                  달해기업의 목표는 미래 세대에 더 나은 환경을 조성하기 위해 혁신적인 기술과 설계를 활용하여 지속 가능한 창호 솔루션을 제공하는 것입니다.
                  </p>
                </div>
                <p className={styles.aboutUs_contents_box_img}>
                  <img src='../../../images/AboutUs03.png' alt='이미지1'/>
                </p>
              </li>
            </ul>
          </div>
          <div id={styles.aboutUs_map}>
            <div id={styles.aboutUs_title_wrap}>
              <p id={styles.aboutUs_top_title}>
                <span id={styles.span_first}></span>
                <span id={styles.span_second}></span>
                <span id={styles.span_third}></span>
              </p>
              <p id={styles.aboutUs_title}>
                오시는 길
              </p>
            </div>
            <div id={styles.aboutUs_map_box}>
              {/* # 카카오 지도 구현 */}
                <Map 
                  center={{ lat: 37.52363651912897, lng: 126.7399534734493 }} 
                  style={{ width: '100%', height: '100%'}}
                  level={5} 
                >
                  <MapMarker 
                  position={{ lat: 37.52363651912897, lng: 126.7399534734493 }}
                  image={{src:'../../../images/marker-icon.svg',
                  size: {
                    width: 40,
                    height: 40,
                  }}}
                  />     
                </Map>
            </div>
            <div id={styles.aboutUs_way}>
              <ul id={styles.aboutUs_way_list}>
                <li>
                  <p className={styles.aboutUs_way_img}>
                    <img src='../../../images/subway.png' alt='지하철이미지'/>
                  </p>
                  <span>7호선</span>
                  <p className={styles.aboutUs_way_text}>
                      굴포천역 8번출구에서 도보 약 800m(15분)
                  </p>
                </li>
                <li>
                  <p id={styles.aboutUs_way_img}>
                    <img src='../../../images/bus.png' alt='버스이미지'/>
                  </p>
                  <span>간선</span>
                  <p className={styles.aboutUs_way_text}>
                      28, 80, 87, 302B
                  </p>
                </li>
              </ul>
            </div>
               
          </div>
        </section>

      </div>
    </>
  )
}
