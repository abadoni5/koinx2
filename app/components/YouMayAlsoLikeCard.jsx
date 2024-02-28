import React from 'react';

const YouMayAlsoLikeCardCard = ({ coin }) => {
    return (
        <div className="card rounded-xl flex flex-col justify-center border-[1.5px] p-4 bg-white min-w-[252px] max-w-[252px] max-h-[160px] min-h-[160px] ml-4">

            <div className='flex items-center'>
                <div className='mr-2'>
                    <img className="rounded-full" src={coin.item.thumb} alt={`${coin.item.name} Thumbnail`} />
                </div>
                <div className='font-light mr-1'>{coin.item.symbol}</div>
                <div className={`flex justify-center items-center gap-2 font-light w-[4rem] py-[3px] rounded-md text-base ${coin.item.data.price_change_percentage_24h.aed < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-500'}`}>
                    {coin.item.data.price_change_percentage_24h.aed >= 0 ? '+' : '-'}
                    {Math.abs(coin.item.data.price_change_percentage_24h.aed.toFixed(1)).toLocaleString(undefined, { minimumIntegerDigits: 2 })}%
                </div>
            </div>
            <div className='mt-2 ml-1 text-l font-medium'>{coin.item.data.price}</div>

            <div className='flex justify-center'>
                <img src={coin.item.data.sparkline} alt={`${coin.item.name} Sparkline`} />
            </div>
        </div>
    );
};

export default YouMayAlsoLikeCardCard;
