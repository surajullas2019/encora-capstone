import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import { Toaster } from "sonner";

function LayoutWithNavbar() {
    return (
        <div className="layout-with-navbar min-h-screen flex flex-col">
            <Navbar />
            <Outlet />
            <Toaster />
        </div>
    );
}

export default LayoutWithNavbar;
