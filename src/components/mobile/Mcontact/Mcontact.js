import React from 'react'
import styles from './Mcontact.module.css'

const submit=()=>{
  alert('문의내용 접수되었습니다!')
}


export default function Mcontact() {
  return (
    <>
      <div id={styles.mobile_contact_wrap}>
        <section id={styles.mobile_contact_section}>
          <p id={styles.mobile_contact_title}>
            Contact Us <span>간편문의</span>
          </p>
          <div id={styles.mobile_contact_form_wrap}>
            <p id={styles.mobile_contact_form_title}>
              주소
            </p>
            <form id={styles.mobile_contact_form}>
              <input id={styles.mobile_contact_address} placeholder='주소를 입력하세요'/>
              <input id={styles.mobile_contact_name} placeholder='이름' maxLength='10'/>
              <input id={styles.mobile_contact_tel} placeholder='연락처'/>
              <textarea id={styles.mobile_contact_contents} placeholder='문의내용'></textarea>
              <button id={styles.mobile_submit_btn} onClick={submit}>submit now</button>
            </form>
          </div>
        </section>

      </div>
    
    </>
  )
}
