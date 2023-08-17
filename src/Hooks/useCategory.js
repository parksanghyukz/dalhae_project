import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


export default function useCategory(){

  const {search} = useLocation()

  const [test, setTest] = useState()

  // useEffect를 사용해서 AboutItem에서 받은 item.category값 확인해보기
  useEffect(() => {  
  setTest(decodeURIComponent(new URLSearchParams(search).get('category')))
  }, [])


  return(
    test
    )
}


