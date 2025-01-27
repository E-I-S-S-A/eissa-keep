import styles from "./FullScreenInfo.module.css"
import HappyState from "../../assets/happy-state.svg"
type FullScreenInfoProps = {
    imageType: "happy",
    message: string
}

const FullScreenInfo = (props: FullScreenInfoProps) => {

    const { imageType, message } = props;

    return <div className={styles.main_container}>
        <img src={HappyState} alt="Happy State" />
        <p>{message}</p>
    </div>
}

export default FullScreenInfo;