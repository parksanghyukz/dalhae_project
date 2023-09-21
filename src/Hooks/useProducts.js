// 1. 커스텀훅을 이름지을때 앞에 use를 붙이면 좋다
import React, { useCallback } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function useProducts() {
  
  // 2. data폴더안에 모든 products.json파일 불러오는 것을 Hook으로 따로 만든다!
  // import 잘 되었는지 확인할 것
  const [allProducts, setAllProducts] = useState([])

  useEffect(()=>{
    
    axios.get('/data/products.json').then((res)=>{
      setAllProducts(res.data) 
      // res.data를 allProducts에 저장해준다!
    }) 
  }, [])
  
  

 
  return (
    // 3. Hook은 함수이기때문에 값만 리턴해주면 된다!
    // 기존 컴포넌트는 HTML을 리턴해주지만 훅은 결과값만 리턴해주기
    [allProducts]
    )
}
