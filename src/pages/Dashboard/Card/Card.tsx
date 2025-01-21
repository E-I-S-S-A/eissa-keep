import React from "react";
import styles from "./Card.module.css"
import { Keep } from "../../../models/keep";

type CardProps = {
    keep: Keep
}

const Card = (props: CardProps) => {

    const { keep } = props;

    return <div className={styles.card}>
        <div className={styles.title}>{keep?.title}</div>
        <div className={styles.body}>
            {keep?.description}
        </div>
    </div>
}

export default Card;