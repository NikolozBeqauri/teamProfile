import Marquee from "react-fast-marquee";
import styles from './UserSlider.module.scss'
const logos = [
  { src: "/kssda.png", alt: "KSSDA" },
  { src: "/serviceWeb.png", alt: "Service Web" },
  { src: "/kssda.png", alt: "KSSDA" },
  { src: "/serviceWeb.png", alt: "Service Web" },
  { src: "/kssda.png", alt: "KSSDA" },
  { src: "/serviceWeb.png", alt: "Service Web" },
  { src: "/kssda.png", alt: "KSSDA" },
  { src: "/serviceWeb.png", alt: "Service Web" },
  { src: "/kssda.png", alt: "KSSDA" },
  { src: "/serviceWeb.png", alt: "Service Web" },
];

const UserSlider = () => (
 <div className={styles.wrapper}>
    <div className={styles.gradientLeft} />
    <div className={styles.gradientRight} />
    <Marquee
      speed={15}
      gradient={false}
      direction="left"
      loop={0}
    >
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className={styles.image}
        />
      ))}
    </Marquee>
  </div>
);

export default UserSlider;
