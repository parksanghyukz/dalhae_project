import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from './pages/AboutUs'
import AboutItem from './pages/AboutItem'
import Online from './pages/Online'
import Construction from './pages/Construction'
import CustomerCenter from './pages/CustomerCenter'
import Main from './pages/Main'
import Root from './pages/Root'
import NotFound from './pages/NotFound.js'
import './App.css';
import AboutItemDetail from "./pages/AboutItemDetail";
import Mroot from "./components/mobile/Mroot";
import MaboutItem from "./pages/mobile/MaboutItem";
import MaboutItemDetail from "./pages/mobile/MaboutItemDetail";
import Mmain from "./pages/mobile/Mmain";
import MAboutUs from "./pages/mobile/MAboutUs";
import Mconstruction from "./pages/mobile/Mconstruction";
import { AuthContextProvider } from "./context/AuthContext";
import Monline from "./pages/mobile/Monline";
import MCustomerCenter from "./pages/mobile/MCustomerCenter";
import MnotFound from "./pages/mobile/Mnotfound";
import { isMobile } from "react-device-detect";



export default function App() {

  let router = null;

  

  if(isMobile){
    router=createBrowserRouter([
      {
        path:'/',
        element:<Mroot/>,
        errorElement:<MnotFound/>,
        children:[
          {index:true, element:<Mmain/>},
          {path:'/MAboutUs',element:<MAboutUs/>},
          {path:'/MaboutItem', element:<MaboutItem/>},
          {path:'/MaboutItem/:productId', element:<MaboutItemDetail/>},
          {path:'/Monline', element:<Monline/>},
          {path:'/Mconstruction', element:<Mconstruction/>},
          {path:'/MCustomerCenter',element:<MCustomerCenter/>}
        ]
      }
    ])
  }else{
  router=createBrowserRouter([
      {
        path:'/',
        element:<Root/>,
        errorElement:<NotFound/>,
        children:[
          {index:true, element:<Main/>},
          {path:'/AboutUs',element:<AboutUs/>},
          {path:'/AboutItem',element:<AboutItem/>},
          {path:'/AboutItem/:productId',element:<AboutItemDetail/>},
          // 제품소개 안에 있는페이지 만드는 법!  경로를 /:productId 로 설정하고 컴포넌트를 하나만들어준다
          {path:'/Online',element:<Online/>},
          {path:'/Construction',element:<Construction/>},
          {path:'/CustomerCenter',element:<CustomerCenter/>},
      
        ]
      },
      // {
      //   path:'/AboutUs',
      //   element:<AboutUs/>
      // },
      // {
      //   path:'/SalesInfo',
      //   element:<SalesInfo/>
      // },
      // {
      //   path:'/Online',
      //   element:<Online/>
      // },
      // {
      //   path:'/Community',
      //   element:<Community/>
      // },
      // {
      //   path:'/CustomerCenter',
      //   element:<CustomerCenter/>
      // },
    ])
  }




  return (
    

    <AuthContextProvider>    
      <RouterProvider router={router}/>
    </AuthContextProvider>



  );
}
