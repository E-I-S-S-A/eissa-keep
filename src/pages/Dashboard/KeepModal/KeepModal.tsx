import { EissaButton, EissaInputField, EissaModal } from "react-reusable-elements";
import { Keep } from "../../../models/keep";
import styles from "./KeepModal.module.css";
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';
import DoneIcon from "../../../assets/done.svg"
import DeleteIcon from "../../../assets/delete.svg"
import CloseIcon from "../../../assets/close.svg"

type KeepModalProps = {
    keep: Keep | null,
    isModalVisible: boolean;
    onClose: () => void;
    setAllKeeps: React.Dispatch<React.SetStateAction<Keep[]>>
}

const defaultValues: Keep = {
    description: "",
    keepId: "",
    title: "",
    backgroundColor: ""
}

const KeepModal = (props: KeepModalProps) => {
    const { keep, isModalVisible, onClose, setAllKeeps } = props;
    const { register, handleSubmit, setValue, formState: { isValid }, reset } = useForm<Keep>({
        mode: "all",
    });
    console.log(keep)
    useEffect(() => {
        reset(keep || defaultValues);
    }, [keep]);

    const onSubmit: SubmitHandler<Keep> = (data) => {

        if (!data?.description && !data?.title) {
            onClose();
            reset(defaultValues);
            return;
        }

        setAllKeeps(prev => {
            let isFound = false;

            for (let keep of prev) {
                if (keep.keepId === data.keepId) {
                    keep.description = data.description;
                    keep.title = data.title;
                    keep.backgroundColor = data.backgroundColor;
                    isFound = true;
                    break;
                }
            }

            if (!isFound) {
                data.keepId = uuidv4();
                return [data, ...prev]
            }

            return prev;
        })
        reset(defaultValues)
        onClose()
    };


    const handleChange = (currValue: string) => {
        setValue("description", currValue)
    }

    const ModalContent = () => {
        return <div className={styles.main_container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.fields}>
                    <EissaInputField name="title" register={register} placeholder="Title" varient="secondary" bg="var(--dark-grey)" fontColor="var(--white)" />
                    <ReactQuill
                        theme="snow"
                        value={keep?.description}
                        onChange={handleChange}
                        className={styles.quill}
                        placeholder="Your Keep here..."
                    />
                </div>
                <div className={styles.actions}>
                    <EissaButton type="submit" variant="primary" icon={DoneIcon} padding={5} />
                </div>

            </form>
            <div className={styles.delete}>
                <EissaButton type="button" variant="primary" icon={DeleteIcon} padding={0} bg="var(--dark-grey)" borderColor="var(--dark-grey)" />
            </div>
            <div className={styles.close}>
                <EissaButton type="button" variant="primary" icon={CloseIcon} padding={0} bg="var(--dark-grey)" borderColor="var(--dark-grey)" />
            </div>
        </div>
    }


    return (
        <EissaModal
            ModalContent={ModalContent}
            isVisible={isModalVisible}
        />
    );
};

export default KeepModal;
