
import { useState } from "react";
import Card from "./Card";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    function changeHandler() {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark')

        } else {
            document.documentElement.classList.add('dark')
        }
    }
    return (
        <>
            <div className=" p-5 md:pb-10 pb-5 text-center">
                <button onClick={changeHandler} className="p-2 dark:text-gray-100 dark:border-gray-700 border border-grey-400 rounded-md">
                    {
                        darkMode ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>

                    }
                </button>
            </div>
            <div className="mx-auto md:px-10 px-5">
                <div className="grid justify-around grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}
export default App;
