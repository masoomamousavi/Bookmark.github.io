function Newsletter() {
    return (
        <section className="w-full bg-softBlue text-white pt-20 flex flex-col space-y-3 mt-32 py-7 px-3">
            <p className="text-lg-uppercase-font-semibold py-3 tracking-widest text-center">35,000+ Already joined</p>
            <h3 className="text-center font-bold text-xl lg:text-2xl pb-5">Stay up-to-date with what we're doing</h3>
            <form action="" className="flex w-full flex-col justify-center items-start mx-auto md:flex-row md:mx-0 space-y-6 text-base px-6 md:space-x-4 md:space-y-0 md:0">
                <div className="flex flex-col max-w-2xl justify-between items-center mx-auto md:flex-row ">
                    <input type="text"
                        className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0"
                        placeholder="Enter your email address"
                    />
                    <input type="submit"
                        className="inline-flex px-6 py-3 font-semibold text-center duration-200 transform cursor-pointer bg-softRed rounded-lg  hover:opacity-90 focus:outline-none md:mr-3 md:mb-0"
                        placeholder="Enter your email address"
                    />
                </div>
            </form>
        </section>
    )
}
export default Newsletter;