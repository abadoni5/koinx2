import React from 'react'
import Carousel from './Carousel'

const CarouselSec = () => {
    return (
        <>
            <div className='mt-40 pb-12 flex flex-col bg-white'>
                <div className='ml-14 mt-12 mb-8 font-semibold text-2xl'>
                    You May Also Like
                </div>
                <Carousel />    
                <div className='ml-14 mt-12 mb-8 font-semibold text-2xl'>
                    Trending Coins
                </div>
                <Carousel />    
            </div>
        </>
    )
}

export default CarouselSec
