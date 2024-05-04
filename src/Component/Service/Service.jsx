import React,{Fragment,useState,useEffect} from 'react'
import './service.css'
import ServicesDetail from '../../Detail/ServicesDetail'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Service = () => {
    const [service,setService]= useState(ServicesDetail)
    useEffect(()=>{
        AOS.init({duration:2000,easing:"ease"})
    },[])
  return (
    <Fragment>
        <section data-aos="fade-up" className="service">
            <div className="heading">
                <span>Our Services</span>
                <h2>The Smartest way to buy a Home</h2>
            </div>
            <div className="service-row">
                {
                    service.map((service)=>{
                        return(
                            <div className="service-card">
                                 <div className="service-col">
                            <div className="content">
                                <div className="service-icon">
                                    <img src={service.Image} alt="icon" />
                                </div>
                                <div className="service-content">
                                    <h3>{service.heading}</h3>
                                    <p>{service.info}</p>
                                </div>
                            </div>
                           </div>
                            </div>
                           
                        )
                    })
                }
              
            </div>
        </section>
    </Fragment>
  )
}

export default Service