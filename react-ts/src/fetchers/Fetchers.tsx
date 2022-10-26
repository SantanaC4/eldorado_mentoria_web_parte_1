import axios from 'axios'

const baseURL = 'https://api.github.com/users/';

export async function get<T>(
    path: string
): Promise<T | string> {
    try {
        const { data, status } = await axios.get(`${baseURL}${path}`);

        console.log('Response status is: ', status);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            
            console.log('Error message:', error.message);
            return error.message;
        } else {
            return 'An unexpectted error occurred';
        }
    }
};