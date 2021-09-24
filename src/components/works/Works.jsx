import "./works.scss"
import { useState } from "react";
import ArrowBackIosNewIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Works(){
    const [currentSlide, setCurrentSlide]= useState(0);
    const data = [
        {
            id:1,
            icon:"./assets/code-icon.png",
            title:"Coding",
            desc:"Coding description",
            img:"https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
        },
        {
            id:2,
            icon:"./assets/code-mobile-icon.png",
            title:"Mobile programming",
            desc:"mobile description",
            img:"https://codematters.online/wp-content/uploads/2019/01/Mobile-app-development-image.jpg"
        },
        {
            id:3,
            icon:"./assets/web-icon.png",
            title:"Web development",
            desc:"web development description",
            img:"https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg"
        },
    ]
    const handleClick = (way)=>{
        console.log('clicked')
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2):
        setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=>(
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h3>{d.title}</h3>
                                <p>{d.desc}</p>
                                <span>projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <ArrowBackIosNewIcon  className="arrow left" onClick={()=>handleClick("left")}/>
            <ArrowForwardIosIcon className="arrow right" onClick={()=>handleClick("right")}/>
        </div>
    )
}