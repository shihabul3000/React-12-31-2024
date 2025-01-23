import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Sheard/Footer/Footer";
import Navbar from "../Pages/Home/Home/Sheard/NavBar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;