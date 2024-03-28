import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const Banner = () => {
    return (
        <div className="p-6 lg:py-24 lg:px-28 rounded-3xl mt-6 lg:mt-14 mb-12 lg:mb-24 circle relative">
            <div className="absolute top-1/2 left-[40%] w-[25%] h-[15%] lg:w-[20%] lg:h-[40%] blur-2xl bg-green rounded-full mix-blend-multiply animate-blob filter opacity-70  animation-delay-4000"></div>
            <div className="absolute top-1/3 left-1/2 w-[25%] h-[15%] lg:w-[15%] lg:h-[30%] blur-2xl bg-purple rounded-full mix-blend-multiply animate-blob filter opacity-70  animation-delay-8000"></div>
            <div className="absolute top-1/3 right-1/2 w-[25%] h-[15%] lg:w-[25%] lg:h-[50%] blur-2xl bg-yellow rounded-full mix-blend-multiply animate-blob filter opacity-70 animation-delay-12000"></div>
            <div className="absolute bottom-1/2 left-[40%] w-[25%] h-[15%] lg:w-[20%] lg:h-[40%] blur-2xl bg-pink rounded-full mix-blend-multiply animate-blob filter opacity-70"></div>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20 justify-center">
                <div className="lg:w-2/3 text-center lg:text-left">
                    <h3 className="text-4xl lg:text-6xl font-bold mb-12 lg:leading-[84px]">Organize Your Bookshelf, Create Your Personal Reading Library</h3>
                    <Link to="/lists" className="btn-viewList py-4">View the List<IoIosArrowRoundForward className="w-6 h-6 move" /></Link>
                </div>
                <div className="w-1/2 lg:w-1/3 stack -rotate-6">
                    <img src="https://media.harrypotterfanzone.com/sorcerers-stone-us-childrens-edition-2013.jpg" className="shadow-lg rounded-xl object-contain">
                    </img><img src="https://media.harrypotterfanzone.com/chamber-of-secrets-us-childrens-edition-2013.jpg" className="shadow-lg rounded-xl object-contain"></img>
                    <img src="https://media.harrypotterfanzone.com/prisoner-of-azkaban-us-childrens-edition-2013-1103x0-c-default.jpg" className="shadow-lg rounded-xl object-contain"></img>
                </div>
            </div>
        </div >
    );
};

export default Banner;