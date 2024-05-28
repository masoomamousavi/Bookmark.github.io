import faceImg from '../assets/images/icon-facebook.svg';
import twittImg from '../assets/images/icon-twitter.svg';
function FooterPart() {
    return (
        <section className="flex items-center pt-14 pb-6 px-10 bg-verydarkhBlue flex-col lg:flex-row lg:justify-between space-y-10">
            <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center lg:space-x-9 space-x-0">
                <div className="logo flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-blue-900">
                        <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM6 13.25V3.5h8v9.75a.75.75 0 0 1-1.064.681L10 12.576l-2.936 1.355A.75.75 0 0 1 6 13.25Z" clip-rule="evenodd" />
                    </svg>
                    <span className="uppercase text-xl font-semibold text-white pl-1">BookMark</span>
                </div>
                <a href="#features" className="uppercase text-grayishBlue text-base">Features</a>
                <a href="#download" className="uppercase text-grayishBlue text-base">Download</a>
                <a href="#faq" className="uppercase text-grayishBlue text-base">FAQ</a>
            </div>
            <div className="flex-row flex items-center space-x-6">
                <a href="#">
                    <img src={faceImg} alt="" />
                </a>
                <a href="#">
                    <img src={twittImg} alt="" />
                </a>
            </div>
        </section>
    )
}
export default FooterPart;