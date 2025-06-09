import styles from './HowWeWork.module.scss'

const HowWeWork = () => {

    const steps = [
        {
            number: '01',
            title: 'Briefing',
            description:
                'We define your brand identity, including style, tone, and visual elements that will guide the design.',
        },
        {
            number: '02',
            title: 'Branding',
            description:
                'We define your brand identity, including style, tone, and visual elements that will guide the design.',
        },
        {
            number: '03',
            title: 'Branding',
            description:
                'We define your brand identity, including style, tone, and visual elements that will guide the design.',
        },
        {
            number: '04',
            title: 'Branding',
            description:
                'We define your brand identity, including style, tone, and visual elements that will guide the design.',
        },
        {
            number: '05',
            title: 'Branding',
            description:
                'We define your brand identity, including style, tone, and visual elements that will guide the design.',
        },
        {
            number: '06',
            title: 'Branding',
            description:
                'We define your brand identity, including style, tone, and visual elements that will guide the design.',
        },

    ];

    return (
        <div className={styles.wrapper}>
            <h2>How we <p>work</p></h2>
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