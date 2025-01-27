import styles from "./Navbar.module.css"
import KeepLogo from "./../../assets/keep-icon.svg"
import { EissaButton, EissaInputField } from "react-reusable-elements";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Keep } from "../../models/keep";
import CloseIcon from "../../assets/close.svg"

type NavbarProps = {
    setAllKeeps: React.Dispatch<React.SetStateAction<Keep[]>>
}

interface FormData {
    searchToken: string;
}

const Navbar = (props: NavbarProps) => {

    const { register, handleSubmit, formState: { errors, touchedFields, isValid }, reset } = useForm<FormData>({
        mode: "all",
    });
    const { setAllKeeps } = props;


    const onSubmit: SubmitHandler<FormData> = (data) => {
        const keyWord = data.searchToken;
        setAllKeeps(prev => {
            return prev.filter(item => (item.description.includes(keyWord) || item.title.includes(keyWord)))
        })
    };

    const handleReset = () => {
        reset();
    };


    return <div className={styles.main_conatiner}>
        <div className={styles.brand}>
            <img src={KeepLogo} alt="Eissa Keep" className={styles.brand_logo} />
            <div className={styles.brand_name}>EKeep</div>

        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.search_form}>
            {
                <div className={`${styles.clear} ${isValid && styles.visible}`}>
                    <EissaButton bg="var(--dark-grey)" borderColor="var(--dark-grey)" padding={0} icon={CloseIcon} onClick={handleReset} />
                </div>
            }
            <EissaInputField rules={{ required: true }} label="" name="searchToken" placeholder="Search" register={register} keepSpaceForError={false} bg="var(--dark-grey)" fontColor="var(--white)" />
        </form>
    </div>
}

export default Navbar;