import styles from './OurCases.module.scss'
import Image from 'next/image'

const OurCases = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.texts}>
                <Image
                src={'/fire.svg'}
                alt='fire Icon'
                height={117}
                width={70}
            />
                <h2>Our cases</h2>
                <p>Our team consists of highly qualified specialists with international experience in the field of Web development, mobile development,</p>
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
                        <h3>Avse - Application</h3>
                        <p>A Georgian fintech startup that helps businesses effortlessly track income and pay taxes in one click — simplifying finance, saving time, and ensuring compliance.</p>
                    </div>
                </div>
                <div className={styles.secondSectionWrapper}>
                    <div className={styles.avseLanding}>
                        <div className={styles.secondaryTexts}>
                            <h3>Avse - Application</h3>
                            <p>A Georgian fintech startup that helps businesses effortlessly track income and pay taxes in one click — simplifying finance, saving time, and ensuring compliance.</p>
                        </div>
                        <Image
                            src={'/avseLanding.png'}
                            alt='avseApp'
                            height={307}
                            width={481}
                        />
                    </div>
                    <div className={styles.pilzWrapper}>
                        <div className={styles.secondaryTexts}>
                            <h3>Pilz Accounting</h3>
                            <p>Pilz LTD provides accounting services in Georgia, both for Georgians and non-residents. Accounting is one of the main foundations of the financial success of any organization.</p>
                        </div>
                        <Image
                            src={'/pilzLanding.png'}
                            alt='avseApp'
                            height={307}
                            width={481}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCases