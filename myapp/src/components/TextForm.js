import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Button is CLicked");
        let new1 = text.toUpperCase();
        setText(new1);
    }
    const onChange= (event)=>{
        console.log('typed')
        setText(event.target.value);  //jo nyi value hum likh rhe h usse hum change kr de rhe h setText k andar
    } 
    const [text, setText] = useState("Enter Text Here");  //Text name ki ek state variable maine set ki h jiski default value "Enter text here" hai, aur jab bhi mujhe text ko update krna hoga toh m setText se krunga, React mai text = "sdkfkdjskjf" aise nhi change hota na hi update hota h, hume function ki help se update and change krna padta h, setText("skdsndkjs") <<<--- Like This.  
    // text = "new Text";  //Aise nhi
    // setText("This is the new Text");
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={onChange} id="mybox" rows="10"></textarea>
                <button type="button" className="btn btn-primary my-4" onClick={handleUpClick} data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<em>Upper</em> <u>case</u> <b>HTML</b>">Convert to Upper case</button>
            </div>
        </div>
    )
}
