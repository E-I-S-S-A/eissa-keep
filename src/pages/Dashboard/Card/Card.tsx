import React, { useState } from "react";
import styles from "./Card.module.css"
import { Keep } from "../../../models/keep";

type CardProps = {
    keep: Keep
}

const Card = (props: CardProps) => {

    const { keep } = props;

    return <div className={styles.card} style={{ backgroundColor: keep.backgroundColor }}>
        <div className={styles.card_content} >
            <div className={styles.title}>{keep?.title}</div>
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: keep.description }}>
            </div>
        </div>

    </div>
}

export default Card;