import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const Root = () => {
    return (
        <div className="flex flex-row">
            <div>
                <SideBar></SideBar>
            </div>
            <div className="flex flex-col">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;