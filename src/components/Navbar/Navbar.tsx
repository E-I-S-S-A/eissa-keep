import styles from "./Navbar.module.css"
import KeepLogo from "./../../assets/keep-icon.svg"
import { EissaButton, EissaInputField } from "react-reusable-elements";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
    search: string
}

const Navbar = () => {

    const { register, handleSubmit, formState: { errors, touchedFields }, reset } = useForm<FormData>({
        mode: "all",
    });


    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log("hii")
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
            <EissaInputField label="" name="search" placeholder="Search" register={register} keepSpaceForError={false} bg="var(--dark-grey)" fontColor="var(--white)"/>
        </form>
    </div>
}

export default Navbar;