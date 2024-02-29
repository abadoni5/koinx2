import React, { useEffect, useState } from 'react';
import { fetchCoinPrices } from '../utils/fetchCoinPrices';
import { coinData } from '../utils/coinData';
import { numberWithCommas } from '../utils/numberWithCommas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import TradingViewWidget from './TradingViewWidget';
import styles from '../styles/PricesDisplayStyles.module.css';
import { useRouter } from "next/navigation";

const PricesDisplay = ({ token }) => {
  const [coin, setCoin] = useState(null);
  const [prices, setPrices] = useState(null);
  // const [valid, setValid] = useState(true);
  // const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await coinData(token);
        setCoin(info);
        // setValid(true); // Reset valid state to true when token is successfully fetched
      } catch (error) {
        console.error('Error fetching coin data:', error);
        // setValid(false); // Set valid state to false if an error occurs
      }
    };
    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCoinPrices(token);
        setPrices(data);
        // setValid(true); // Reset valid state to true when token prices are successfully fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        // setValid(false); // Set valid state to false if an error occurs
      }
    };

    fetchData();
  }, [token]);

  // useEffect(() => {
  //   if (!valid) {
  //     router.replace("/404"); // Redirect to /404 if valid is false
  //   }
  // }, [valid]);

  if (!coin) {
    return null;
  }

  return (
    <>
      <div className='flex row mb-4 items-center ml-1 gap-2'>
        <div className='font-light text-gray-700'>
          Cyrptocurrencies
        </div>
        <div>
          <img src="angle.svg" alt="Right Arrow" />
        </div>
        <div className='text-black'>
          <a href={`/${token}`}>
            {token.charAt(0).toUpperCase() + token.slice(1)}
          </a>
        </div>
      </div>
      {/* For mobile */}
      <div className={`${styles.mobile_show} ml-1 flex flex-row items-center mb-4`}>
        <div>
          <img className="h-10" src={coin.image.thumb} alt={`${token} Logo`} />
        </div>

        <div className="text-2xl font-medium ml-3">{token.charAt(0).toUpperCase() + token.slice(1)}</div>
        <div className="ml-3 text-gray-500 font-medium"> {coin.symbol.toUpperCase()} </div>
        <div className="py-4 py-[6px] px-2 ml-8 mr-2 bg-gray-500 font-light text-white rounded-lg">
          {`Rank #${coin.market_cap_rank}`}
        </div>
      </div>

      <div className="bg-white mr-4 flex flex-col justify-center rounded-lg shadow-md p-6 border-2">
        <div className={`${styles.mobile} flex flex-row items-center mb-10`}>
          <div>
            <img className="h-10" src={coin.image.thumb} alt={`${token} Logo`} />
          </div>

          <div className="text-2xl font-medium ml-3">{token.charAt(0).toUpperCase() + token.slice(1)}</div>
          <div className="ml-3 text-gray-500 font-medium"> {coin.symbol.toUpperCase()} </div>
          <div className="py-4 py-[6px] px-2 ml-10 bg-gray-500 font-light text-white rounded-lg">
            {`Rank #${coin.market_cap_rank}`}
          </div>
        </div>

        <div className="ml-1 flex flex-row">
          {/* Render USD value */}
          {prices && (
            <div className='text-black text-3xl font-medium'>
              ${numberWithCommas(prices[token].usd)}
            </div>
          )}
          {/* Render 24h change percentage */}
          {prices && (
            <div className='bg-green-100 flex items-center gap-2 px-2 py-1 ml-8 rounded-md text-l font-regular text-green-600'>
              <FontAwesomeIcon icon={faCaretUp} />
              {prices[token].usd_24h_change.toFixed(1)}%
            </div>
          )}
          <p className='ml-4 text-gray-400'>(24H)</p>
        </div>

        <div className='ml-1 '>
          {/* Render INR value */}
          {prices && (
            <div className='text-black text-l mt-2'>
              ₹{numberWithCommas(prices[token].inr)}
            </div>
          )}
        </div>
        <div>
          <div className='border-[1px] rounded-lg font-extralight mt-6 mb-6'></div>
          <p className='text-black font-semibold mb-6'>{token.charAt(0).toUpperCase() + token.slice(1)} Price Chart (USD)</p>
          <div className='h-[47vh]'>
            {coin.symbol && <TradingViewWidget symbol={coin.symbol} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricesDisplay;
