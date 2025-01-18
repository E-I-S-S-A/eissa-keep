import Navbar from "../../components/Navbar/Navbar";
import styles from "./Dashboard.module.css"

const Dashboard = () => {


    return <>
        <Navbar />
        <div className={styles.main_container}>
            <div className={styles.card_container}>

                {
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
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
                    })

                }
            </div>
        </div>

    </>
};

export default Dashboard;
