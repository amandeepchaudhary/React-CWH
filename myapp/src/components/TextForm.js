import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper Case Button is CLicked");
        let new1 = text.toUpperCase();
        setText(new1);
    }
    const handleLowClick = () => {
        console.log("Lower Case Button is CLicked");
        let new2 = text.toLowerCase();
        setText(new2);
    }
    //Problem = when we end a sentence with "." then the next sentence will start with Uppercase
    // const upper2 = () => {
    //     // let new3 = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    //     let box = Array;
    //     // setText(box[0][0]);
    //     // box = text.split(".");
    //     box = text.split(".");
    //     // console.log(box[0][0]);  //E
    //     // var new7 = Array;
    //     var new4 =Array;
    //     for (var i=0;box.length>=0;i++) {
    //         // console.log(box.length);
    //         // const[new4,newadd] =useState([]);
    //         new4[i] = box[i][0].toUpperCase() + box[i].slice(1).toLowerCase();
    //         // console.log(new4);
    //         // let st = new4.toString();
    //         // let up = new4.toUpperCase();
    //         // let new5 = box[i].slice(1).toLowerCase();
    //         // console.log(new5)
    //         // let st1 = new5.toString();
    //         // let lo = new5.toLowerCase();
    //         // let new6 = new4 + new5;
    //         // var new4 = box[i][0].toUpperCase() + box[i].slice(1).toLowerCase();
    //         // console.log(new6);
    //         // new7[i] = new4;
    //         // console.log(new7);
    //         // console.log(new7.length);
    //         // var new8 = new7.toString();
    //         // for(let j=0;box[i]>0;j++){
    //     }
    //     const n = new4.map((sen)=>
    //         <p>n</p>
    //         );
    //         // u = box[0][0].toUpperCase() +;
    //     // for(let im=0;new4.length>0;im++){

    //     //     console.log(new4[im]);
    //     // }
    //     console.log(n);
    //     setText(n);
    //     // setText(new8);

    //         // let new4 = box.toString();
    // }
    //     // box[1][1].toLowerCase()

    //     // let new3 = box[0][0].toUpperCase();
    //     // setText(new3)
    const handleMediumClick = () => {
        console.log("Sentence Button is Clicked");
        let new3 = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        // upper2();
        setText(new3);
    }
    const handleClear = () => {
        let new4 = "";
        setText(new4);
    }
    const onChange = (event) => {
        console.log('typed')
        setText(event.target.value);  //jo nyi value hum likh rhe h usse hum change kr de rhe h setText k andar
    }
    const [text, setText] = useState("");  //Text name ki ek state variable maine set ki h jiski default value "Enter text here" hai, aur jab bhi mujhe text ko update krna hoga toh m setText se krunga, React mai text = "sdkfkdjskjf" aise nhi change hota na hi update hota h, hume function ki help se update and change krna padta h, setText("skdsndkjs") <<<--- Like This.  
    // text = "new Text";  //Aise nhi
    // setText("This is the new Text");
    const [darkMode, setDarkMode] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [changeN, setChangeN] = useState("Dark Mode")

    const darkM = () => {
        if (darkMode.color === 'black') {
            setDarkMode({
                color: 'white',
                backgroundColor: 'black'
            })
            setChangeN("Light Mode")
        }
        else {
            setDarkMode({
                color: 'black',
                backgroundColor: 'white'
            })
            setChangeN("Dark Mode")
        }
    }

    return (
        <>
            <div style={darkMode}>
                <div className="container">
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={onChange} id="mybox" rows="10"></textarea>
                        <button type="button" className="btn btn-primary my-4" onClick={handleUpClick} data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<em>Upper</em> <u>case</u> <b>HTML</b>">Convert to Upper case</button>
                        <button className="btn btn-primary my-4 mx-1" onClick={handleMediumClick}>Convert to Sentence</button>
                        <button className="btn btn-primary my-4 mx-1" onClick={handleLowClick}>Convert to Lower case</button>
                        <button className="btn btn-primary my-4 mx-1" onClick={handleClear}>Clear Text</button>
                        <button className="btn btn-primary my-4 mx-1" onClick={darkM}>{changeN}</button>
                    </div>
                </div>
                <div className="container my-3">
                    <h2>Summary</h2>
                    <p>
                        {text.length} Characters, {text.split(" ").length} words and {text.split(".").length - 1} Sentences <br />
                        {0.008 * text.split(" ").length} Minutes Read
                    </p>
                    <h2>Preview</h2>
                    <code>{text}</code><br />
                    {text}
                    {/* text.split(" ") will give us an array with different words seprated with a " " */}
                    <p> <br /></p>
                </div>
            </div>
        </>
    )
}
