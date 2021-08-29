import s from "./AboutMe.module.css"
import "../../index.css"
import photo from './../../img/pexels-almighty-shilref-5471507.jpg'
import { useState } from "react"

export const AboutMe = () => {

    let [description, setDescription] = useState("React, CSS, JS Native, HTML, PhotoShop")
    let information = [
        {
            id: 1,
            name: "Main Skills",
            description: "React, CSS, JS Native, HTML, PhotoShop"
        },
        {
            id: 2,
            name: "Education",
            description: "BNTU 2016 - 2020"
        },
        {
            id: 3,
            name: "Experience",
            description: "Account-Manager 2017 - 2021, IT-INCUBATOR"
        },
    ]

    function ChangeDescription(id: number) {
        description = information[id - 1].description
        setDescription(description)
    }

    return (


        <>
            <div className="bodyColorGrey">
                <div id="AboutMe" className="container">
                    <div className={s.wrapper}>
                        <img src={photo} alt="MyPhoto" />
                        <div className={s.info}>
                            <h2 >  About me </h2>
                            <p> There are many variations of
                                passages of Lorem Ipsum available,
                                but the majority have suffered
                                <a href="##">alteration</a>
                                in some form, by injected humour,
                                or randomised words which dont look
                                even slightly believable. If you are
                                going to use a passage of Lorem Ipsum,
                            </p>
                            <div className={s.mainSkills}>
                                <ul>
                                    <a href="##"><li className={`${description === information[0].description ? s.active : s.disable} ${s.descriptionSlyle}`} onClick={() => ChangeDescription(1)} >Main Skills</li></a>
                                    <a href="##"><li className={`${description === information[1].description ? s.active : s.disable} ${s.descriptionSlyle}`} onClick={() => ChangeDescription(2)}>Awards</li></a>
                                    <a href="##"><li className={`${description === information[2].description ? s.active : s.disable} ${s.descriptionSlyle}`} onClick={() => ChangeDescription(3)}>Expirience</li></a>
                                </ul>

                                <p>{description}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}