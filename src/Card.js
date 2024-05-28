function Card() {
    return (
        <div className=" w-full mb-5 sm:mb-10 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-xl">
            <img src="https://course.next1code.ir/tailwind/images/image1.jpg" alt="" />
            <div className="p-4 space-y-4">
                <h1 className="font-bold text-xl dark:text-white">Noteworthly Technology acquisition 2021</h1>
                <p className="text-normal text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut at, sapiente eaque distinctio commodi animi aperiam fuga, odio, illo temporibus.</p>
                <a href="#" className="inline-flex items-center gap-2 hover:bg-blue-900 bg-blue-600 rounded-lg p-2 text-white">Read More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
export default Card;