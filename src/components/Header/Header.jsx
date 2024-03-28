import { NavLink, Link } from "react-router-dom";

const Header = () => {
    const activeLinkStyle = {
        color: "#191D30",
        background: "#f9f8fc",
        border: "2px solid #100E2D",
        fontWeight: 600,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        transition: "all ease-in-out",
    };

    const links = (
        <>
            <li><NavLink to="/" style={ ({ isActive }) => {
                return isActive ? activeLinkStyle : {};
            } }>Home</NavLink></li>
            <li><NavLink to="/lists" style={ ({ isActive }) => {
                return isActive ? activeLinkStyle : {};
            } }>Listed Books</NavLink></li>
            <li><NavLink to="/statistics" style={ ({ isActive }) => {
                return isActive ? activeLinkStyle : {};
            } }>Pages Read</NavLink></li>
        </>
    );

    return (
        <nav className="navbar mt-3 lg:mt-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={ 0 } role="button" className="pl-0 btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={ 0 } className="menu menu-md dropdown-content z-10 rounded-box min-w-max bg-primaryColor text-neutral-50 text-base">
                        { links }
                    </ul>
                </div>
                <div className="flex">
                    <Link to="/" className="btn btn-ghost p-0 text-2xl lg:text-3xl font-bold hover:bg-transparent"><img src="/images/owl.png" className="h-8 w-8"></img>NovelNest</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4">
                    { links }
                </ul>
            </div>
            <div className="navbar-end gap-4 hidden lg:flex">
                <a className="btn-primary-white">Sign In</a>
                <a className="btn-primary-dark">Sign Up</a>
            </div>
        </nav>
    );
};

export default Header;