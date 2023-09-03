import React ,  { lazy , Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icons.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/loading/Loading'; 
import { AppProvider } from './components/context/context.jsx';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en', 'ar'],
    fallbackLng: "en",
    // order and from where user language should be detected
    detection: {  order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
    caches: ['cookie']
},
backend: {
  loadPath: '/assets/locales/{{lng}}/translation.json',
},
  });


  const root = ReactDOM.createRoot(document.getElementById('root'));
  const Applazy = lazy (() => import ('./App.js'))
root.render(
  <React.StrictMode>
  <AppProvider>
        <Suspense fallback = {Loading}><Applazy /></Suspense>
        <ToastContainer style={{zIndex : "9999999999999"}}  position="top-center" />
  </AppProvider>
    
  </React.StrictMode>
)
