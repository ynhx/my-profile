import React, { useState } from 'react';
import './contactform.css';

const ContactForm = ({ onClose }: { onClose: () => void }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({ name, email, message });
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name}
                            onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Message:
                        <textarea value={message}
                            onChange={(e) => setMessage(e.target.value)} required />
                    </label>
                    <button type="submit">Send Message</button>
                </form>
                <button className="close-button" onClick={onClose}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ContactForm;