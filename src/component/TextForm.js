import React, {useState}from "react"

export default function TextForm(props) {
     const handleUpClick=()=>{
    //     console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!","success")
    }
    const handleLowClick=()=>{
        //     console.log("Uppercase was clicked" + text);
            let newText = text.toLowerCase();
            setText(newText)
        props.showAlert("converted to lowercase!","Success")

        }
        const handleClearClick=()=>{
            //     console.log("Uppercase was clicked" + text);
                let newText = '';
                setText(newText)
        props.showAlert("cleartext!","success")

            }
    const handleOnChange=(event)=>{
        
        setText(event.target.value);
       
    }
    const[text,setText]=useState('');
    // setText("new text");
  return (
    <>
 <div className="container"style={{ color: props.mode === "dark" ? "white" : "black"
            }}>
    <h1>{props.heading}" </h1>
    <div className="mb-3" style={{color: props.mode === "dark" ? "white" : "black"}}>
    <textarea  className="form-control"  value= {text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button> 
  <button className="btn btn-primary my-3 " onClick={handleLowClick}>Convert to Lowercase</button> 
  <button className="btn btn-primary mx-3 " onClick={handleClearClick}>Clear Text</button> 
 </div>
 

 <div className="container my-2" style={{color: props.mode === "dark" ? "white" : "black"}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length}words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox to previw it here"}</p>
    </div>
</>
    )
}