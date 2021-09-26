import { useState } from "react";
import "./contact.scss"
import emailjs from 'emailjs-com'

export default function Contact() {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_h3mz7ut',
            "template_n9hiw2e",
            e.target,
            'user_mQRLS1rbOBYsOeM188t0A'
            ).then(res=>{
                console.log(res);
            }).catch(err=> console.log(err));
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
                    <input required type="email" name="email" placeholder="email" />
                    <input type="text" name="from_name" placeholder="name" />
                    <textarea required name="message" cols="30" rows="10" placeholder="Message"></textarea>
                    <button type="submit">send</button>
                    {message && <span>Message was sent</span>}
                </form>
            </div>
        </div>
    )
}