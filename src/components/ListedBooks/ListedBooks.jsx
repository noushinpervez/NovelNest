import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-center my-6">Books</h3>
            <div role="tablist" className="tabs tabs-lifted tabs-lg justify-start text-lg">
                <Link to="" onClick={ () => setTabIndex(0) } role="tab" className={ `tab ${tabIndex === 0 ? 'tab-active text-textColor/80' : 'text-textColor/50'}` }>Read Books</Link>
                <Link to="wishlist" onClick={ () => setTabIndex(1) } role="tab" className={ `tab ${tabIndex === 1 ? 'tab-active text-textColor/80' : 'text-textColor/50'}` }>Wishlist Books</Link>
                <span className="grow border-b border-textColor/15"></span>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;