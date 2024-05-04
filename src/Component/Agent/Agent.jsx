import React,{Fragment,useState} from 'react'
import './agent.css'
import AgentsDetail from '../../Detail/AgentsDetail'
import {ImFacebook2} from 'react-icons/im'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'


const Agent = () => {
    const [detail,setDetail]=useState(AgentsDetail);
  return (
    <Fragment>
        <div className="agents">
            <div className="agents-head">
                <span>Agents</span>
                <h2>Our Agents</h2>
            </div>
            <div className="agent-row">
                {
                    detail.map((detail)=>{
                        return(
                            <div className="agent-col">
                                <div className="agent-card">
                                    <div className="agent-thumb">
                                        <img src={detail.Image} alt="agent" />
                                        <div className="social-link">
                                            <ul>
                                                <li>
                                                    <a href='#'><ImFacebook2/></a>
                                                </li>
                                                <li>
                                                    <a href='#'><FaTwitterSquare/></a>
                                                </li>
                                                <li>
                                                    <a href='#'><FaInstagramSquare/></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="agent-info">
                                       <h3>{detail.name}</h3>
                                       <p>{detail.info}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </Fragment>
  )
}

export default Agent