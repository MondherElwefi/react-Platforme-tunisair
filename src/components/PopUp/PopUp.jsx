import React from 'react'
import "./PopUp.css"
function PopUp(props) {
    const timer = setTimeout(() => {
        props.setShowDone(false);
      }, 3000);
  return (
    <div className="success-msg">
          <i className="fa fa-check" />
           Vérifiez votre E-mail.
    </div>
  )
}

export default PopUp
