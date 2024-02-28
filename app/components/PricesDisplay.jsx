"use client"
import React, { useEffect, useState } from 'react';
import { fetchCoinPrices } from '../utils/fetchCoinPrices';
import { numberWithCommas } from '../utils/numberWithCommas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import TradingViewWidget from './TradingViewWidget';
import styles from '../styles/PricesDisplayStyles.module.css';


const PricesDisplay = () => {
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCoinPrices();
        setPrices(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* For mobile */}
      <div className={`${styles.mobile_show} flex flex-row items-center mb-4`}>
        <div>
          <img className="h-10" src="bitcoin.png" alt="Bitcoin Logo" />
        </div>

        <div className="text-2xl font-medium ml-3">Bitcoin</div>
        <div className="ml-3 text-gray-500 font-medium"> BTC </div>
        <div className="py-4 py-[6px] px-2 ml-10 bg-gray-500 font-light text-white rounded-lg">
          Rank #1
        </div>
      </div>

      <div className="bg-white mr-4 flex flex-col justify-center rounded-lg shadow-md p-6 border-2">
        <div className={`${styles.mobile} flex flex-row items-center mb-10`}>
          <div>
            <img className="h-10" src="bitcoin.png" alt="Bitcoin Logo" />
          </div>

          <div className="text-2xl font-medium ml-3">Bitcoin</div>
          <div className="ml-3 text-gray-500 font-medium"> BTC </div>
          <div className="py-4 py-[6px] px-2 ml-10 bg-gray-500 font-light text-white rounded-lg">
            Rank #1
          </div>
        </div>

        <div className="ml-1 flex flex-row">
          {prices && <div className='text-black text-3xl font-medium'>${numberWithCommas(prices.bitcoin.usd)}.05</div>}
          {prices && <div className='bg-green-100 flex items-center gap-2 px-2 py-1 ml-8 rounded-md text-l font-regular text-green-600'><FontAwesomeIcon icon={faCaretUp} />{prices.bitcoin.usd_24h_change.toFixed(1)}%</div>}
          <p className='ml-4 text-gray-400'>(24H)</p>
        </div>

        <div className='ml-1 '>
          {prices && <div className='text-black text-l mt-2'>₹{numberWithCommas(prices.bitcoin.inr)}</div>}
        </div>
        <div>
          <div className='border-[1px] rounded-lg font-extralight mt-6 mb-6'></div>
          <p className='text-black font-semibold mb-6'>Bitcoin Price Chart (USD)</p>
          <div className='h-[47vh]'>
            <TradingViewWidget />
          </div>   
        </div>
      </div>
    </>
  );
};

export default PricesDisplay;
