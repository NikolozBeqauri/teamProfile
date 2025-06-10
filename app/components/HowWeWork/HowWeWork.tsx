import styles from './HowWeWork.module.scss'
import { useTranslations } from "next-intl";

const HowWeWork = () => {
    const t = useTranslations('HowWeWork');

    const steps = [
    {
        number: '01',
        title: t('steps.0.title'),
        description: t('steps.0.description'),
    },
    {
        number: '02',
        title: t('steps.1.title'),
        description: t('steps.1.description'),
    },
    {
        number: '03',
        title: t('steps.2.title'),
        description: t('steps.2.description'),
    },
    {
        number: '04',
        title: t('steps.3.title'),
        description: t('steps.3.description'),
    },
    {
        number: '05',
        title: t('steps.4.title'),
        description: t('steps.4.description'),
    },
    {
        number: '06',
        title: t('steps.5.title'),
        description: t('steps.5.description'),
    },
];



    return (
        <div className={styles.wrapper} id='aboutUs'>
            <h2>{t('titlePart1')} <p>{t('titlePart2')}</p></h2>
            <div className={styles.cards}>
                {steps.map((step, index) => (
                    <div className={styles.stepCard} key={index}>
                        <div className={styles.header}>
                            <span className={styles.stepNumber}>{step.number}</span>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                        </div>
                        <p className={styles.stepDescription}>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HowWeWork