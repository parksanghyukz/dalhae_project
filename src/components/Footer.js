import React from 'react'
import styles from './css/footer.module.css'
import { Link, createSearchParams } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImMail } from 'react-icons/im';
import { SiKakaotalk,SiNaver } from 'react-icons/si';
import { AiFillFacebook,AiOutlineTwitter,AiFillYoutube,AiOutlineInstagram,AiOutlineGoogle } from 'react-icons/ai';



export default function Footer() {
  return (
    <footer>
      <div id={styles.footer_wrap}>

      
        <h1 className={styles.logo}>
          <Link to='/'>
            <img src='../images/dalhaelogo.png' alt='이미지로고'/>
          </Link>
        </h1>
        <div id={styles.footer_info_wrap}>
          {/* <p id={styles.footer_info_text}>
            <FaMapMarkerAlt className={styles.footer_icon}/> <span>인천 부평구 부평북로 415-25,삼산동 39-5, 21318</span>
          </p>
          <p id={styles.footer_info_short_text}>
            <BsFillTelephoneFill className={styles.footer_icon}/><span>(123) 456-7890</span>
            <ImMail className={styles.footer_mail_icon}/> <span>pash609@naver.com</span>
          </p> */}
          <ul id={styles.footer_info_list}>
            <li>
              <p className={styles.footer_info_text}>
              <FaMapMarkerAlt className={styles.footer_icon}/> <span>인천 부평구 부평북로 415-25,삼산동 39-5, 21318</span>
              </p>
            </li>
            <li>
              <p className={styles.footer_info_text}>
              <BsFillTelephoneFill className={styles.footer_icon}/><span>(123) 456-7890</span>
              </p>
            </li>
            <li>
              <p className={styles.footer_info_text}>
              <ImMail className={styles.footer_mail_icon}/> <span>pash609@naver.com</span>
              </p>
            </li>
          </ul>

          <p id={styles.footer_sns_text}>
            <span>Social Media</span>           
              <ul id={styles.sns_list}>
                <li><Link><AiFillFacebook/></Link></li>
                <li><Link><AiOutlineTwitter/></Link></li>
                <li><Link><AiFillYoutube/></Link></li>
                <li><Link><AiOutlineInstagram/></Link></li>
                <li><Link><AiOutlineGoogle/></Link></li>
              </ul>
          </p> 
              
        </div>

        <p id={styles.footer_nav}>
          <nav id={styles.footermenu}>
            <h2 className='hidden'>푸터메뉴</h2>
            <ul id={styles.footermenu_list}>
              <li><Link to='/AboutUs'>업체소개</Link></li>
              <li><Link to={{ pathname: `/AboutItem`, search: `?${createSearchParams({ category: 'ALL' })}`}}>제품소개</Link></li>
              <li><Link to='/Online'>온라인문의</Link></li>
              <li><Link to='/Construction'>시공소개</Link></li>
              <li><Link to='/CustomerCenter'>고객센터</Link></li>
            </ul>
          </nav>
          <span id={styles.copyright}>Copyright © 2023 All rights reserved by DALHAE</span>
        </p> 


      </div>

    </footer>
  )
}
