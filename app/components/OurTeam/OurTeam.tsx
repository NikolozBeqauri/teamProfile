import Marquee from "react-fast-marquee";
import styles from "./OurTeam.module.scss";
import { useTranslations } from "next-intl";

const OurTeam = () => {
    const t = useTranslations("OurTeam");

    const items = [
        {
            src: "/userPhoto2.png",
            alt: "ika",
            title: t("members.1.name"),
            subtitle: t("members.1.role"),
        },
        {
            src: "/userPhoto.png",
            alt: "nika",
            title: t("members.2.name"),
            subtitle: t("members.2.role"),
        },
        {
            src: "/mari.png",
            alt: "Maria",
            title: t("members.0.name"),
            subtitle: t("members.0.role"),
        },
        {
            src: "/userPhoto2.png",
            alt: "guga",
            title: t("members.3.name"),
            subtitle: t("members.3.role"),
        },
        {
            src: "/userPhoto2.png",
            alt: "ika",
            title: t("members.1.name"),
            subtitle: t("members.1.role"),
        },
        {
            src: "/userPhoto.png",
            alt: "nika",
            title: t("members.2.name"),
            subtitle: t("members.2.role"),
        },
        {
            src: "/mari.png",
            alt: "Maria",
            title: t("members.0.name"),
            subtitle: t("members.0.role"),
        },
        {
            src: "/userPhoto2.png",
            alt: "guga",
            title: t("members.3.name"),
            subtitle: t("members.3.role"),
        },
    ];

    return (
        <section>
            <div className={styles.mainTexts}>
                <h2>{t("title")}</h2>
                <p>{t("description")}</p>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.gradientLeft} />
                <div className={styles.gradientRight} />
                <Marquee speed={15} gradient={false} direction="left" loop={0}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={item.src} alt={item.alt} className={styles.image} />
                            </div>
                            <div className={styles.texts}>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default OurTeam;
