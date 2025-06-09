import Marquee from "react-fast-marquee";
import styles from "./OurTeam.module.scss";

const items = [
    {
        src: "/userPhoto.png",
        alt: "Maya Unzip",
        title: "Maya Unzip",
        subtitle: "Frontend developer",
    },
    {
        src: "/userPhoto2.png",
        alt: "Maya Unzip",
        title: "Maya Unzip",
        subtitle: "Backend Developer",
    },
    {
        src: "/userPhoto.png",
        alt: "Maya Unzip",
        title: "Maya Unzip",
        subtitle: "Frontend developer",
    },
    {
        src: "/userPhoto2.png",
        alt: "Maya Unzip",
        title: "Maya Unzip",
        subtitle: "Backend Developer",
    },
];

const OurTeam = () => {
    return (
        <section>
            <div className={styles.mainTexts}>
                <h2>Meet our team</h2>
                <p>We're not just a team — we're a crew of specialists, creators, and problem-solvers. Each member brings unique 
                    skills, international experience, and a shared passion for building amazing digital products.</p>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.gradientLeft} />
                <div className={styles.gradientRight} />
                <Marquee speed={40} pauseOnHover gradient={false} direction="left" loop={0}>
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
    )
};

export default OurTeam;
