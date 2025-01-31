import { Keep } from "../models/keep";

const useKeepHook = () => {
    const KEEP_BACKEND_BASE_URL = `${process.env.REACT_APP_BACKEND_BASE_URL}/keep`;

    const getKeeps = async (
        page: number,
        limit: number,
        searchToken: string = ""
    ): Promise<Keep[]> => {
        const response = await fetch(
            `${KEEP_BACKEND_BASE_URL}/?page=${page}&limit=${limit}&searchToken=${searchToken}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            }
        );
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error("Failed to fetch keeps");
        }
    };

    const addKeep = async (keep: Keep): Promise<boolean> => {
        const response = await fetch(`${KEEP_BACKEND_BASE_URL}/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(keep),
        });
        if (response.status === 200) {
            return true;
        } else {
            throw new Error("Failed to add keep");
        }
    };

    const updateKeep = async (keep: Keep): Promise<boolean> => {
        const response = await fetch(`${KEEP_BACKEND_BASE_URL}/update`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(keep),
        });
        if (response.status === 200) {
            return true;
        } else {
            throw new Error("Failed to update keep");
        }
    };

    const deleteKeep = async (keepId: string): Promise<boolean> => {
        const response = await fetch(
            `${KEEP_BACKEND_BASE_URL}/delete/${keepId}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            }
        );
        if (response.status === 200) {
            return true;
        } else {
            throw new Error("Failed to delete keep");
        }
    };

    return { getKeeps, addKeep, updateKeep, deleteKeep };
};

export default useKeepHook;
