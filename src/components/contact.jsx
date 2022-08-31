import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact(){
    const form = useRef();

    function handleSubmit(e){
        e.preventDefault();

        emailjs.sendForm('service_qufbpuo', 'template_4y8qqhm', form.current, 'BYtwJwTOulJN4yq_L')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            console.log("message sent");
        }, (error) => {
          console.log(error.text);
        });
    }

    return(
        <div className="email-form-container">
            <form ref={form} onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
export default Contact;