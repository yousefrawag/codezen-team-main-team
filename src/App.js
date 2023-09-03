import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter , RouterProvider} from "react-router-dom";
import Layout from './components/layout/Layout';
import Erorrpage from "./components/pages/erornotfound/Erorrpage";
import Loading from "./components/loading/Loading";

const App = () => {
  const Homelazy = lazy (() => import ('./components/pages/home/Home'))
  const Aboutlazy = lazy (() => import ('./components/pages/about/About'))
  const Servieslazy = lazy (() => import ('./components/pages/servies/Servies'))
  const Contactlazy = lazy (() => import ('./components/pages/contact/Contact'))
  const Singelproductlazy = lazy (() => import ("./components/pages/singleProduct/SingleProduct"))
  const Ourworklazy = lazy (() => import ('./components/pages/ourWork/Our-Work'))


/*   const handleCopy = (event) => {
    event.preventDefault()
    alert('Copying content from this site is not allowed.')
  }

  useEffect(() => {
    window.addEventListener('copy' ,handleCopy)
    return () =>{
      window.removeEventListener('copy', handleCopy)
    }
  
  },[]) */
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    errorElement:<Erorrpage />,
    children:[
      {
       element:<Suspense fallback = { <Loading />}> <Homelazy /></Suspense>,
        index:true,
        
      },
      {
        path:"about",
        element:<Suspense fallback = { <Loading />}> <Aboutlazy/></Suspense>
        
      },
      {
        path:"servies",
        element:<Suspense fallback = { <Loading />}> <Servieslazy /></Suspense>
        
      },
      {
        path:"our-work",
        element:<Suspense fallback = { <Loading />}> <Ourworklazy /></Suspense>
        
      },
      {
        path:"contact",
        element:<Suspense fallback = { <Loading />}> <Contactlazy /></Suspense>
        
      },
      {
        path:"SingleProduct/:id",
        element:<Suspense fallback = { <Loading />}> <Singelproductlazy /></Suspense>
        
      },
    ]

  },
])
  return (
    <React.Fragment>
    <RouterProvider  router={router}/>
    </React.Fragment>
  );
}

export default App;
