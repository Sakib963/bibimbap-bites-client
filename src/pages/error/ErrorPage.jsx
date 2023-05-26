import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import errorImage from "../../assets/images/error-page.png"

const ErrorPage = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <div>
                {/* Error Image (Main Requirement) */}
                <img src={errorImage} alt="" className="w-2/4 mx-auto"/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;