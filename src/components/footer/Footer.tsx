import { NavLink } from "react-router-dom";
import Logo2 from "../logo/Logo2";

const Footer = () => {
    return (


        <footer className="bg-primary rounded-lg shadow-black mt-16 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <NavLink to="/">
                        <Logo2 />

                    </NavLink>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                <span className="block text-sm text-white sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Nursery™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    );
};

export default Footer;