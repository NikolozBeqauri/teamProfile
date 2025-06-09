import React from 'react'
import UserSlider from '../UserSlider/UserSlider'
import styles from './OurPartners.module.scss'
const OurPartners = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.texts}>
                <h2>Our partners</h2>
                <p>
                    Our team consists of highly qualified specialists with international
                    experience in the field of Web development, mobile development, Product management and design.
                    We provide premium service at
                    affordable prices and are always focused on the success of our clients.
                </p>
            </div>
            <UserSlider />
        </div>
    )
}

export default OurPartners