import Navbar1 from "../../components/Navbar";
import heroImag from '../../assets/images/illustration-hero.svg'
import './Home.css'
import Features from "../../components/features/Features";
import Extensions from "../../components/Extensions";
import Faq from "../../components/Faq";
import FooterPart from "../../components/FooterPart";
import Newsletter from "../../components/Newsletter";

function Home() {
    return (
        <div className="overflow-hidden">
            <Navbar1 />
            {/* Fisrt Section */}
            <section className="container flex flex-col-reverse mx-auto px-6 py-3 lg:flex-row lg:mb-0">
                {/* Content Part */}
                <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
                    <h1 className="text-3xl font-semibold text-center lg:text-left lg:text-5xl dark:text-gray-100">A Simple BookMark Manger</h1>
                    <p className="max-w-md mx-auto text-lg text-center text gray-400 lg:text-xl px-2 md:px-0 dark:text-gray-200 lg:text-left lg:mt-0 lg:ml-0">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instatntly. Try it for free.</p>
                    <div className="flex items-center justify-center lg:justify-start space-x-5">
                        <a href="#" className="p-3 text-white bg-softBlue hover:bg-white hover:border-softBlue border-2 hover:text-softBlue rounded-md border-softBlue">Get in Chrome</a>
                        <a href="#" className="p-3 text-black bg-gray-300 hover:bg-white hover:border-gray-300 border-2 hover:text-gray-700 rounded-md border-gray-300 dark:bg-gray-100">Get in Safari</a>
                    </div>
                </div>
                {/* Image Part */}
                <div className="lg:w-1/2 relative mx-auto lg:mx-0 lg:mb-0">
                    <div className="back-div "></div>
                    <img src={heroImag} alt="" className=" lg:top-24 dark:shadow-black relative xl:top-0 overflow-x-visible" style={{ zIndex: 10 }} />
                </div>
            </section>
            <Features />
            <Extensions />
            <Faq />
            <Newsletter />
            <FooterPart />
        </div>
    )
}
export default Home;