import styles from "./Navbar.module.css"
import KeepLogo from "./../../assets/keep-icon.svg"
import { EissaAvatar, EissaButton, EissaInputField } from "react-reusable-elements";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Keep } from "../../models/keep";
import CloseIcon from "../../assets/close.svg"
import useUserHook from "../../hooks/useUserHook";
import { User } from "../../entities/User";
import useKeepHook from "../../hooks/useKeepHook";

type NavbarProps = {
    setAllKeeps: React.Dispatch<React.SetStateAction<Keep[]>>
}

interface FormData {
    searchToken: string;
}

const Navbar = (props: NavbarProps) => {

    const { register, handleSubmit, watch, formState: { errors, touchedFields, isValid }, reset } = useForm<FormData>({
        mode: "all",
    });
    const { setAllKeeps } = props;
    const { getAndSetUser } = useUserHook();
    const [user, setUser] = useState<User | null>(null);
    const ACCOUNTS_URL = process.env.REACT_APP_ACCOUNTS_CLIENT_BASE_URL;
    const { getKeeps } = useKeepHook();
    const searchToken = watch("searchToken");

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        try {
            const userFromServer = await getAndSetUser();
            console.log(user)
            setUser(userFromServer);
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            console.log(data)
            const keeps = await getKeeps(1, 100, data.searchToken);
            setAllKeeps(keeps);
        } catch (error) {
            console.log("Error")
        }
    };

    const onAvatarClick = () => {
        window.open(ACCOUNTS_URL, "_blank")
    }

    const handleReset = async () => {
        try {
            const keeps = await getKeeps(1, 100);
            setAllKeeps(keeps);
        } catch (error) {
            console.log("Error")
        }
        reset();
    };


    return <div className={styles.main_conatiner}>
        <div className={styles.brand}>
            <img src={KeepLogo} alt="Eissa Keep" className={styles.brand_logo} />
            <div className={styles.brand_name}>EKeep</div>
        </div>
        <div className={styles.actions}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.search_form}>
                {
                    <div className={`${styles.clear} ${searchToken?.length && styles.visible}`}>
                        <EissaButton bg="var(--dark-grey)" borderColor="var(--dark-grey)" padding={0} icon={CloseIcon} onClick={handleReset} />
                    </div>
                }
                <EissaInputField label="" name="searchToken" placeholder="Search" register={register} keepSpaceForError={false} bg="var(--dark-grey)" fontColor="var(--white)" />
            </form>
            <EissaAvatar height={35} name={user?.firstName} img={user?.avatar} CTA={onAvatarClick} />
        </div>
    </div>
}

export default Navbar;