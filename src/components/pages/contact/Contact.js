import React from "react";
import "./contact.scss";
import contact from "../images/contact.png";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import Coustomheader from  "../../coustom_header/Coustomheader.jsx"
import  Valdionmassage from"./Valdionmassage"
const Contact = () => {
  const { t } = useTranslation();

  const [customer_data, setcustomer_data] = useState(
    {
    
    name: "",
    email: "",
    phone: "",
    message: "" // Corrected key from "massage" to "message"
  }
  );
  const navgaion = useNavigate()
  const issubmiting = navgaion.state === "submiting"
  const inputHandelar = (e) => {
    const id = e.target.id
    const value = e.target.value
    setcustomer_data({...customer_data,[id]:value})
   
  }
 const handelFormsubmit = (e) => {
  e.preventDefault()

  try {
   
    emailjs.send("service_xcr9kal","template_8392w2u" , customer_data , "MvvmMcHoZ4pfShaNN");
    setcustomer_data(
      {
        name: "",
        email: "",
        phone: "",
        message: "" // Corrected key from "massage" to "message"
      }
    
    
    )
   
 
    toast.success("thanks for Your Message")
    return navgaion("/") 
   
  } catch (error) {
 
  return  toast.error(error)
  }

 }

  return (
    <React.Fragment>
      <BreadCrumb title="Contact" />
      <div className="contact">
<Coustomheader title ={t(  "contact-us")} />
        <div className="container">
          <div className="row">
              <div className="col-lg-6 col-12">
                <div className="image">
                  <img src={contact} alt="contact" />
                </div>
              </div>
            <div className="col-lg-6 col-12">
              <div className="content">
                <p> {t("contact.contact_title")} </p>
                <form onSubmit={handelFormsubmit}>
                  <div className="input_section">
                    <label className="lable" htmlFor="name">
                    {t("contact.la_name")}*
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={inputHandelar}
                      value={customer_data.name}
                      id="name"
                      placeholder={t("contact.la_name")}
                   
                    />
                  
                  </div>
                  <div className="input_section">
                    <label className="lable" htmlFor="phone">
                    {t("contact.la_phone")}*
                    </label>
                    <input
                      type="text"
                      name="phone"
                      onChange={inputHandelar}
                      value={customer_data.phone}
                      id="phone"
                      placeholder={t("contact.la_phone")}
                      required
                    />
                  </div>
                  <div className="input_section">
                    <label className="lable" htmlFor="email">
                    {t("contact.la_email")}*
                    </label>
                    <input
                      type="text"
                      name="email"
                      onChange={inputHandelar}
                      value={customer_data.email}
                      id="email"
                      placeholder={t("contact.la_email")}
                      required
                    />
                  </div>

                  <div className="input_section">
                    <label className="lable" htmlFor="massage">
                    {t("contact.la_massage")}
                    </label>
                    <textarea
                      className="massage"
                      name="message"
                      onChange={inputHandelar}
                      id="message"
                      required
                      value={customer_data.message}
                    
                    ></textarea>
                  </div>
                  <button type="submit">  {t("contact.submit")}</button>
                </form>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
