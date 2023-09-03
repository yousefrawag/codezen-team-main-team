import React, { useState } from "react";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import "./Our-Work.scss";
import ProjectsCard from "./projectsCard/ProjectsCard";
import { useGlobalContext } from "../../context/context";

const OurWork = () => {
  const [grid, setGrid] = useState(0);
  const {unique_Data , FilterateItems ,catgery_active , myData} = useGlobalContext()
  return (
    <React.Fragment>
    <BreadCrumb title="our work"/>
    <div className="our-work-wrapper">
      <div className="container">
        <div className="row">
      <div className="col-12">
              <div className="filter-sort-grid">
                <div className="default-part">
                  {
                    unique_Data.map((item) => {
                      return(
                        <button className= {catgery_active === item ? "btn-more active" :"btn-more" } onClick={() =>FilterateItems(item) } key={item} type="button">{item}</button>
                      )
                    })
                  }
                 
                
                </div>
                <div className="sort-img-ch">
                  <p>
                     <span className="project_lenght">
                       
                        ( {
                          myData.length 
                        })
                     </span>
                      projects complated
                  </p>
                  <div className="sort-img-part">
                 
                    <img
                      className={grid === 4 ? "active" : " "}
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      alt="sort"
                    />
                    <img
                      className={grid === 6 ? "active" : " "}
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      alt="sort"
                    />
                    <img
                      className={grid === 12 ? "active" : " "}
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      alt="sort"
                    />
                  </div>
                </div>
              </div>
              <div className="project-list">
                <div className="row">
                  <ProjectsCard grid={grid} />
                </div>
              </div>
            </div>
            </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default OurWork