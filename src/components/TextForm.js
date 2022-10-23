import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked "+text);  
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    

    const handleLoClick=()=>{
        //console.log("Uppercase was clicked "+text);  
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClearClick=()=>{
        //console.log("Uppercase was clicked "+text); 
        let newText="";
        setText(newText)
        props.showAlert("Text is cleared!", "success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speek function Initiated!", "success")
      }
    const handleOnChange=(event)=>{
        //console.log("On change"); 
        setText(event.target.value); 
    }
    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coppied!", "success")
    }

    const [text, setText]= useState("Enter text here2");
    //text="new text"; //wrong way to change the state
    //setText("new text");//right way to change the state
    return (
        <>
    <div className="container" style={{color:props.mode==='white'?'black':'black'}}>
        <h1>{props.heading}</h1>
        <div div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary my-2" style={{color:props.mode==='dark'?'white':'black'}} onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" style={{color:props.mode==='dark'?'white':'black'}} onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" style={{color:props.mode==='dark'?'white':'black'}} onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary my-2" style={{color:props.mode==='dark'?'white':'black'}} onClick={handleCopy} >Copy text</button>
    <button className="btn btn-warning mx-2 " type="submit" onClick={speak}>Speak</button>
    
    </div>
    <div className="container my-3" bg-black style={{color: props.mode ==='dark'?'white':'black'}}>
            <h2 >Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes required to read text.</p>
            <h2>Preview</h2>
            <p>{text}</p>
            </div>
    </>
  ) 
}

