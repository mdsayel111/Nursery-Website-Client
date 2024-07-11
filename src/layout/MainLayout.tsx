import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="w-[90%] mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;