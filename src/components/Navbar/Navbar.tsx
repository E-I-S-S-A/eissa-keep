import styles from "./Navbar.module.css"
import KeepLogo from "./../../assets/keep-icon.svg"

const Navbar = () => {


    return <div className={styles.main_conatiner}>
        <div className={styles.brand}>
        <img src={KeepLogo} alt="Eissa Keep" className={styles.brand_logo}/>
        <div className={styles.brand_name}>EKeep</div>

        </div>
    </div>
}

export default Navbar;