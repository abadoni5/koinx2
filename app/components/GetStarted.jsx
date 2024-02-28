import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const GetStarted = () => {
    return (
        <>
            <div className='rounded-2xl bg-blue-700 flex flex-col items-center pb-8 pl-8 pr-8'>
                <div className='text-2xl font-semibold text-white text-center mt-8'>Get Started with KoinX</div>
                <div className='flex font-semibold text-2xl text-white text-center mt-3'>for FREE</div>
                <div className='font-light text-white text-align-center flex justify-center items-center h-full mt-4'>
                    <p className="text-center max-w-md">
                        With our range of features that you can equip for free,
                        KoinX allows you to be more educated and aware of your tax reports.
                    </p>
                </div>


                <div className='flex mt-6 mb-4'>
                    {/* Change */}
                    <img src="frame.svg" alt="Get Started Image" />
                </div>
                <div className='bg-white flex flex-row font-medium mb-4 rounded-lg py-3 px-8'>
                    <div>
                        <button>
                            Get Started for FREE
                        </button>
                    </div>
                    <div className='flex items-center ml-3'>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetStarted
