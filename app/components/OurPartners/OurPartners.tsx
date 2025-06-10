import React from 'react'
import UserSlider from '../UserSlider/UserSlider'
import styles from './OurPartners.module.scss'
import { useTranslations } from "next-intl";

const OurPartners = () => {

    const t = useTranslations('OurPartners');

    return (
        <div className={styles.wrapper}>
            <div className={styles.texts}>
                <h2>{t("title")}</h2>
                <p>
                    {t("description")}
                </p>
            </div>
            <UserSlider />
        </div>
    )
}

export default OurPartners