import { User } from "../entities/User";

const useUserHook = () => {
    const ACCOUNTS_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/accounts`;
    let currentUser: User | null = null;

    const getAndSetUser = async (): Promise<User | null> => {
        if (currentUser) return currentUser;

        const result = await fetch(`${ACCOUNTS_BASE_URL}/get-user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        if (result.status === 200) {
            const user = await result.json();
            currentUser = user;
            return user;
        }

        throw new Error("Failed to get user");
    };

    return {
        getAndSetUser,
        currentUser,
    };
};

export default useUserHook;
