import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import Link from 'next/link';

const Hero = () => {

    const socialIcons = [
        {
            name: 'email',
            href: 'https://mail.google.com/mail/?view=cm&fs=1&to=synaptica.online@gmail.com&su=Subject&body=YourMessage',
            defaultSrc: '/whiteEmail.svg',
            alt: 'Facebook icon',
        },
        {
            name: 'twitter',
            href: 'https://x.com/SynapticaDev',
            defaultSrc: '/whiteTwitter.svg',
            alt: 'Twitter icon',
        },
        {
            name: 'linkedin',
            href: 'https://www.linkedin.com/company/synapticadev',
            defaultSrc: '/linkedin.svg',
            alt: 'Instagram icon',
        },
    ];


    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Image
                    className={styles.heroImage}
                    src={'/hero.png'}
                    alt='hero image'
                    width={656}
                    height={515}
                />
                <Image
                    className={styles.heroLaptopImage}
                    src={'/hero.png'}
                    alt='hero image'
                    width={580}
                    height={550}
                />
                <h1>Simple solutions <p>for complex</p> <p>problems</p></h1>
            </div>

            <div className={styles.socialWrapper}>
                {socialIcons.map(icon => (
                    <Link
                        href={icon.href}
                        key={icon.name}
                        className={styles.socialItem}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={icon.defaultSrc} alt={icon.alt} height={20} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Hero