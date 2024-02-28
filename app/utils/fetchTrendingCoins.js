import axios from 'axios';

export const fetchTrendingCoins = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending', {
            params: {
                x_cg_api_key: process.env.API_KEY 
            }
        });
        return response.data.coins;
    } catch (error) {
        console.error('Error fetching trending coins:', error);
        throw error;
    }
};
