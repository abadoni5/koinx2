import axios from 'axios';

export const coinData = async (token) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${token}`, {
            params: {
                localisation: false,
                x_cg_api_key: process.env.API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
