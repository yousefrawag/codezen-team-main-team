import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SingleProduct.scss';
import BreadCrumb from '../breadCrumb/BreadCrumb';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import ReactStars from "react-rating-stars-component";
import {BiShow} from "react-icons/bi";
import { toast } from 'react-toastify';
import Coustomheader from  "../../coustom_header/Coustomheader.jsx"
import "../home/services/services.scss"
import { useState } from 'react';
import emailjs from 'emailjs-com';
const   SingleProduct = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const projects = t('Projects', { returnObjects: true });
  const project = projects.find((p) => p.id === id);
  const navbalinks = t("navbarlinks", {returnObjects: true})
  const navagition = useNavigate()
  const [message_Fit , setMessage_Fit]  = useState(
    {
      name:"",
      email:"",
      phone:"",
      message:""
    }
  )
  const handelInput = (e) => {
    const id = e.target.id
    const value = e.target.value
    setMessage_Fit({...message_Fit , [id]:value})
  }
  const onsubmit_Form = async (e) => {
    e.preventDefault()
    try {
      await emailjs.send("service_xcr9kal","template_8392w2u" , message_Fit , "MvvmMcHoZ4pfShaNN");
      setMessage_Fit(
        {
          name:"",
          email:"",
          phone:"",
          message:""
        }
      )
        toast.success("thanks for your comment")
       return navagition("/")
    } catch (error) {
      return toast.error("there is an erorr,pleas check your internet and try again")
      
    }
  }
  
  if(!project) {
    toast.error(" sorry, we cant find product you looking for, please try again")
    return navagition("/")
  }

  return (
    <>
    <BreadCrumb title={project.bage.title} />
    <div className='single-product-wrapper'>
      
      <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="fillter-card-product">
                <div className="title-card">
                  <h4>Where do you want to go ?</h4>
                </div>
                <div className="card-links-upper">
                {
          navbalinks.map((item)=> {
            return (
             <Link to={item.href} key={item.id}>
              {item.text}
              </Link>
            )
          })
        }
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-12">
              <div className="single-product-card">
                <div className="card-title">
                 
                  <Coustomheader title ={project.bage.title} />
                </div>
                <div className="card-image">
                  <img loading='lazy' src={project.bage.imgUrl} alt="design" />
                </div>
                <div className="card-description">
                      <p>
                        {project.bage.description}
                      </p>
                      <div className="realt_servies">
                     
        
                       <div className="row">
                           
                                   
                              <div className="col-6" >
                                      <h6 className='h6'>Responsive design</h6>
                              </div>
                              <div className="col-6" >
                                    <h6 className='h6'>Great user interface</h6>
                            </div>
                              <div className="col-6" >
                                    <h6 className='h6'> Domaine Hosting</h6>
                            </div>
                            <div className="col-6" >
                                    <h6 className='h6'>Technical support</h6>
                            </div>
                           
                       </div>
                      </div>
                      <div style={{display: "flex"}}>
                      <span
                        style={{ borderLeft: "1px solid #ccc", padding: "0 10px" }}
                      >
                          <ReactStars
                            count={5}
                            size={13}
                            value={5}
                            edit={false}
                            activeColor="#ffd700"
                          />
                      </span>
                      </div>
                </div>
              </div>
              <div className="back-to-product">
                <Link to="/our-work">
                  {" "}
                  <HiOutlineArrowNarrowLeft /> go to our work
                </Link>
              </div>
              <div className="single-product-comment">
                <h4>Does it fit your idea?</h4>
                <form onSubmit={onsubmit_Form} className="single-form">
                  <div className='inpu-parent' style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                  <div className="form-group">
                    <input
                      placeholder="name*"
                      type="name"
                      name="name"
                      className="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      required
                      value={message_Fit.name}
                      onChange={handelInput}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      placeholder="email*"
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      required
                      onChange={handelInput}
                      value={message_Fit.email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="phone*"
                      type="phone"
                      name="phone"
                      className="form-control"
                      id="phone"
                      aria-describedby="emailHelp"
                      required
                      onChange={handelInput}
                      value={message_Fit.phone}
                    />
                  </div>
                  </div>
                  <div className="form-group" style={{ width: "100%" }}>
                    <textarea  onChange={handelInput} placeholder="comment*" required name='message' id='message' value={message_Fit.message}></textarea>
                  </div>

                  <div className="single-product-buttons">
                    <button type='submit' className="btn">send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default SingleProduct