import React from 'react';
import './Contact.css';
import Form from '../../components/Form/Form'

function Contact() {
        return (
            <>
            <div className="contact-container">
                <span className="contact-title">
                    <span className="contact-flicker">L</span>
                    <span>e</span>
                    <span className="contact-flicker">t</span>
                    <span>'</span>
                    <span className="contact-flicker">s</span>
                        <span className="contact-space">
                            <span>C</span>
                            <span className="contact-flicker">o</span>
                            <span>n</span>
                            <span className="contact-flicker">n</span>
                            <span>e</span>
                            <span className="contact-flicker">c</span>
                            <span>t</span>
                        </span>
                </span>
            </div>
            <Form></Form>
            </>
    );
}
export default Contact;