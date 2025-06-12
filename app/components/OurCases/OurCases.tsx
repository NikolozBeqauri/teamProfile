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
                <div className={styles.avseApp}>
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
                </div>

                <h3 className={styles.leptopH3}>{t('cases.0.title')}</h3>

                <div className={styles.secondSectionWrapper}>
                    <div className={styles.avseLanding}>
                        <div className={styles.secondaryTexts}>
                            <h3>{t('cases.1.title')}</h3>
                            <p>{t('cases.1.description')}</p>
                        </div>
                        <Image
                            src={'/avseLanding.png'}
                            alt='avseLanding'
                            height={307}
                            width={481}
                        />
                    </div>

                    <h3 className={styles.leptopH3}>{t('cases.1.title')}</h3>

                    <div className={styles.pilzWrapper}>
                        <div className={styles.secondaryTexts}>
                            <h3>{t('cases.2.title')}</h3>
                            <p>{t('cases.2.description')}</p>
                        </div>
                        <Image
                            src={'/pilzLanding.png'}
                            alt='pilzLanding'
                            height={307}
                            width={481}
                            className={styles.pilzLandingImg}
                        />
                        <Image
                            src={'/pilzLandingLaptop.png'}
                            alt='pilzLanding'
                            className={styles.pilzLandingLaptopImg}
                            height={307}
                            width={381}
                        />
                    </div>
                    <h3 className={styles.leptopH3}>{t('cases.2.title')}</h3>

                </div>
            </div>
        </div>
    )
}

export default OurCases
