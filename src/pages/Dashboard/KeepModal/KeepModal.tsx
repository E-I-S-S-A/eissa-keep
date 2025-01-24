import { EissaButton, EissaInputField, EissaModal } from "react-reusable-elements";
import { Keep } from "../../../models/keep";
import styles from "./KeepModal.module.css";
import { useForm, SubmitHandler } from 'react-hook-form';

type KeepModalProps = {
    keep: Keep,
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const KeepModal = (props: KeepModalProps) => {
    const { keep, isModalVisible, setIsModalVisible } = props;
    const { register, handleSubmit, formState: { errors, touchedFields }, reset } = useForm<Keep>({
        mode: "all",
        defaultValues: keep
    });

    const onSubmit: SubmitHandler<Keep> = (data) => {
        closeModal()
    };

    const closeModal = () => {
        setIsModalVisible(false)
    }

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