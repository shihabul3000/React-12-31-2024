import Header from "../Sheard/Header/Header";
import LeftSideNav from "../Sheard/Left-side-Nav/LeftSideNav";
import Navbar from "../Sheard/NavBar/Navbar";
import RightSideNav from "../Sheard/Right-Side-Nav/RightSideNav";
import BreakingNews from "./Breaking-News/BreakingNews";


const Home = () => {
    return (
        <>
        <div>
       

       <Header></Header>
       <BreakingNews></BreakingNews>
       <Navbar></Navbar>
       

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="border"><LeftSideNav ></LeftSideNav></div>

        <div className="
       border md:col col-span-2">
            <h2 className="text-4xl">News Comming Soon... !! </h2>
        </div>
        <div className="border"><RightSideNav></RightSideNav></div>
    </div>






























       </div>
       </>
       
    );
};

export default Home;