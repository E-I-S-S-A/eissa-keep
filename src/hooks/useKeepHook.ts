import { Keep } from "../models/keep";

const useKeepHook = () => {
    const getKeeps = (
        page: number,
        limit: number,
        searchToken: string
    ): Keep[] => {
        return [];
    };

    const addKeep = (keep: Keep): boolean => {
        return true;
    };

    const updateKeep = (keep: Keep): boolean => {
        return true;
    };

    const deleteKeep = (keepId: string): boolean => {
        return true;
    };

    return {};
};

export default useKeepHook;
