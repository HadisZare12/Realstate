import React,{Fragment,useState} from 'react'
import './accordion.css';
import Collapsible from 'react-collapsible';
import Person from '../../img/1.jpg';
import Questions from '../../Detail/Accordion'
import {FaAngleDoubleUp} from 'react-icons/fa'
import {FaAngleDoubleDown} from 'react-icons/fa'

const Accordion = () => {
    const [detail,setDetail]=useState(Questions)
  return (
    <Fragment>
            <section className="accordion">
                    <div className="accordion-row">
                        <div className="left">
                           <h3>Frequently Ask</h3> 
                           {
                            detail.map((detail)=>{
                                return(
                                    <div className="left-content">
                                        <Collapsible
                                         className='collapsible'
                                         trigger={[<FaAngleDoubleDown className='angle'/>,detail.question]}
                                         triggerWhenOpen={[<FaAngleDoubleUp className='angle'/>,detail.question]}>
                                           <p className="content-show">
                                            {detail.answer}
                                           </p>
                                        </Collapsible>
                                    </div>
                                )
                             })
                           }
                        </div>
                        <div className="right">
                            <img src={Person} alt="person" />
                        </div>
                    </div>     
            </section>
    </Fragment>
  )
}

export default Accordion