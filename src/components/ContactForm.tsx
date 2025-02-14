import "./contactform.css";
import { useForm, ValidationError } from "@formspree/react";
import tickIcon from "../assets/tick_icon.png";
import redXIcon from "../assets/red_x_icon.png";

const ContactForm = ({ onClose }: { onClose: () => void }) => {
    const [state, handleSubmit] = useForm("xqaedrze");

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Contact Me</h2>

                {state.succeeded ? (
                    <div className="success-message">
                        <p className="message-sent">Message sent!</p>
                        <img src={tickIcon} alt="Tick icon" className="tick-icon"/>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            Email:
                            <input id="email" type="email" name="email" required />
                        </label>
                        <ValidationError prefix="Email" field="email" errors={state.errors} />

                        <label htmlFor="message">
                            Message:
                            <textarea id="message" name="message" required />
                        </label>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                        <button type="submit" disabled={state.submitting}>
                            Send Message
                        </button>
                    </form>
                )}

                {state.errors && (
                    <div className="fail-message">
                        <p>Something went wrong...</p>
                        <img src={redXIcon} alt="Red X icon" className="x-icon" />
                        
                    </div>
                )}

                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ContactForm;
