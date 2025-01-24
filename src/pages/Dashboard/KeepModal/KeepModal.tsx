import { EissaButton, EissaInputField, EissaModal } from "react-reusable-elements";
import { Keep } from "../../../models/keep";
import styles from "./KeepModal.module.css";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect } from "react";

type KeepModalProps = {
    keep: Keep | null,
    isModalVisible: boolean;
    onClose: () => void
}

const KeepModal = (props: KeepModalProps) => {
    const { keep, isModalVisible, onClose } = props;
    const { register, handleSubmit, formState: { errors, touchedFields }, reset } = useForm<Keep>({
        mode: "all",
    });

    useEffect(() => {
        if (keep?.keepId)
            reset(keep);
        else {
            setTimeout(() => {
                reset({ keepId: "" });
            }, 500)
        }
    }, [keep])

    const onSubmit: SubmitHandler<Keep> = (data) => {
        onClose()
    };

    const modalContent = () => <div className={styles.main_container}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <EissaInputField name="title" register={register} placeholder="Title" />
            <EissaInputField name="description" register={register} placeholder="Your keep here.." />
            <EissaButton label="Submit" type="submit" variant="primary" />
        </form>

    </div>

    return <EissaModal ModalContent={modalContent} isVisible={isModalVisible} />

}

export default KeepModal;