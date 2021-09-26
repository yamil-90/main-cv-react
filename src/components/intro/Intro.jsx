import "./intro.scss"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { init } from "ityped";
import { useEffect, useRef } from "react";


export default function Intro(){

    const textRef= useRef()
    useEffect(()=>{
        init(textRef.current,{
            showCursor: true,
            strings: ["Web Developer", "Student", "Pizza maker", "Solidity enthusiast", "Dog person"]
        });
    },[]);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile.jpg" alt="profile" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Yamil Español</h2>
                    <h3>I'm a <span ref={textRef}></span></h3>
                    <a href="#portfolio"><KeyboardArrowDownIcon className="KeyboardArrowDownIcon" style={{ fontSize: 90 }} /></a>

                </div>
            </div>
        </div>
    )
}