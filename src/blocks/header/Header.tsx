import s from "./Header.module.css"
import "./../../index"


export const Header = () => {

    return (

        <div className="bodyColorBlack sticky">
            <div className="container">
                <div className={s.wrapper}>
                    <h1>   <a href="#Home">Newshinsky </a> </h1>
                    <div className={s.nav}>
                        <ul>
                            <a href="#Home">  <li>Home</li></a>
                            <a href="#AboutMe"> <li>About</li></a>
                            <a href="#MySkills"> <li>Skills</li></a>
                            <a href="#Portfolio">  <li>Portfolio</li></a>
                            <a href="#Contact"> <li>Contact</li></a>
                        </ul>
                    </div>
                    <div className={s.socialContainer}>
                        <ul className={s.socialIcons}>
                            <li><a href="https://www.instagram.com/newshinsky/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="##"><i className="fa fa-vk"></i></a></li>
                            <li><a href="##"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/Newshinsky" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}