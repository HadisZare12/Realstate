
import React,{Fragment,useState} from 'react'
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';
import './counter.css';

const Counter = ({className, ...rest}) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <Fragment>
      <section className="counter">
        <div className="counter-container">
            <div className="counter-row">
                <div className="counter-col">
                    <strong>
                        <CountUp {...rest} start={viewPortEntered? null:0}
                        end={340}>
                            {({countUpRef})=>{
                                return(
                                   <ReactVisibilitySensor
                                     active={!viewPortEntered}
                                     onChange={isVisible =>{
                                        if(isVisible){
                                            setViewPortEntered(true);
                                        }
                                     }}
                                     delayedCall
                                   >
                                    <span className='counter-number' ref={countUpRef}></span>
                                   </ReactVisibilitySensor> 
                                )
                            }}

                        </CountUp>
                    </strong>
                    <span>Area<br/>population</span>

                </div>
                <div className="counter-col">
                    <strong>
                        <CountUp {...rest} start={viewPortEntered? null:0}
                        end={240}>
                            {({countUpRef})=>{
                                return(
                                   <ReactVisibilitySensor
                                     active={!viewPortEntered}
                                     onChange={isVisible =>{
                                        if(isVisible){
                                            setViewPortEntered(true);
                                        }
                                     }}
                                     delayedCall
                                   >
                                    <span className='counter-number' ref={countUpRef}></span>
                                   </ReactVisibilitySensor> 
                                )
                            }}

                        </CountUp>
                    </strong>
                    <span>Total<br/>Properties</span>
                </div>
                <div className="counter-col">
                    <strong>
                        <CountUp {...rest} start={viewPortEntered? null:0}
                        end={1024}>
                            {({countUpRef})=>{
                                return(
                                   <ReactVisibilitySensor
                                     active={!viewPortEntered}
                                     onChange={isVisible =>{
                                        if(isVisible){
                                            setViewPortEntered(true);
                                        }
                                     }}
                                     delayedCall
                                   >
                                    <span className='counter-number' ref={countUpRef}></span>
                                   </ReactVisibilitySensor> 
                                )
                            }}

                        </CountUp>
                    </strong>
                    <span>Average<br/>House</span>
                </div>
                <div className="counter-col">
                    <strong>
                        <CountUp {...rest} start={viewPortEntered? null:0}
                        end={30}>
                            {({countUpRef})=>{
                                return(
                                   <ReactVisibilitySensor
                                     active={!viewPortEntered}
                                     onChange={isVisible =>{
                                        if(isVisible){
                                            setViewPortEntered(true);
                                        }
                                     }}
                                     delayedCall
                                   >
                                    <span className='counter-number' ref={countUpRef}></span>
                                   </ReactVisibilitySensor> 
                                )
                            }}

                        </CountUp>
                    </strong>
                    <span>Total<br/>Branches</span>
                </div>
            </div>

        </div>

      </section>
    </Fragment>
  )
}

export default Counter