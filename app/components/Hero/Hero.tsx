import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import Link from 'next/link';

const Hero = () => {

    const socialIcons = [
        {
            name: 'email',
            href: '#',
            defaultSrc: '/whiteEmail.svg',
            alt: 'email icon',
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
            alt: 'linkedin icon',
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
    )
}

export default Hero