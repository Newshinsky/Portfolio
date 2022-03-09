import s from "./Wallpaper.module.css"
import "../../index"
import { useCallback, useEffect, useState } from "react"



let names = ['Content Writter', "JS/React Developer", "Lead Account Manager in the present"]




export const Wallpaper = () => {


    let [newName, setnewName] = useState('Content Writter')

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);
    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])



    return (

        <div className="bodyColorBlack">
            <div id="Home" className="container imageBG">
                <div className={s.wrapper}>
                    <h5>WELCOME TO MY WORLD </h5>
                    <h2> Hi, I’m</h2>
                    <h2>Alexandr Novoshinsky</h2>
                    <h3>{newName} </h3>
                    <h2>based in Belarus.</h2>
                </div>
            </div>
        </div>

    )
}