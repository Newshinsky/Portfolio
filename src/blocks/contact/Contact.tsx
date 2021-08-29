import s from "./Contact.module.css"
import "../../index.css"
import { ContactForm } from "./ContactForm"
import photo from "./../../img/pexels-enfantnocta-3785186.jpg"



export const Contact = () => {
    return (

        <>
            <div className="bodyColorBlack">
                <div id="Contact" className="container">
                    <div className={s.wrapper}>
                        <div className={s.leftWrapper}>
                            <h2> Hire Me.</h2>
                            <p> I am available for freelance work.
                                Connect with me via phone: <b>01923 088574 </b>  or
                                email: <b> admin@example.com </b>
                            </p>
                            <ContactForm />
                        </div>
                        <div className={s.rightWrapper}>
                            <img src={photo} alt="PhotoMe" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}