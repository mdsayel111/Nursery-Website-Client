import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
 

    return (
        <div>
            <Navbar />
            <div className="w-[90%] mx-auto">
                <Outlet />
            </div>
            <Footer />
            
        </div>
    );
};

export default MainLayout;