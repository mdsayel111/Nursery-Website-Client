import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import BasicModal from "../components/shared/modal/Modal";
import { useState } from "react";
import { useAppDispatch } from "../lib/redux/hooks";

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