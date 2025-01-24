import React, { useState } from "react";
import styles from "./Card.module.css"
import { Keep } from "../../../models/keep";
import { EissaButton, EissaModal } from "react-reusable-elements";
import KeepModal from "../KeepModal/KeepModal";

type CardProps = {
    keep: Keep
}

const Card = (props: CardProps) => {

    const { keep } = props;
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    const openModal = () => {
        setIsModalVisible(true)
    }


    return <div className={styles.card} >
        <div className={styles.card_content} onClick={openModal}>
            <div className={styles.title}>{keep?.title}</div>
            <div className={styles.body}>
                {keep?.description}
            </div>
        </div>
        <KeepModal isModalVisible={isModalVisible} keep={keep} setIsModalVisible={setIsModalVisible} />
    </div>
}

export default Card;