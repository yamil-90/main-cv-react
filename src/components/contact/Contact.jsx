import { useState } from "react";
import "./contact.scss"

export default function Contact(){
    const [message, setMessage]= useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://st4.depositphotos.com/19211036/22296/i/450/depositphotos_222961766-stock-photo-woman-hand-opening-envelope-wooden.jpg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="email" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button type="submit">send</button>
                    {message && <span>Message was sent</span>}
                </form>
            </div>
        </div>
    )
}