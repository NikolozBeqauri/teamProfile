import styles from './FooterSection.module.scss'
import Image from 'next/image'
import Link from 'next/link';

const FooterSection = () => {

    const socialIcons = [
        {
            name: 'email',
            href: '#',
            defaultSrc: '/whiteEmail.svg',
            alt: 'Facebook icon',
        },
        {
            name: 'twitter',
            href: '#',
            defaultSrc: '/whiteTwitter.svg',
            alt: 'Twitter icon',
        },
        {
            name: 'linkedin',
            href: '#',
            defaultSrc: '/linkedin.svg',
            alt: 'Instagram icon',
        },
    ];

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.firstSection}>
                    <div className={styles.logosection}>
                        <a href="/">
                            <Image
                                src={'/logo.svg'}
                                alt='main logo'
                                width={120}
                                height={100}
                            />
                        </a>
                        <p>
                            Full-service digital marketing agency
                            Full-service digital marketing agency
                            Full-service digital marketing agency
                        </p>
                        <div className={styles.socialWrapper}>
                            {socialIcons.map(icon => (
                                <Link href={icon.href} key={icon.name} className={styles.socialItem}>
                                    <img
                                        src={icon.defaultSrc}
                                        alt={icon.alt}
                                        height={20}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className={styles.secondaryWrapper}>
                        <div className={styles.contact}>
                            <h3>Contact</h3>
                            <div>
                                <Image
                                    src={'/grayEmail.svg'}
                                    alt='main logo'
                                    width={20}
                                    height={20}
                                />
                                <p>info@pilz.com</p>
                            </div>
                            <div>
                                <Image
                                    src={'/grayPhone.svg'}
                                    alt='main logo'
                                    width={20}
                                    height={20}
                                />
                                <p>(+995 577 77 77)</p>
                            </div>
                            <div>
                                <Image
                                    src={'/grayMark.svg'}
                                    alt='main logo'
                                    width={20}
                                    height={20}
                                />
                                <p>Tbilisi, Georgia</p>
                            </div>
                        </div>

                        <div className={styles.navigation}>

                            <h3>Navigation</h3>
                            <a href="#">Contact Us</a>
                            <a href="#">About Us</a>
                            <a href="#">Services</a>

                        </div>
                    </div>
                </div>
                <div className={styles.secondSection}>
                    <p>© Synaptica Digital Studio. Copyright © 2025</p>
                </div>
            </div>
        </section>
    )
}

export default FooterSection