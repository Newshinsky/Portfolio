import s from "./ContactForm.module.css"





export const ContactForm = () => {
    return (
        <>
            <div className={s.background}>
                <div className={s.container}>
                    <div className={s.screen}>
                        <div className={s.screenHeader}>
                            <div className={s.screenHeaderLeft}>
                                <div className={` ${s.screenHeaderButton} ${s.close}`}></div>
                                <div className={` ${s.screenHeaderButton} ${s.maximize}`}></div>
                                <div className={` ${s.screenHeaderButton} ${s.minimize}`}></div>
                            </div>
                            <div className={s.screenHeaderRight}>
                                <div className={s.screenHeaderEllipsis}></div>
                                <div className={s.screenHeaderEllipsis}></div>
                                <div className={s.screenHeaderEllipsis}></div>
                            </div>
                        </div>
                        <div className={s.screenBody}>
                            <div className={`${s.screenBodyItem} ${s.left}`}>
                                <div className={s.appTitle}>
                                    <span>CONTACT</span>
                                    <span>ME</span>
                                </div>
                                <div className={s.appContact}>CONTACT INFO : +375 33 384 384 1</div>
                            </div>
                            <div className={s.screenBodyItem}>
                                <div className={s.appForm}>
                                    <div className={s.appFormGroup}>
                                        <input className={s.appFormControl} placeholder="NAME" />
                                    </div>
                                    <div className={s.appFormGroup}>
                                        <input className={s.appFormControl} placeholder="EMAIL" />
                                    </div>
                                    <div className={s.appFormGroup}>
                                        <input className={s.appFormControl} placeholder="CONTACT NO" />
                                    </div>
                                    <div className={`${s.appFormGroup} ${s.message}`}>
                                        <input className={s.appFormControl} placeholder="MESSAGE" />
                                    </div>
                                    <div className={`${s.appFormGroup} ${s.buttons}`}>
                                        <button className={s.appFormButton}>CANCEL</button>
                                        <button className={s.appFormButton}>SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >

        </>
    )
}