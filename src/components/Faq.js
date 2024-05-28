function Faq() {
    return (
        <section id="faq" className=" px-3 md:px-0 mt-32 lg:mt-40 flex flex-col space-y-3">
            <h1 className="font-semibold text-2xl lg:text-4xl text-center py-3">Frequently Asked Questions</h1>
            <p className=" font-normal text-lg text-grayishBlue text-center max-w-md mx-auto">Here are some of our FAQs. If you have any other questions you'like answered please feel free to email us.</p>
            {/* main container of Faqs */}
            <div className="container mb-32 px-6 mx-auto">
                {/* Accordination Container */}
                <div className="max-w-2xl m-8 mx-auto overflow-hidden">
                    {/* tab 1 */}
                    <div className="py-1 border-b outline-none group" tabIndex='1'>
                        {/* tab flex container */}
                        <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor pointer group ease">
                            {/* Tab Title */}
                            <div className="transition duration-500 ease group-hover:text-red-500">
                                What is Bookmark?
                            </div>
                            {/* Arrow */}
                            <div className="transition duration-500 ease group-focus:rotate-180 group-focus:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p className="py-2 text-justify text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur voluptatem ad tenetur dignissimos quasi! Mollitia atque accusantium dignissimos odio accusamus, deleniti incidunt qui sit, neque consectetur quod laborum ad.
                            </p>
                        </div>
                    </div>
                    {/* tab 2 */}
                    <div className="py-1 border-b outline-none group" tabIndex='2'>
                        {/* tab flex container */}
                        <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor pointer group ease">
                            {/* Tab Title */}
                            <div className="transition duration-500 ease group-hover:text-red-500">
                                How can I request a new browser?
                            </div>
                            {/* Arrow */}
                            <div className="transition duration-500 ease group-focus:rotate-180 group-focus:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p className="py-2 text-justify text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur voluptatem ad tenetur dignissimos quasi! Mollitia atque accusantium dignissimos odio accusamus, deleniti incidunt qui sit, neque consectetur quod laborum ad.
                            </p>
                        </div>
                    </div>
                    {/* tab 3 */}
                    <div className="py-1 border-b outline-none group" tabIndex='3'>
                        {/* tab flex container */}
                        <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor pointer group ease">
                            {/* Tab Title */}
                            <div className="transition duration-500 ease group-hover:text-red-500">
                                Is there any mobile app?
                            </div>
                            {/* Arrow */}
                            <div className="transition duration-500 ease group-focus:rotate-180 group-focus:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p className="py-2 text-justify text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur voluptatem ad tenetur dignissimos quasi! Mollitia atque accusantium dignissimos odio accusamus, deleniti incidunt qui sit, neque consectetur quod laborum ad.
                            </p>
                        </div>
                    </div>
                    {/* tab 4 */}
                    <div className="py-1 border-b outline-none group" tabIndex='4'>
                        {/* tab flex container */}
                        <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor pointer group ease">
                            {/* Tab Title */}
                            <div className="transition duration-500 ease group-hover:text-red-500">
                                What about other Chromium browsers?
                            </div>
                            {/* Arrow */}
                            <div className="transition duration-500 ease group-focus:rotate-180 group-focus:text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                            <p className="py-2 text-justify text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur voluptatem ad tenetur dignissimos quasi! Mollitia atque accusantium dignissimos odio accusamus, deleniti incidunt qui sit, neque consectetur quod laborum ad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto'>
                <a href="#" className="py-3 px-6 font-semibold text-white bg-softBlue text-center inline-flex hover:bg-white hover:border-softBlue border-2  border-white hover:text-softBlue rounded-lg">More Info</a>
            </div>

        </section>
    )
}
export default Faq;