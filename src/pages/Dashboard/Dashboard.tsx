import Navbar from "../../components/Navbar/Navbar";
import Card from "./Card/Card";
import styles from "./Dashboard.module.css"

const Dashboard = () => {


    return <>
        <Navbar />
        <div className={styles.main_container}>
            <div className={styles.card_container}>
                {
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
                        return <Card index={index}/>
                    })
                }
            </div>
            <div className={styles.modal}>

            </div>
        </div>

    </>
};

export default Dashboard;
