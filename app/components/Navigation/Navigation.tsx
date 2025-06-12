import { useTranslations } from "next-intl";
import styles from "./Navigation.module.scss"
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import { Link } from "@/i18n/navigation";
import ReusableButton from "../ReusableButton/ReusableButton";
interface Props {
    notIndexPage?: boolean;
}
const Navigation = (props: Props) => {

    const t = useTranslations('Navigation');

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <Link href="/">
                    <img
                        src={`/logo.svg`}
                        alt="logo"
                        className={styles[t("logo")]}
                    />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link href={props.notIndexPage ? "/#services" : "#services"}>{t('services')}</Link>
                        </li>
                        <li>
                            <Link href={props.notIndexPage ? "/#aboutUs" : "#aboutUs"}>{t('aboutUs')}</Link>
                        </li>
                        <li>
                            <Link href={props.notIndexPage ? "/#contact" : "#contact"}>{t('contact')}</Link>
                        </li>
                    </ul>
                </nav>
                    <a className={styles.buttonWrapper} href="#contact">
                        <ReusableButton title={"Leave a request"} />
                    </a>
            </div>
            <LanguagePicker />
        </section>
    )
}

export default Navigation