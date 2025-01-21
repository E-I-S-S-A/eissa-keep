import React from "react";
import styles from "./Card.module.css"

type CardProps = {
    index: number
}

const Card = (props: CardProps) => {

    const { index } = props;

    return <div className={styles.card}>
        <div className={styles.title}>This is my title</div>
        <div className={styles.body}>
            {
                index % 2 == 0 ?
                    index + "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum doloribus sint et error cum numquam perferendis quae qui tempora, odio libero dignissimos dolore enim praesentium molestias deserunt. Quisquam, unde? Numquam accusamus minima ex, consectetur officia neque dolore tempora, iste enim consequatur libero, pariatur totam laboriosam architecto soluta reprehenderit quisquam unde."
                    :
                    index + "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, eveniet."
            }
        </div>
    </div>
}

export default Card;