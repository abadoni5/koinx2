"use client"
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouMayAlsoLikeCard from './YouMayAlsoLikeCard';
import { fetchTrendingCoins } from '../utils/trendingCoins';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TrendingCoinsCarousel = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
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

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff", borderRadius: "50%", width: "40px", height: "40px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", cursor: "pointer", zIndex: "1", }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faAngleRight} style={{ color: "gray", fontSize: "20px", }} />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff", borderRadius: "50%", width: "40px", height: "40px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", cursor: "pointer", zIndex: "1", }}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faAngleLeft} style={{ color: "gray", fontSize: "20px" }} />
            </div>
        );
    }
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7, // Default slidesToShow
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 6, // Adjusted slidesToShow for breakpoint
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1650,
                settings: {
                    slidesToShow: 5, // Adjusted slidesToShow for breakpoint
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    };

    return (
        <div className="slider-container overflow-hidden px-12">
            <Slider {...settings}>
                {trendingCoins.map((coin) => (
                    <div key={coin.id}>
                        <YouMayAlsoLikeCard coin={coin} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TrendingCoinsCarousel;
