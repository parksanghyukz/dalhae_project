import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from './css/Mheader.module.css'
import { PiEye,PiEyeSlash } from 'react-icons/pi';
import { gsap } from 'gsap'
import { Link, createSearchParams, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { login, logout } from '../../api/firebase';

export default function Mheader() {


  const [clickIndex, setClickIndex] = useState(null);


  const mainMenuList = useMemo(()=>[
    {index:0, name:'Home', subMenuList:[]},
    {index:1, name:'업체소개', subMenuList:[{index:0, name:'서브메뉴', path:'/MAboutUs'}]},
    {index:2, name:'제품소개', subMenuList:[{index:0, name:'ALL', path:'/MaboutItem'},{index:1, name:'창호',path:'/MaboutItem'},{index:2, name:'유리',path:'/MaboutItem'},{index:3, name:'현관문',path:'/MaboutItem'}]},
    {index:3, name:'시공소개', subMenuList:[{index:0, name:'서브메뉴', path:'/Mconstruction'}]},
    {index:4, name:'고객센터', subMenuList:[{index:0, name:'서브메뉴', path:'/MCustomerCenter'}]},
  ],[]) 

  const navigate = useNavigate()

  const menuIcon = useRef();

  const mobileMenu = useRef();

  const closeBtn = useRef();

  const grayLayer = useRef(); 

  let openHeight = null;

  let closeHeight = 55;

  useEffect(()=>{
    gsap.set(mobileMenu.current, {right:'-60vw', display:'none'})
    gsap.set(grayLayer.current, {display:'none'})
  },[])


  const openMenu=()=>{
    gsap.set('body,html', {overflow:'hidden'})
    gsap.set(grayLayer.current,{display:'block'});
    gsap.set(mobileMenu.current, {display:'block',overflow:'hidden'})
    gsap.to(mobileMenu.current, {right:0, duration:0.5, ease:'power1.out'})
  }

  const closeMenu=()=>{
    gsap.set('body,html', {overflow:'visible'})
    gsap.set(grayLayer.current,{display:'none'});
    gsap.to(mobileMenu.current,{right:'-60vw',duration:0.5, ease:'power1.out',onComplete:()=>{
      gsap.set(mobileMenu.current,{display:'none'})
    }})

    setClickIndex(null)
  }

  const {user} = useAuthContext()

  console.log('user', user)


  return (
    <div>
      
      <header id={styles.mobile_header}>
        <h1 id={styles.logo}>
          <Link to='/'>
            <img src='../../images/mobile/dalhaelogo.png' alt='로고이미지'/>
          </Link>
        </h1>

        <h2 id={styles.menu_icon} ref={menuIcon} onClick={openMenu}> 
          <img src='../../images/mobile/hamburgerMenu.png' alt='모바일메뉴'/>
        </h2>

        <nav id={styles.mobile_menu} ref={mobileMenu}>
          <div id={styles.mobile_menu_wrap}>
            <p>
              <img src='../../images/mobile/dalhaeFooterLogo.png' alt='로고이미지'/>
              {
                // user!==null ? 
                user ? 
                <>
                <span id={styles.mobile_menu_text}>
                <p id={styles.mobile_profile_wrap}>
                  <img src={user.photoURL}/>
                </p>
                {user.displayName}님 <br/> 환영합니다.
                </span>
                <span id={styles.mobile_close_btn} ref={closeBtn} onClick={closeMenu}>
                  <img src='../../images/mobile/closeBtn.png' alt='닫기버튼'/>
                </span>
                </>

                :
                <>
                <span id={styles.mobile_menu_text}>
                환영합니다. <br/>
                로그인 해주세요. 
                </span>
                <span id={styles.mobile_close_btn} ref={closeBtn} onClick={closeMenu}>
                  <img src='../../images/mobile/closeBtn.png' alt='닫기버튼'/>
                </span>
                
                </>
              }
            </p> 
            
            <ul id={styles.mobile_login_menu}>
                {
                  // user!== null?
                  user ? 
                  <>
                    <li onClick={logout}>로그아웃</li>
                    <li onClick={logout}>달해회원</li>
                  </>
                  :
                  <>
                    <li onClick={login}>로그인</li>
                    <li onClick={login}>회원가입</li>
                  </>
                }
            </ul>
            <ul id={styles.mobile_menu_list}>
              {
                mainMenuList.map((item)=>(
                  <li key={item.index} className={`${item.index===clickIndex && styles.selected}`}
                  style={item.index===clickIndex ? {height:closeHeight+(closeHeight*item.subMenuList.length)} : {height:closeHeight}}
                  onClick={()=>{
                    if(item.index!==clickIndex){
                      setClickIndex(item.index)
                    }else{
                      setClickIndex('')
                    }
                  }}>
                    {item.subMenuList.length<1 ? 
                  
                    <>
                    <Link to='/'>{item.name}</Link>
                    </>

                    :

                    <>
                      {item.name}
                      <span className={styles.mobile_sub_menu_icon} style={item.index===clickIndex ? {color:'blue'} : {color:'black'}}>
                        {item.index===clickIndex ? <PiEye/> : <PiEyeSlash/>}
                      </span>
                      <ul className={styles.mobile_sub_menu_list}>
                        {
                          item.subMenuList.map((subItem)=>(
                            <li key={subItem.index} onClick={()=>{
                              // item.index==='ALL' ? navigate({ pathname: `/MaboutItem`, search: `?${createSearchParams({ category: 'ALL'})}`}): navigate({ pathname: `/MaboutItem`, search: `?${createSearchParams({ category: `${subItem.name}`})}`});
                              if(item.index===2){
                                navigate({ pathname: `${subItem.path}`, search: `?${createSearchParams({ category: `${subItem.name}`})}`})
                              }
                              else{
                                navigate({ pathname: `${subItem.path}`})
                              }
                              setClickIndex(item.index)
                              closeMenu()
                              
                            }}>
                              {subItem.name}
                            </li>
                          ))
                        }
                      </ul>
                    </>



                  }
                  </li>
                ))
              }

            </ul>
          </div>
          
        </nav>

        <div id={styles.mobile_grayLayer} ref={grayLayer} onClick={closeMenu}></div>
      </header>

    </div>
  )
}
