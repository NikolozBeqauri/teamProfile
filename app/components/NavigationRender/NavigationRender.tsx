import BurgerNav from "../BurgerNav/BurgerNav"
import Navigation from "../Navigation/Navigation"
import styles from "./NavigationRender.module.scss"

interface Props {
    notIndexPage?: boolean;
}

const NavigationRender = (props: Props) => {
  return (
    <div>
      <div className={styles.navigation}>
        <Navigation notIndexPage={props.notIndexPage}/>
      </div>
      <div className={styles.burgerNav}>
        <BurgerNav notIndexPage={props.notIndexPage}/>
      </div>
    </div>
  )
}

export default NavigationRender