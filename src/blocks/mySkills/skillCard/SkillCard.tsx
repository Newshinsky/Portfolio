import s from "./SkillCard.module.css"
import "../../../index.css"
import { skillType } from "../../../App"


type PropsType = {
    skills: Array<skillType>
}


export const SkillCard = (props: PropsType) => {


    return (
        <>
            {props.skills.map(e => {
                return (
                    <div id="AboutMe" >
                        <div className={s.wrapper}>
                            <div className={s.pageContain}>
                                <a href="##" className={s.dataCard}>
                                    <h3>{e.skill}</h3>
                                    <p> {e.percent}%
                                        {e.icon}
                                    </p>
                                    <span className={s.linkText}>
                                        {/* <div className={s.progress}>
                                        <div className={s.color}></div>
                                    </div> */}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}