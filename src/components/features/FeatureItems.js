import React from 'react';

function FeatureItems({ feature }) {
    if (!feature) {
        return null;
    }

    return (
        <div className="container flex pb-32 flex-col mx-auto py-3 pt-7 lg:flex-row lg:mb-0">
            {/* Image Part */}
            <div className="lg:w-1/2 justify-center px-3 flex">
                <img src={feature.img} alt={feature.title} className="relative xl:top-0 overflow-x-visible" style={{ zIndex: 10 }} />
            </div>
            {/* Content Part */}
            <div className="flex flex-col lg:space-y-10 space-y-6 mt-10 lg:mt-0 lg:pl-5 lg:w-1/2">
                <h1 className="text-2xl md:text-3xl font-semibold text-center dark:text-gray-100 lg:text-left lg:text-4xl">{feature.title}</h1>
                <p className="max-w-md mx-auto text-base md:text-lg text-center text-grayishBlue lg:text-xl dark:text-gray-200 lg:text-left lg:mt-0 lg:ml-0">{feature.descript}</p>
                <div className='mx-auto lg:mx-0'>
                    <a href="#" className="py-3 px-6 font-semibold text-white bg-softBlue text-center inline-flex lg:text-left hover:bg-white hover:border-softBlue border-2  border-white hover:text-softBlue rounded-lg">More Info</a>
                </div>
            </div>
        </div>
    )
}

export default FeatureItems;
