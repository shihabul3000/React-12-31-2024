import { FcGoogle } from "react-icons/fc";
import { FaGithub , FaFacebook , FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import qZone1 from '../../../../assets/swimming.png'
import qZone2 from '../../../../assets/class.png'
import qZone3 from '../../../../assets/playground.png'

const RightSideNav = () => {
    return (
        <>
        <div className="p-4 space-y-3 mb-6">
         <h2 className="text-3xl">Login With</h2>
         
         <button className="btn btn-outline w-full"><FcGoogle></FcGoogle>Google</button>
         
         <button className="btn btn-outline w-full"><FaGithub></FaGithub>GitHub</button>
        </div>


        <div className="p-4 space-y-3 mb-6">
         <h2 className="text-3xl">Find Us On</h2>
         
         <a className="p-4 flex text-lg items-center border rounded top-lg" href=""><FaFacebook className="mr-3" />Facebook</a>

         <a className="p-4 flex text-lg items-center border rounded top-lg" href=""><RiTwitterXFill className="mr-3" />Twitter</a>

         <a className="p-4 flex text-lg items-center border rounded top-lg" href="">< FaInstagram className="mr-3" />Instagram</a>



{/*  Q Zone*/}

<div className="p-4 space-y-3 mb-6">
         <h2 className="text-3xl">Q Zone</h2>
         <img src={qZone1} alt="" />
         <img src={qZone2} alt="" />
         <img src={qZone3} alt="" />
        


        </div>
        
       





        </div>


















        </>
    );
};

export default RightSideNav;