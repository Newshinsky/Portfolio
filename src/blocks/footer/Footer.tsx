import s from "./Footer.module.css"
import "../../index.css"




export const Footer = () => {
    return (

        
            <div className="bodyColorBlack">
                <div className="container">
                    <div className={s.wrapper}>
                        <div className={s.footer}>
                            <div id={s.button}></div>
                            <div id={s.container}>
                                <div id={s.cont}>
                                    <div className={s.footer_center}>
                                        <ul className={s.socialIcons}>
                                            <li><a href="https://www.instagram.com/newshinsky/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="##"><i className="fa fa-vk"></i></a></li>
                                            <li><a href="##"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="https://github.com/Newshinsky" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                                        </ul>
                                        <h1>Alexandr Novoshinsky</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}