// utils/fetchCoinPrices.js

import axios from 'axios';

export const fetchCoinPrices = async (token) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
                ids: token,
                vs_currencies: 'inr,usd',
                include_24hr_change: true,
                x_cg_api_key: process.env.API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
