import s from "./Portfolio.module.css"
import "../../index.css"
import { PortfolioCard } from "./portfolioCard/PortfolioCard"
import { worksType } from "../../App"

type PropsType = {

    works: Array<worksType>
}


export const Portfolio = (props: PropsType) => {
    return (
        <div className="bodyColorGrey">
            <div className="container" id="Portfolio">
                <div className={s.wrapper}>
                    <h2>Portfolio</h2>
                    <p>Projects are being finalized at the moment, so at the moment only the structure of applications is reflected
                    </p>
                    <div className={s.item}>
                        <PortfolioCard works={props.works} />
                    </div>
                </div>
            </div>
        </div>
    )
}