import { useState } from "react";
import ExtensionBox from "./ExtensionBox";
import chrome from '../assets/images/logo-chrome.svg';
import fireFox from '../assets/images/logo-firefox.svg';
import opera from '../assets/images/logo-opera.svg'
function Extensions() {
    const [extension] = useState([
        {
            id: 1,
            img: `${chrome}`,
            name: 'Chrome',
            version: '62'
        },
        {
            id: 1,
            img: `${fireFox}`,
            name: 'Firefox',
            version: '55'
        },
        {
            id: 1,
            img: `${opera}`,
            name: 'Opera',
            version: '46'
        }
    ])
    return (
        <section id="download" className=" px-3 md:px-0 mt-8 space-y-3 container mx-auto">
            <h1 className="font-semibold dark:text-gray-100 text-2xl lg:text-4xl text-center py-3">
                Download the extension
            </h1>
            <p className="font-normal text-lg dark:text-gray-200 text-grayishBlue text-center max-w-lg mx-auto">
                We've got more browsers in the pipline. Please do let us know is you've got a favourite you'de like us to proiortize.
            </p>


            <div className="mx-auto gap-5 px-3 md:px-0 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {extension.map((data) => (
                    <div key={data.id} >
                        <ExtensionBox {...data} />
                    </div>
                ))}
            </div>

        </section>
    )
}
export default Extensions;