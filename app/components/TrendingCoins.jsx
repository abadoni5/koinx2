"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { fetchTrendingCoins } from '../utils/trendingCoins';

const TrendingCoins = () => {
    const [trendingCoins, setTrendingCoins] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const coins = await fetchTrendingCoins();
                setTrendingCoins(coins);
            } catch (error) {
                console.error('Error fetching trending coins:', error);
            }
        };

        fetchData();
    }, []);

    const top3TrendingCoins = trendingCoins.slice(0, 3);

    return (
        <div className="flex flex-col border-2 rounded-lg mt-4 bg-white p-3">
            <div className='text-xl md:text-2xl font-medium ml-4 mb-6'>Trending Coins (24h)</div>
            {top3TrendingCoins.map((coin) => (
                <div key={coin.item.id} className="pl-4 mb-3 flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={coin.item.thumb} alt={`${coin.item.name} Thumbnail`} className="h-6 mr-3 rounded-full" />
                        <div className="font-medium">{coin.item.name} ({coin.item.symbol})</div>
                    </div>
                    <div className={`flex items-center gap-2 px-2 w-[6rem] py-1 rounded-md text-base ${coin.item.data.price_change_percentage_24h.aed < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                        {coin.item.data.price_change_percentage_24h.aed < 0 ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
                        {Math.abs(coin.item.data.price_change_percentage_24h.aed.toFixed(1)).toLocaleString(undefined, { minimumIntegerDigits: 2 })}%
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrendingCoins;
