import s from "./AboutMe.module.css"
import "../../index.css"
import photo from './../../img/pexels-almighty-shilref-5471507.jpg'
import { useState } from "react"

export const AboutMe = () => {

    let [description, setDescription] = useState("React, CSS, JS, HTML, PhotoShop, Typescript")
    let information = [
        {
            id: 1,
            name: "Main Skills",
            description: "React, CSS, JS Native, HTML, PhotoShop, В1 – Pre-Intermediate", 
        },
        {
            id: 2,
            name: "Education",
            description: "BNTU 2012 - 2016"
        },
        {
            id: 3,
            name: "Experience",
            description: " Senior Account-Manager 2017 - 2022, IT-INCUBATOR"
        },
    ]

    function ChangeDescription(id: number) {
        description = information[id - 1].description
        setDescription(description)
    }

    return (



        <div className="bodyColorGrey">
            <div id="AboutMe" className="container">
                <div className={s.wrapper}>
                    <img src={photo} alt="MyPhoto" />
                    <div className={s.info}>
                        <h2 >  About me </h2>
                        <p> In 2012 I entered BNTU and graduated in 2016  </p>
                        <p>  In the period from 2016 to 2017, I served in the military </p>
                        <p>   At the moment I hold the position of a leading specialist in working with clients</p>
                        <p>    I consider the best qualities in myself to be sociability, the ability to work with a large amount of information and deep analysis in numbers</p>

                        <div className={s.mainSkills}>
                            <ul>
                                <a href="##"><li className={`${description === information[0].description ? s.active : s.disable} ${s.descriptionSlyle}`} onClick={() => ChangeDescription(1)} >{information[0].name}</li></a>
                                <a href="##"><li className={`${description === information[1].description ? s.active : s.disable} ${s.descriptionSlyle}`} onClick={() => ChangeDescription(2)}>{information[1].name}</li></a>
                                <a href="##"><li className={`${description === information[2].description ? s.active : s.disable} ${s.descriptionSlyle}`} onClick={() => ChangeDescription(3)}>{information[2].name}</li></a>
                            </ul>

                            <p>{description}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}