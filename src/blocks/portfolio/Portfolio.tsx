import s from "./Portfolio.module.css"
import "../../index.css"
import { PortfolioCard } from "./portfolioCard/PortfolioCard"
import { worksType } from "../../App"

type PropsType = {

    works: Array<worksType>
}


export const Portfolio = (props: PropsType) => {
    return (

        <>
            <div  className="bodyColorGrey">
                <div className="container">
                    <div  id="Portfolio"className={s.wrapper}>
                        <h2>Portfolio</h2>
                        <p>There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration.
                        </p>
                        <div className={s.item}>
                            <PortfolioCard works={props.works} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}