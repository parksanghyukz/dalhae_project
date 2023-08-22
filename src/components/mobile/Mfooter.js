import React, { useEffect } from 'react'
import styles from './css/Mfooter.module.css'
import { Link, createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { AiFillFacebook,AiOutlineTwitter,AiFillYoutube,AiOutlineInstagram,AiOutlineGoogle } from 'react-icons/ai';

export default function Mfooter() {

  // 제품소개를 눌렀을때 'ALL'로 이동하기 위해 useNavigate를 사용함
  const navigate = useNavigate();


  // pathname이 변경될경우에 맨위로 스크롤을 이동시켜준다!
  const {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [pathname])

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
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/MAboutUs'>업체소개</Link></li>
              <li onClick={()=>{
                navigate({ pathname: '/MaboutItem', search: `?${createSearchParams({ category: 'ALL'})}`})
              }}>제품소개</li>
              <li><Link to='/Mconstruction'>시공소개</Link></li>
              <li><Link to='/MCustomerCenter'>고객센터</Link></li>
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
