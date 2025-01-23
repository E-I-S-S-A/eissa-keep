import React, { useState } from "react";
import styles from "./Card.module.css"
import { Keep } from "../../../models/keep";
import { EissaButton, EissaModal } from "react-reusable-elements";

type CardProps = {
    keep: Keep
}

const Card = (props: CardProps) => {

    const { keep } = props;
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    const toggleModal = () => {
        setIsModalVisible(prev => !prev)
    }


    return <div className={styles.card} >
        <div className={styles.card_content} onClick={toggleModal}>
            <div className={styles.title}>{keep?.title}</div>
            <div className={styles.body}>
                {keep?.description}
            </div>
        </div>
        <EissaModal ModalContent={() => <EissaButton label="Close" onClick={toggleModal} />} isVisible={isModalVisible} />
    </div>
}

export default Card;