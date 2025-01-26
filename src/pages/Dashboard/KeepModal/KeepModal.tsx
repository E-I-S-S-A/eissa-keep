import { EissaButton, EissaInputField, EissaModal } from "react-reusable-elements";
import { Keep } from "../../../models/keep";
import styles from "./KeepModal.module.css";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type KeepModalProps = {
    keep: Keep | null,
    isModalVisible: boolean;
    onClose: () => void
}

const KeepModal = (props: KeepModalProps) => {
    const { keep, isModalVisible, onClose } = props;
    const { register, handleSubmit, setValue, formState: { errors, touchedFields }, reset } = useForm<Keep>({
        mode: "all",
    });

    useEffect(() => {
        console.log(keep)
        if (keep?.keepId)
            reset(keep);
        else {
            setTimeout(() => {
                reset({ keepId: "" });
            }, 500)
        }
    }, [keep]);

    const onSubmit: SubmitHandler<Keep> = (data) => {
        onClose()
    };

    const handleChange = (currValue: string) => {
        setValue("description", currValue)
    }

    return (
        <EissaModal
            ModalContent={() => (
                <div className={styles.main_container}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <EissaInputField name="title" register={register} placeholder="Title" varient="secondary" bg="var(--dark-grey)" fontColor="var(--white)" />
                        <ReactQuill
                            theme="snow"
                            value={keep?.description}
                            onChange={handleChange}
                            className={styles.quill}
                            placeholder="Your Keep here..."
                        />
                        <EissaButton label="Submit" type="submit" variant="primary" />
                    </form>
                </div>
            )}
            isVisible={isModalVisible}
        />
    );
};

export default KeepModal;
