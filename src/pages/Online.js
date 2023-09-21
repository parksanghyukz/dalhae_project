import React, { useEffect, useRef, useState } from 'react'
import styles from '../components/css/online.module.css'
import {AiOutlineClose} from 'react-icons/ai';
import { gsap } from 'gsap';


export default function Online() {


  const [modalOpen, setModalOpen] = useState(false)




  const showModal=()=>{
    setModalOpen(!modalOpen)
    gsap.set(modalBg.current, {display:'block'})
    gsap.set(modal.current,{display:'block'})
  }


  const closeModal=()=>{
    gsap.set(modal.current,{display:'none'})
    gsap.set(modalBg.current, {display:'none'})
  }


  const finish=()=>{
    if(modalOpen===false){
      alert('개인정보 수집 동의해주세요')
    }else if(modalOpen===true){
      alert('견적신청 완료!')
    }
  }


  const modalBg = useRef();
  const modal = useRef();

  useEffect(()=>{
    // gsap.set(modal.current,{display:'none'})
    // gsap.set(modalBg.current,{display:'none'})
    closeModal()
  },[])


  return (
 


    <>
      

          {/* <div style={{margin:'100px auto', width:'880px',height:'600px'}}>
        <img style={{width:'100%'}} src='../../../images/page_wait.jpg' alt='오버플로우 방지턱'/>
      </div> */}
      {/* <div style={{margin:'120px auto', width:'900px',height:'520px'}}> */}
        {/* <img style={{width:'100%'}} src='../../../images/page_wait.jpg' alt='오버플로우 방지턱'/> */}
        {/* <img style={{width:'100%'}} src='../../../images/img_page_ready.png' alt='준비중이미지'/> */}
      {/* </div> */}



      <div id={styles.online_visual_wrap}>
        <section id={styles.online_section}>
          <p id={styles.online_visual_title}>
            온라인 문의
          </p>
          <p id={styles.online_visual_text}>ask online</p>
        </section>
      </div>



      <div id={styles.online_form_wrap}>
        <div id={styles.online_standard_form_wrap}>
          <p className={styles.online_form_title}>기본정보</p>
          <form id={styles.online_form}>
            <div className={styles.online_name_box}>
              <p className={styles.online_important_name}>이름</p>
              <input className={styles.online_name_input} type='text' placeholder='성함을 입력하세요' required="required"/>
            </div>
            <div className={styles.online_name_box}>
              <p className={styles.online_important_name}>연락처</p>
              <input className={styles.online_name_input} type='number' required="required"/>
            </div>
            <div className={styles.online_name_box}>
              <p className={styles.online_name}>의뢰서비스</p>
              <select className={styles.online_select}>
                <option value='서비스'>서비스를 선택하세요</option>
                <option value='창호'>창호</option>
                <option value='유리'>유리</option>
                <option value='현관문'>현관문</option>
              </select>
            </div>
          </form>
        </div>


        <div id={styles.online_detail_form_wrap}>
          <p className={styles.online_form_title}>상세정보</p>
          <form id={styles.online_detail_form}>
            <div className={styles.online_name_box}>
              <p className={styles.online_name}>의뢰유형</p>
              <select className={styles.online_select}>
                <option value='의뢰유형'>의뢰유형을 선택하세요</option>
                <option value='아파트'>아파트</option>
                <option value='상가'>상가</option>
                <option value='단독주택'>단독주택</option>
              </select>
            </div>
            <div className={styles.online_name_box}>
              <p className={styles.online_name}>업종</p>
              <select className={styles.online_select}>
                <option value='업종'>업종을 선택하세요</option>
                <option value='병원'>병원</option>
                <option value='학원'>학원</option>
                <option value='식당'>식당</option>
                <option value='가정집'>가정집</option>
              </select>
            </div>
            <div className={styles.online_name_box}>
              <p className={styles.online_name}>크기/면적</p>
              <input className={styles.online_name_input} type='text' placeholder='크기/면적을 입력하세요'/>
            </div>
            <div className={styles.online_name_box}>
              <p className={styles.online_name}>층수</p>
              <input className={styles.online_name_input} type='number' placeholder='층수를 입력하세요'/>
            </div>
            {/* <div className={styles.online_name_box}>
              <p className={styles.online_name}>주소</p>
              <input className={styles.online_name_input}/>
            </div>
            <div className={styles.online_name_box}>
              <p className={styles.online_name}>현장사진</p>
              <p id={styles.online_picture}></p>
            </div> */}
            {/* 여기엔 선생님께 주소 소스받으면 넣을 곳 */}
          </form>
        </div>


        <div id={styles.online_plus_info_wrap}>
          <p className={styles.online_form_title}>기타정보</p>
          <form id={styles.online_plus_info_form}>
            <div className={styles.online_name_box}>
              <p className={styles.online_name}>공사 희망일</p>
              {/* <select className={styles.online_select}>
                <option value='의뢰유형'>의뢰유형을 선택하세요</option>
                <option value='아파트'>아파트</option>
                <option value='상가'>상가</option>
                <option value='단독주택'>단독주택</option>
              </select> */}
              <input className={styles.online_name_input} type='date'/>
            </div>
            <div className={styles.online_name_box}>
              <p className={styles.online_name}>예상견적</p>
              <input className={styles.online_name_input} type='text' placeholder='예상견적을 입력하세요'/>
            </div>
            <div className={styles.online_name_big_box}>
              <p className={styles.online_name}>요청사항</p>
              <textarea className={styles.online_name_big_input} placeholder='이외에 달해기업에 요청주실 사안이 있으시면 남겨주세요'/>
            </div>
          </form>
        </div>
      </div>


      <div id={styles.online_personal_info_wrap}>
        <input id={styles.online_personal_info_btn} onClick={showModal} type='checkbox'/>
        <p id={styles.online_personal_info_text}>개인정보 수집 동의</p>
      </div>
      <p id={styles.online_submit_btn_wrap}>
        <button id={styles.online_submit_btn} onClick={finish}>
          견적신청하기
        </button>
      </p>


      <div id={styles.online_modal_bg} ref={modalBg}></div>
        <div id={styles.online_modal} ref={modal}>
          <p id={styles.online_modal_title}>
            개인정보처리방침
          </p>
          <button id={styles.online_modal_close_btn} onClick={closeModal}>
            <AiOutlineClose id={styles.online_modal_close}/>
          </button>
          <p id={styles.online_modal_sub_title}>
            개인정보 수집 및 이용에 대한 안내
          </p>

          <p className={styles.online_modal_bold_title}>
          수집항목
          </p>
          <p className={styles.online_modal_text}>
          이름, 연락처, 주소, 업종, 평수, 층수, 엘리베이터(유/무), 현장사진, 의뢰 서비스, 공사희망일, 예산, 요청사항
          </p>
          <p className={styles.online_modal_bold_title}>
          수집목적
          </p>
          <p className={styles.online_modal_text}>
          견적접수 및 결과회신
          </p>
          <p className={styles.online_modal_bold_title}>
          이용기간
          </p>
          <p className={styles.online_modal_text}>
          원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보전할 필요가 있는 경우 일정 기간 동안 개인정보를 보관할 수 있습니다.
          </p>

          <p className={styles.online_modal_text}>
          그 밖의 사항은 달해기업 개인정보처리방침을 준수합니다.
          </p>
          {
            <button id={styles.modal_close_bigbtn} onClick={closeModal}>
              닫기
            </button>
          }

        </div>

   
      

      
      
      
    </>

  )
}
