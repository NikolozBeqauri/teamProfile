import styles from './OurCases.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const OurCases = () => {
    const t = useTranslations('OurCases')

    return (
        <div className={styles.wrapper}>
            <div className={styles.texts}>
                <Image
                    src={'/fire.svg'}
                    alt='fire Icon'
                    height={117}
                    width={70}
                />
                <h2>{t('title')}</h2>
                <p>{t('description')}</p>
            </div>
            <div className={styles.casesWrapper}>
                <a href="https://avse.online/" target="_blank" rel="noopener noreferrer" className={styles.avseApp}>
                    <Image
                        src={'/avseApp.png'}
                        alt='avseApp'
                        height={440}
                        width={363}
                    />
                    <div className={styles.secondaryTexts}>
                        <h3>{t('cases.0.title')}</h3>
                        <p>{t('cases.0.description')}</p>
                    </div>
                </a>

                <div className={styles.laptopTexts}>
                    <h3 className={styles.leptopH3}>{t('cases.0.title')}</h3>
                    <p>{t('cases.0.description')}</p>
                </div>

                <div className={styles.secondSectionWrapper}>
                    <a href="https://avse.online/" target="_blank" rel="noopener noreferrer" className={styles.avseLanding}>
                        <div className={styles.secondaryTexts}>
                            <h3>{t('cases.1.title')}</h3>
                            <p>{t('cases.1.description')}</p>
                        </div>
                        <Image
                            src={'/avseLanding.png'}
                            alt='avseLanding'
                            height={307}
                            width={381}
                        />
                    </a>

                    <div className={styles.laptopTexts}>
                        <h3 className={styles.leptopH3}>{t('cases.1.title')}</h3>
                        <p>{t('cases.1.description')}</p>
                    </div>

                    <a href="https://pilz.ge/ka" target="_blank" rel="noopener noreferrer" className={styles.pilzWrapper}>
                        <div className={styles.secondaryTexts}>
                            <h3>{t('cases.2.title')}</h3>
                            <p>{t('cases.2.description')}</p>
                        </div>
                        <Image
                            src={'/pilzLanding.png'}
                            alt='pilzLanding'
                            height={307}
                            width={400}
                            className={styles.pilzLandingImg}
                        />
                        <Image
                            src={'/pilzLandingLaptop.png'}
                            alt='pilzLanding'
                            className={styles.pilzLandingLaptopImg}
                            height={307}
                            width={381}
                        />
                    </a>
                    <div className={styles.laptopTexts}>
                        <h3 className={styles.leptopH3}>{t('cases.2.title')}</h3>
                        <p>{t('cases.2.description')}</p>
                    </div>
                </div>
            </div>

            {/* //////////////////////////////////////////////////////////////////////// */}

            <div className={styles.casesWrapper}>
                <div className={`${styles.avseApp} ${styles.building}`}>
                    <Image
                        src={'/building.png'}
                        alt='building'
                        height={440}
                        width={363}
                    />
                    <div className={styles.secondaryTexts}>
                        <h3>{t('cases.3.title')}</h3>
                        <p>{t('cases.3.description')}</p>
                    </div>
                    <div className={styles.inProgress}>
                        <p>In Progress</p>
                    </div>
                </div>

                <div className={styles.laptopTexts}>
                    <h3 className={styles.leptopH3}>{t('cases.3.title')}</h3>
                    <p>{t('cases.3.description')}</p>
                </div>

                <div className={styles.secondSectionWrapper}>
                    <div className={`${styles.avseLanding} ${styles.shtab}`}>
                        <div className={styles.secondaryTexts}>
                            <h3>{t('cases.4.title')}</h3>
                            <p>{t('cases.4.description')}</p>
                        </div>
                        <Image
                            src={'/shtab.png'}
                            alt='shtab'
                            height={307}
                            width={381}
                        />
                        <div className={styles.inProgress}>
                            <p>In Progress</p>
                        </div>
                    </div>

                    <div className={styles.laptopTexts}>
                        <h3 className={styles.leptopH3}>{t('cases.4.title')}</h3>
                        <p>{t('cases.4.description')}</p>
                    </div>

                    <a href="https://nikolozbeqauri.github.io/acceleration-1/" target="_blank" rel="noopener noreferrer" className={`${styles.pilzWrapper} ${styles.travel}`}>
                        <div className={styles.secondaryTexts}>
                            <h3>{t('cases.5.title')}</h3>
                            <p>{t('cases.5.description')}</p>
                        </div>
                        <Image
                            src={'/travel.png'}
                            alt='travel'
                            height={307}
                            width={400}
                            className={styles.pilzLandingImg}
                        />
                        <Image
                            src={'/travel.png'}
                            alt='travel'
                            className={styles.pilzLandingLaptopImg}
                            height={307}
                            width={381}
                        />
                    </a>
                    <div className={styles.laptopTexts}>
                        <h3 className={styles.leptopH3}>{t('cases.5.title')}</h3>
                        <p>{t('cases.5.description')}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurCases
