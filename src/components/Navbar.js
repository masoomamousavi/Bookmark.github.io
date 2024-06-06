import { useState, useEffect } from "react";

export function Navbar1() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('bg-black'); // Add dark background to body
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('bg-black'); // Remove dark background from body
        }
    }, [darkMode]);

    function changeHandler() {
        setDarkMode(!darkMode);
    }

    return (
        <div className="navbar dark:bg-black bg-base-100 mb-8 lg:mb-2">
            <a href="index.html">
                <div className="logo cursor-pointer z-30 flex items-center ml-10 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-blue-900 dark:text-blue-500">
                        <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM6 13.25V3.5h8v9.75a.75.75 0 0 1-1.064.681L10 12.576l-2.936 1.355A.75.75 0 0 1 6 13.25Z" clipRule="evenodd" />
                    </svg>
                    <span className="uppercase text-xl font-semibold text-gray-900 pl-1 dark:text-white">BookMark</span>
                </div>
            </a>

            <div className="flex ml-auto items-center space-x-4">
                <div className="dropdown relative lg:hidden">
                    <div tabIndex={0} role="button" className="btn dark:text-white btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dark:bg-gray-100 dropdown-content absolute z-[50] p-2 -mt-3 shadow bg-base-100 space-y-3 rounded-box w-52" style={{ left: '-280%' }}>
                        <li><a href="#features" className="tracking-widest hover:text-softRed text-md">features</a></li>
                        <li><a href="#download" className="tracking-widest hover:text-softRed text-md">Download</a></li>
                        <li><a href="#faq" className="tracking-widest hover:text-softRed">faq</a></li>
                        <li><a className="tracking-widest hover:cursor-pointer bg-softRed px-8 py-2 text-md text-white border-2 border-softRed rounded-lg text-md shadow-md hover:text-softRed hover:bg-white">Login</a></li>
                    </ul>
                </div>

                <div className="hidden lg:flex lg:text-right">
                    <ul className="menu menu-horizontal space-x-2 px-1">
                        <li><a href="#features" className='tracking-widest hover:text-softRed text-md dark:text-gray-100'>features</a></li>
                        <li><a href="#download" className='tracking-widest hover:text-softRed text-md dark:text-gray-100'>Download</a></li>
                        <li><a href="#faq" className='tracking-widest text-md hover:text-softRed dark:text-gray-100'>faq</a></li>
                        <li><a className='tracking-widest hover:cursor-pointer bg-softRed px-8 py-2 text-md text-white border-2 border-softRed rounded-lg text-md shadow-md hover:text-softRed hover:bg-white'>Login</a></li>
                    </ul>
                </div>
                <button onClick={changeHandler} className="p-1 border mr-2 dark:text-gray-100 mx-auto dark:border-gray-500 border-gray-500 rounded-md">
                    {darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-whitefont-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4  text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}

export default Navbar1;
