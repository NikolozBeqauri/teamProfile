'use client';
import Image from 'next/image';
import styles from './BurgerNav.module.scss';
import { useState } from 'react';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import { useTranslations } from "next-intl";
import Link from 'next/link';
import ReusableButton from '../ReusableButton/ReusableButton';

interface Props {
    notIndexPage?: boolean;
}

const BurgerNav = (props: Props) => {
    const [active, setActive] = useState(false);
    const [pickerOpen, setPickerOpen] = useState(false); 
    const t = useTranslations('Navigation');

    return (
        <div className={`${styles.background} ${active ? styles.backgroundActive : ''}`} onClick={() => setActive(!active)}>
            <nav className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <Link href="/">
                        <img src="/logo.svg" alt="logo" className={styles[t("logo")]} />
                    </Link>
                    <Image
                        src="/burger.svg"
                        alt="burger menu"
                        width={40}
                        height={40}
                        className={styles.burgerIcon}
                        onClick={() => setActive(!active)}
                    />
                </div>

                <div className={`${styles.navWrapper} ${active ? styles.active : ''}`}>
                    <div>
                        <ul>
                            <li><a onClick={() => setActive(false)} className={styles.aTag} href={props.notIndexPage ? "/#services" : "#services"}>{t('services')}</a></li>
                            <li><a onClick={() => setActive(false)} className={styles.aTag} href={props.notIndexPage ? "/#aboutUs" : "#aboutUs"}>{t('aboutUs')}</a></li>
                            <li><a onClick={() => setActive(false)} className={styles.aTag} href={props.notIndexPage ? "/#contact" : "#contact"}>{t('contact')}</a></li>
                        </ul>

                        <div className={`${styles.languagePicker} ${pickerOpen ? styles.open : ''}`}>
                            <LanguagePicker setActive={setActive} setPickerOpen={setPickerOpen} />
                            <a className={styles.buttonWrapper} href="#contact">
                                <ReusableButton title={"Leave a request"} />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default BurgerNav;
