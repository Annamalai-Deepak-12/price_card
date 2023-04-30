import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


function Card(props){
  return(
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.card.planName}</h5>
            <h6 className="card-price text-center">${props.card.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              {props.card.features.map((item)=>{
                return item.isEnabled ? <li><strong><span class="fa-li"><i><FontAwesomeIcon icon={faCheck} /></i></span>{item.yes}</strong></li> : <li class="text-muted"><span class="fa-li"><i><FontAwesomeIcon icon={faXmark} /></i></span>{item.no}</li>
              })}
              {/* {props.card.features.map((list)=>{
                return<li className="text-muted"><span className="fa-li"><i className="fas fa-times">{list.no}</i></span>
                </li>
              })}
               */}
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>

  )
}

{/* <p><strong><FontAwesomeIcon icon={faCheck} />{item.yes}`</strong></p> : <li className="muted-text">{item.no}</li> */}

export default Card;