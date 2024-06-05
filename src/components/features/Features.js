import FeatureItems from "./FeatureItems";
import { useState } from 'react'
import Tab1 from '../../assets/images/illustration-features-tab-1.svg'
import Tab2 from '../../assets/images/illustration-features-tab-2.svg'
import Tab3 from '../../assets/images/illustration-features-tab-3.svg'
import './Feature.css'

function Features() {
    const [activate, setActivate] = useState(1);
    const [data] = useState([
        {
            id: 1,
            title: 'Bookmark in one click',
            descript: 'Oraganize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourie sites',
            img: `${Tab1}`
        },
        {
            id: 2,
            title: 'Intelligent Search',
            descript: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks',
            img: `${Tab2}`
        },
        {
            id: 3,
            title: 'Share your bookmarks',
            descript: 'Easily share your bookmarks and collections with others. Creat a sharable link that you can send at the link of a button',
            img: `${Tab3}`
        }
    ]);

    function tabHandler(id) {
        setActivate(id);
    }

    const activeFeature = data.find(feature => feature.id === activate);

    return (
        < section id="features">
            <div className="container mx-auto mt-24">
                <h1 className="font-semibold text-2xl lg:text-4xl text-center py-3 dark:text-gray-100">Features</h1>
                <p className=" font-normal text-lg text-grayishBlue text-center max-w-md mx-auto dark:text-gray-200">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go</p>
                {/* Feature Items Part */}
                <div className="container mx-auto relative my-6 mt-12 px-6">
                    <div className="back-tabs"></div>
                    <div className="flex flex-col justify-center max-w-2xl border-b mx-auto mb-6 md:space-x-10 md:flex-row">
                        {/* first feature */}
                        <div className="border-gray-300 dark:border-gray-100 cursor-pointer bordr-b  justify-center text-center text-gray-600 md:border-b-0 m flex md:w-1/3" onClick={() => tabHandler(1)} >
                            <div className={`text-xl py-5  hover:text-softRed text-gray-800  dark:text-gray-100 ${activate === 1 ? `border-b-4 border-softRed` : ''}`}>Simple Bookmarking</div>
                        </div>
                        {/* second feature */}
                        <div className='border-gray-300 cursor-pointer justify-center text-center text-gray-600  md:border-b-0 m flex md:w-1/3' onClick={() => tabHandler(2)} id="div2">
                            <div className={`text-xl py-5  hover:text-softRed text-gray-800 dark:text-gray-100 ${activate === 2 ? `border-b-4 border-softRed` : ''}`}>Speedy Searching</div>
                        </div>
                        {/* third feature */}
                        <div className='border-gray-300 cursor-pointer justify-center text-center text-gray-600 md:border-b-0 m flex md:w-1/3' onClick={() => tabHandler(3)} >
                            <div className={`text-xl py-5  hover:text-softRed text-gray-800 dark:text-gray-100 ${activate === 3 ? `border-b-4 border-softRed` : ''}`}>Easy Sharing</div>
                        </div>
                    </div>
                </div>
            </div>
            <FeatureItems feature={activeFeature} />
        </section>
    )
}

export default Features;
