import { useState, useCallback } from "react";
import axios from "axios";

axios.defaults.baseURL = 'https://api.github.com/users/'

export const useAxiosFetch = () => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = useCallback(async (url: string): Promise<void> => {
        try {
            const response = await axios.get<any>(url);
            setError(null);
            setData(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError('Axios Error with Message: ' + error.message);
            } else {
                setError(error);
            }
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }, []);

    return [data, error, loading, fetchData] as const;
};