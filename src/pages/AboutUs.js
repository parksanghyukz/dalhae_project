import React from 'react'
import styles from '../components/css/aboutUs.module.css'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
export default function AboutUs() {
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


              </li>
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
            {/* <Map
              center={{ lat: 33.5563, lng: 126.79581 }}
              style={{ width: "1400px", height: "800px", margin: "0 auto" }}
            >
              <MapMarker position={{ lat: 37.52363651912897, lng: 126.7399534734493 }}>
                <div style={{color:"#000"}}>Hello World!</div>
              </MapMarker>
            </Map> */}
              <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: "100%", height: "360px" }}
              >
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                  <div style={{color:"#000"}}>Hello World!</div>
                </MapMarker>
              </Map>
            
          </div>
        </section>

      </div>
    </>
  )
}
