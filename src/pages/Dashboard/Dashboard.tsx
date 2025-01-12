import { useEffect, useState } from "react";
import useUserHook from "../../hooks/useUserHook";
import { User } from "../../entities/User";

const Dashboard = () => {

    const [data, setData] = useState<User | null>(null)
    const { getAndSetUser } = useUserHook()

    const getUser = async () => {
        try {
            const user = await getAndSetUser();
            console.log(user)
            setData(user)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getUser();
    }, [])
    return <div>{data ? JSON.stringify(data) : "Not"}</div>;
};

export default Dashboard;
