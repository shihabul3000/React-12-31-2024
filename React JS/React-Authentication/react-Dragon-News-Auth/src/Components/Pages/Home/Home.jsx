import { useLoaderData } from "react-router-dom";
import Header from "../Sheard/Header/Header";
import LeftSideNav from "../Sheard/Left-side-Nav/LeftSideNav";
import Navbar from "../Sheard/NavBar/Navbar";
import RightSideNav from "../Sheard/Right-Side-Nav/RightSideNav";
import BreakingNews from "./Breaking-News/BreakingNews";

import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <>
        <div>
       

       <Header></Header>
       <BreakingNews></BreakingNews>
       <Navbar></Navbar>
       

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className=""><LeftSideNav ></LeftSideNav></div>


{/* News Container */}

        <div className="
       md:col col-span-2">


         {
            news.map(aNews => <NewsCard key={aNews._id}
            news ={aNews}> 


            </NewsCard> )
         }


        </div>





        <div className="b"><RightSideNav></RightSideNav></div>
    </div>

       </div>
       </>
       
    );
};

export default Home;