
import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../api/firebase"; // firebase.js 파일 연동 

const AuthContext = createContext();

export function AuthContextProvider({ children }) { 
  // # 로그인 로그아웃은 모든페이지에서 작동을해야한다 새로고침을 해도 로그인 로그아웃이 유지가 돼야하기때문에 context로 만듦

  const [user, setUser] = useState(); // 사용자 로그인 상태관리 

  useEffect(() => { // firebase.js 파일내에서 로그인/로그아웃 상태 관리 함수 실행 
    onUserStateChange((user) => setUser(user)); 
  }, []);
  
  //console.log(user)

  return (
    <AuthContext.Provider  // 로그인/로그아웃 환경을 제공하는 Provider 설정 
      value={{ user, uid: user && user.uid, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
