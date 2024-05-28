import { NavLink } from "react-router-dom";

export function Navbar1() {
    return (
        <div className="navbar bg-base-100 mb-8 lg:mb-2">
            <a href="index.html">
                <div className="logo cursor-pointer z-30 flex items-center ml-10 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-blue-900">
                        <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM6 13.25V3.5h8v9.75a.75.75 0 0 1-1.064.681L10 12.576l-2.936 1.355A.75.75 0 0 1 6 13.25Z" clip-rule="evenodd" />
                    </svg>
                    <span className="uppercase text-xl font-semibold text-gray-900 pl-1">BookMark</span>
                </div>
            </a>
            <div className="lg:navbar-start navbar-end w-full">
                <div className="dropdown relative">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content absolute z-[50] p-2 -mt-3 shadow bg-base-100 space-y-3 rounded-box w-52" style={{ left: '-280%' }}>
                        <li><a href="#features" className="tracking-widest hover:text-softRed text-md">features</a></li>
                        <li><a href="#download" className="tracking-widest hover:text-softRed text-md">Download</a></li>
                        <li><a href="#faq" className="tracking-widest hover:text-softRed">faq</a></li>
                        <li><a className="tracking-widest hover:cursor-pointer bg-softRed px-8 py-2 text-md text-white border-2 border-softRed rounded-lg text-md shadow-md hover:text-softRed hover:bg-white">Login</a></li>
                    </ul>
                </div>

            </div>
            <div className="navbar-end  hidden lg:flex lg:max-w-screen-lg">
                <ul className="menu menu-horizontal w-full space-x-0 lg:space-x-2 px-1">
                    <li><a href="#features" className='tracking-widest hover:text-softRed text-md'>features</a></li>
                    <li> <a href="#download" className='tracking-widest hover:text-softRed text-md'>Download</a></li>
                    <li> <a href="#faq" className='tracking-widest text-md hover:text-softRed'>faq</a></li>
                    <li> <a className='tracking-widest hover:cursor-pointer bg-softRed px-8 py-2 text-md text-white border-2 border-softRed rounded-lg text-md shadow-md hover:text-softRed hover:bg-white'>Login</a></li>
                </ul>
            </div>

        </div>
    );
}

export default Navbar1;


