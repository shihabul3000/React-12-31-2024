import { useParams } from "react-router-dom";
import Header from "../Sheard/Header/Header";
import RightSideNav from "../Sheard/Right-Side-Nav/RightSideNav";
import Navbar from "../Sheard/NavBar/Navbar";


const News = () => {

    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className="grid md:grid-cols-4">

<div className="col-span-3">


<h2 className="text-5xl">This is News Details Page</h2>


</div>


        {/* Right Side Nav */}
        <div>
            <RightSideNav></RightSideNav>
        </div>
        {/* Right Side Nav */}    


            </div>
            
        </div>
    );
};

export default News;