import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center text-2xl lg:text-3xl font-bold flex-col justify-center text-center gap-8">
            <div>
                <h3>OOPS! PAGE NOT FOUND</h3>
                <p className="font-medium text-xl lg:text-2xl mt-4">THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST.</p>
            </div>
            <Link to="/" className="btn-primary-dark py-4">GO TO HOMEPAGE<IoIosArrowRoundForward className="w-6 h-6 move" /></Link>
        </div>
    );
};

export default ErrorPage;