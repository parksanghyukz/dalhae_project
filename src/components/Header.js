import React, { useState } from 'react'
import styles from './css/header.module.css'
import { Link, createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { login, logout } from '../api/firebase'



export default function Header() {

  
const navigate = useNavigate()


  const header = [
    // {index:0,path:[{pathname:'', search:''}], name:''},
      
      
      
    //   '/AboutUs',name:'업체소개', },
    {index:0,path:`/AboutUs`,name: '업체소개'},
    {index:1,path:`/AboutItem`,name: '제품소개'},
    {index:2,path:'/Online', name:'온라인문의'},
    {index:3,path:'/Construction', name:'시공소개'},
    {index:4,path:'/CustomerCenter', name:'고객센터'},
  ]

  const [selectedLi, setSelectedLi] = useState(null);

  const gotoHome=()=>{
    setSelectedLi(null)
  }



  // AuthContext에서 유저라고 공유한 값 받아오기!
  const {user} = useAuthContext()

  console.log('user', user)


  return (
    <header>
      <h1 className={styles.logo} onClick={gotoHome}>
        <Link to='/'>
          {/* <img src='../images/dalhaelogo.jpg' alt='이미지로고'/> */}
          <img src='../images/dalhaelogo.png' alt='이미지로고'/>
        </Link>
      </h1>
      <nav id={styles.mainmenu}>
        <h2 className='hidden'>상단메뉴</h2>
        <ul id={styles.mainmenu_list}>
          {
            header.map((item)=>(
              <li key={item.index} className={`${item.index===selectedLi && styles.selected}`} 
              // <li key={item.index} className={`${item.index===selectedLi ? styles.selected : setSelectedLi(null)}`} 
              onClick={()=>{
                // li를 클릭했을때 item.index가 1이면 앞의 구문을 실행하라  그게아니면 그냥 item의 path에 넣어줘라
                // <Link> 대신에 navigate를 사용했다
                item.index===1 ? navigate({ pathname: `/AboutItem`, search: `?${createSearchParams({ category: 'ALL' })}`}) : navigate(item.path);
                setSelectedLi(item.index)
              }}>
                {item.name}
              </li>
              ))
          }
          {/* <li className={styles.selected}><Link to='/AboutUs'>업체소개</Link></li>
          <li><Link to={{ pathname: `/AboutItem`, search: `?${createSearchParams({ category: 'ALL' })}`}}>제품소개</Link></li>
          <li><Link to='/Online'>온라인문의</Link></li>
          <li><Link to='/Construction'>시공소개</Link></li>
          <li><Link to='/CustomerCenter'>고객센터</Link></li> */}
        </ul>
      </nav>
      {/* <button id={styles.login_btn}>Login</button> */}
      
      {
        // user!==null ? 
        user ?
        <>
          {/* <p style={{width:'30px', height:'30px', borderRadius:'15px',overflow:'hidden', position:'absolute', right:'250px', top:'35px'}}> */}
          <p id={styles.login_icon}>  
            <img src={user.photoURL} alt='프로필이미지'/>
          </p>  
          {/* <p style={{position:'absolute',top:'40px', right:'50px', fontSize:'20px',fontWeight:'bold'}}>{user.displayName}님 환영합니다</p> */}
          <p id={styles.login_text}>
            {user.displayName}님 환영합니다.
          </p>
          <button id={styles.login_btn} onClick={logout}>Logout</button>
        </>  
         : 
        <button id={styles.login_btn} onClick={login}>
          Login
        </button>
        // 유저의 값이 있다면 Logout , 없다면 Login으로 변경!  그리고 아이콘을 만들어준다!
        // Logout인 상태에서 클릭한다면! firebase.js에 있는 logout함수를 실행시킴
        // Login인 상태에서 클릭한다면! firebase.js에 있는 login함수를 실행시킴
      }

    </header>
  )
}
