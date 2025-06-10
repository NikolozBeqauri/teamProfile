import styles from './FooterSection.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const FooterSection = () => {
    const t = useTranslations('Footer');

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
                        <Link href="/">
                            <Image
                                src={'/logo.svg'}
                                alt='main logo'
                                width={120}
                                height={100}
                            />
                        </Link>
                        <p>{t('description')}</p>

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
                            <h3>{t('contact')}</h3>
                            <div>
                                <Image
                                    src={'/grayEmail.svg'}
                                    alt='email icon'
                                    width={20}
                                    height={20}
                                />
                                <p>{t('email')}</p>
                            </div>
                            <div>
                                <Image
                                    src={'/grayPhone.svg'}
                                    alt='phone icon'
                                    width={20}
                                    height={20}
                                />
                                <p>{t('phone')}</p>
                            </div>
                            <div>
                                <Image
                                    src={'/grayMark.svg'}
                                    alt='location icon'
                                    width={20}
                                    height={20}
                                />
                                <p>{t('location')}</p>
                            </div>
                        </div>

                        <div className={styles.navigation}>
                            <h3>{t('navigation')}</h3>
                            <Link href="#">{t('contactUs')}</Link>
                            <Link href="#">{t('aboutUs')}</Link>
                            <Link href="#">{t('services')}</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.secondSection}>
                    <p>{t('copyright')}</p>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;
