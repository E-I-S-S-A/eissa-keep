import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "./Card/Card";
import styles from "./Dashboard.module.css"
import { Keep } from "../../models/keep";
import { EissaButton, EissaModal } from "react-reusable-elements";
import KeepModal from "./KeepModal/KeepModal";
import FullScreenInfo from "../../components/FullScreenInfo/FullScreenInfo";
import AddIcon from "../../assets/add.svg"

const Dashboard = () => {

    const [allKeeps, setAllKeeps] = useState<Keep[]>([]);

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [selectedKeep, setSelectedKeep] = useState<Keep | null>(null)

    const editKeep = (keep: Keep) => {
        setSelectedKeep(keep);
    }

    useEffect(() => {
        if (selectedKeep) {
            openModal();
        }
    }, [selectedKeep])

    const openModal = () => {
        setIsModalVisible(true)
    }

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedKeep(null);
    }

    return <>
        <Navbar setAllKeeps={setAllKeeps}/>
        <div className={styles.new_keep}>
            <EissaButton icon={AddIcon} onClick={openModal} />
        </div>
        <div className={styles.main_container}>
            {
                allKeeps.length === 0 ?
                    <FullScreenInfo message="Add your keep to get started!" imageType="happy" />
                    :
                    <div className={styles.card_container}>
                        {
                            allKeeps.map((keep) => {
                                return <div key={keep.keepId} className={styles.card_wrapper} onClick={() => editKeep(keep)}>
                                    <Card keep={keep} />
                                </div>
                            })}
                    </div>
            }
        </div>
        <KeepModal isModalVisible={isModalVisible} keep={selectedKeep} onClose={closeModal} setAllKeeps={setAllKeeps} />
    </>
};

export default Dashboard;
