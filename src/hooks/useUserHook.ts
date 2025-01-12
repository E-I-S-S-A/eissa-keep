import { User } from "../entities/User";

const useUserHook = () => {
    const ACCOUNTS_BACKEND_BASE_URL = `${process.env.REACT_APP_ACCOUNTS_BACKEND_BASE_URL}/accounts`;
    const ACCOUNTS_CLIENT_BASE_URL = `${process.env.REACT_APP_ACCOUNTS_CLIENT_BASE_URL}`;
    const KEEP_CLIENT_BASE_URL = `${process.env.REACT_APP_KEEP_CLIENT_BASE_URL}`;

    let currentUser: User | null = null;

    const getAndSetUser = async (): Promise<User | null> => {
        if (currentUser) return currentUser;

        const result = await fetch(`${ACCOUNTS_BACKEND_BASE_URL}/get-user`, {
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

    const redirectToAccounts = () => {
        window.location.replace(
            `${ACCOUNTS_CLIENT_BASE_URL}?next=${KEEP_CLIENT_BASE_URL}`
        );
    };

    return {
        getAndSetUser,
        currentUser,
        redirectToAccounts,
    };
};

export default useUserHook;
