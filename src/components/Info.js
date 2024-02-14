import React from 'react'

export default function Info(props) {

let myStyle={
  color: props.mode==='light'? 'black':'white' ,
  backgroundColor: props.mode==='light'? '#f3f2f2':'#717171',}

  return (
    <div className="container" >
    <h1 style={{color: props.mode==='light'? 'black':'white' ,}}>About us</h1>

      <div className="accordion accordion-flush " id="accordionFlushExample">
  
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" 
      style={myStyle}>
      <strong>Functionalities provided by our web app.</strong> 
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >
      <div className="accordion-body" style={myStyle}> This web app includes functionalities such as converting text to uppercase ,lowercase,
       copying text to the clipboard, and removing extra spaces. These are some essential tools that helps in everyday tasks like 
       writing documents, composing emails, or formatting text in various applications.   </div>

    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"
      style={myStyle}>
       <strong>Dark mode feature.</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Additionally, it offers a dark mode feature for improved readability in low-light environments.
       These features collectively enhance user experience by providing options to manipulate text and customize the app's appearance according to user preferences</div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"
      style={myStyle}>
      <strong> Creator:-</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Created by:- jagdeep singh <br/>
      Email id :- 510jagdeepsingh@gmail.com</div>
    </div>
  </div>
  
</div>
    </div>
  )
}
