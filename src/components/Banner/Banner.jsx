import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const Banner = () => {
    return (
        <div className="py-24 px-28 rounded-3xl mt-14 mb-24 circle">
            <div className="flex flex-row items-center gap-20">
                <div className="w-2/3">
                    <h3 className="text-6xl font-bold mb-12" style={ { lineHeight: "84px" } }>Organize Your Bookshelf, Create Your Personal Reading Library</h3>
                    <Link to="/lists" className="btn-viewList py-4">View the List<IoIosArrowRoundForward className="w-6 h-6 move" /></Link>
                </div>
                <div className="w-2/6 stack">
                    <img src="https://media.harrypotterfanzone.com/sorcerers-stone-us-childrens-edition-2013.jpg" className="shadow-lg rounded object-contain">
                    </img><img src="https://media.harrypotterfanzone.com/chamber-of-secrets-us-childrens-edition-2013.jpg" className="shadow-lg rounded object-contain"></img>
                    <img src="https://media.harrypotterfanzone.com/prisoner-of-azkaban-us-childrens-edition-2013-1103x0-c-default.jpg" className="shadow-lg rounded object-contain"></img>
                </div>
            </div>
        </div >
    );
};

export default Banner;