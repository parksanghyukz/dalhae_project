import React from 'react'
import styles from './css/Mfooter.module.css'
import { Link } from 'react-router-dom'
import { AiFillFacebook,AiOutlineTwitter,AiFillYoutube,AiOutlineInstagram,AiOutlineGoogle } from 'react-icons/ai';

export default function Mfooter() {
  return (
    <div>
      <footer id={styles.mobile_footer}>
        <h1 id={styles.mobile_footer_logo}>
          <img src='../../images/mobile/dalhaeFooterLogo.png' alt='로고이미지'/>
        </h1>

        <p id={styles.mobile_footer_nav}>
          <nav id={styles.mobile_footer_menu}>
            {/* <h2 className='hidden'>모바일푸터메뉴</h2> */}
            <ul id={styles.mobile_footer_menu_list}>
              <li><Link to='/'>업체소개</Link></li>
              <li><Link to='/'>제품소개</Link></li>
              <li><Link to='/'>온라인문의</Link></li>
              <li><Link to='/'>커뮤니티</Link></li>
              <li><Link to='/'>고객센터</Link></li>
            </ul>
          </nav>
        </p>
        <p id={styles.mobile_footer_sns_wrap}>
          <ul id={styles.moblie_footer_sns_list}>
              <li><Link><AiFillFacebook/></Link></li>
              <li><Link><AiOutlineTwitter/></Link></li>
              <li><Link><AiFillYoutube/></Link></li>
              <li><Link><AiOutlineInstagram/></Link></li>
          </ul>
        </p>
        <p id={styles.mobile_copyright}>
          Copyright © 2023 All rights reserved by DALHAE
        </p>
      </footer>
    </div>
  )
}
