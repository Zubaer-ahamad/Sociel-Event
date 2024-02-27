import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Root = () => {
    return (
        <div className="font-roboto">
            <Header></Header>
            <div className="bg-indigo-50">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;