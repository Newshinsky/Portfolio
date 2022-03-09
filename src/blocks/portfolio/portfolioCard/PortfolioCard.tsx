import s from "./PortfolioCard.module.css"
import "../../../index.css"
import { worksType } from "../../../App"

type PropsType = {
    works: Array<worksType>
}


export const PortfolioCard = (props: PropsType) => {

    return (
        <>
            {
                props.works.map(e => {
                    return (
                        <div id="Portfolio" >
                            <div className={s.wrapper}>
                                <div className={s.container}>
                                    <div className={s.card}>
                                        <div className={s.imgBx}>
                                            <img src={e.image} alt="IconImage" />
                                        </div>
                                        <div className={s.contentBx}>
                                            <h2>{e.name}</h2>
                                            <a href={e.link} target="_blank">Look</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}