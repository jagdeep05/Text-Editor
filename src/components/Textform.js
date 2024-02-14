import React , { useState} from 'react'

export default function Textform(props) {

  const[text , setText]= useState("");

 
  const handleUpClick = ()=>{

        let newText = text.toUpperCase();
        setText(newText)
     props.showAlert("Your text have been converted to Upper case","success")
    }
    
    const handleLoClick = ()=>{

      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Your text have been converted  to Lower case","success")
  }
  
  const handleclearClick = ()=>{

    setText("")

    props.showAlert("Your text have been cleared ","success")

  }

  const copy = ()=> {
    
    // Get the text field
    var copyText = document.getElementById("myBox");
   // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, text.length); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    document.getSelection().removeAllRanges();

    // Alert the copied text
  //  alert("Copied the text: " + copyText.value);

 props.showAlert("your text have been copied","success")

  }
  
   
  const removeSpaces=()=>{
    let newText= text.split(/[ ]+/);
  setText(newText.join(" ")) 
  props.showAlert("Extra spaces have been removed","success")
  }
  
 
  const handleonChange = (event)=>{
   
    setText(event.target.value)
    }


    return (
   <>
   <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>

    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'#a4a4a4':'white',
      color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={handleUpClick}>convert to Uppercase</button>
    <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={handleLoClick}>convert to Lowercase</button>
    <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={copy }>Copy to clipboard</button>
    <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={removeSpaces}>Remove Exta spaces</button>
    <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1 my-1`} onClick={handleclearClick}>Clear</button>

    </div>
    
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>

      <h2>Your text summary</h2>

      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     
      <p>{0.008* text.split("").length} Minutes read</p>

    </div>

    </>
  
  )

}

