import Marquee from "react-fast-marquee";
import styles from './UserSlider.module.scss'
const logos = [
  { src: "/avseLogo.png", alt: "Avse Logo" },
  { src: "/pilzEngLight.svg", alt: "Pilz Logo" },
  { src: "/shtab.svg", alt: "shtab Logo" },
  { src: "/builde.svg", alt: "builde Logo" }, 
  { src: "/avseLogo.png", alt: "Avse Logo" },
  { src: "/pilzEngLight.svg", alt: "Pilz Logo" },
  { src: "/shtab.svg", alt: "shtab Logo" },
  { src: "/builde.svg", alt: "builde Logo" }, 
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
