import React from 'react'
import styles from './contact.module.css'
import { PiArrowElbowRightDownBold } from 'react-icons/pi';

export default function Contact() {
  return (
    <div id={styles.contact_wrap}>
      <section id={styles.contact_section}>
        <h2 className='hidden'>contact영역</h2>
        <div id={styles.contact_text_box}>
          <p id={styles.contact_zoom}></p>
          <p id={styles.contact_title}>간편문의하기</p>
          <p id={styles.contact_text}>
            고객의 만족을 최우선으로 하며 최고의 품질과<br/>
            서비스를 제공하겠습니다.
          </p>
        </div>
        <div id={styles.contact_form_box}>
          <p id={styles.contact_hidden_title}>간편문의하기 <PiArrowElbowRightDownBold className={styles.contact_arrow}/> </p>
          <form id={styles.contact_form}>
            
            <input type='text' id={styles.contact_address} placeholder='주소'/>
            <input type='text' id={styles.contact_name} placeholder='이름' maxLength='10'/>
            <input type='number' id={styles.contact_phone} placeholder='연락처' />
            {/* <input id={styles.contact_contents} placeholder='문의내용'/> */}
            <textarea id={styles.contact_contents} placeholder='문의내용'/>
            <button id={styles.submit_btn}>submit now</button>
          </form>
          {/* <table>
            <tbody>
              <tr>
                <th className={styles.contact_title}>
                  주소
                </th>
                <td>
                  <input id={styles.contact_address}/>
                </td>
              </tr>
              <tr>
                <th className={styles.contact_title}>
                  이름
                </th>
                <td>
                  <input id={styles.contact_name}/>
                </td>
              </tr>
              <tr>
                <th className={styles.contact_title}>
                  연락처
                </th>
                <td>
                  <input id={styles.contact_phone}/>
                </td>
              </tr>
              <tr>
                <th className={styles.contact_title}>
                  문의내용
                </th>
                <td>
                  <input id={styles.contact_contents}/>
                </td>
              </tr>
            </tbody>    
            <button id={styles.submit_btn}>submit now</button>        
          </table>     */}
          
        </div>

      </section>
    </div>
  )
}
