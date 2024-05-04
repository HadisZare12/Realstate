import React,{Fragment,useState} from 'react'
import PropertyDetail from '../../Detail/PropertyDetail'
import './property.css'


const Property = () => {
   const[detail, setDetail] = useState(PropertyDetail)
  return (
    <Fragment>
        <section className="property">
            <div className="center">
                <h3>Popular Properties</h3>
            </div>
            <div className="row">
                {
                    detail.map((detail)=>{
                        return(
                            <div className="column">
                            <div className="single-prop">
                                <div className="card">
                                    <div className="prop-thumb">
                                        <div className="prop-tag">For Sale</div>
                                        <img src={detail.Image} alt="img" />
                                    </div>
                                    <div className="prop-content">
                                        <h3>{detail.heading}</h3>
                                        <div className="mark">
                                            <span>{detail.span}</span>
                                        </div>
                                        <span className="amount">{detail.amount}</span>
                                    </div>
        
                                    <div className="prop-footer">
                                        <ul>
                                            <li><span>{detail.size}</span></li>
                                            <li>
                                                <img src={detail.bedImage} alt="bed" />
                                                <span>{detail.bed}</span>
                                            </li>
                                            <li>
                                               <img src={detail.bathImage} alt="bath" />
                                                <span>{detail.bath}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
              
            </div>
        </section>
        <div className="more-prop">
            <a href="#" className="prop-btn">More Properties</a>
        </div>
    </Fragment>
  )
}

export default Property