import React,{Fragment,useState,useEffect} from 'react'
import './work.css'
import WorkDetail from '../../Detail/WorkDetail'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Work = () => {
    const[work,setWork]=useState(WorkDetail);
    useEffect(()=>{
        AOS.init({duration:2600,easing:"ease"})
    },[])
  return (
   <Fragment>
      <section className="work">
         <div className="overlay">

         </div>
         <div data-aos="fade-up" className="work-container">
            <div className="work-head">
                <span>Work Flow</span>
                <h2>How It Work</h2>
            </div>
            <div className="col1">
                <div className="work-row">
                    {
                        work.map((work)=>{
                            return(
                                <div className="work-card">
                                <div className="work-col">
                                    <div className="content">
                                        <div className="number">
                                            <span>{work.number}</span>
                                        </div>
                                        <div className="work-content">
                                            <h3>{work.heading}</h3>
                                            <p>{work.info}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                  


                </div>

            </div>
         </div>
      </section>
   </Fragment>
  )
}

export default Work