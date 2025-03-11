import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/Services picture/Accounting (IFRS-US GAAP).jpeg';
import img2 from '../../../assets/Services picture/Audit.jpeg';
import img3 from '../../../assets/Services picture/Company Formation.jpg';
import img4 from '../../../assets/Services picture/Feasibility Report.jpeg';
import img5 from '../../../assets/Services picture/Financial Advisory Services.jpg';
import img6 from '../../../assets/Services picture/Foreign Co.jpg';
import img7 from '../../../assets/Services picture/Project Profile.jpeg';
import img8 from '../../../assets/Services picture/Regulatory Support.jpg';
import img9 from '../../../assets/Services picture/Taxation Services.jpeg';

const Banner = () => {
    return (
        <Carousel>
            <div>  <img src={img1} /> </div>
            <div> <img src={img2} /> </div>
            <div><img src={img3} /> </div>
            <div><img src={img4} /></div>
            <div> <img src={img5} /> </div>

            <div>  <img src={img6} /> </div>
            <div>  <img src={img7} /> </div>
            <div>  <img src={img8} /> </div>
            <div>  <img src={img9} /> </div>




        </Carousel>
    );
};

export default Banner;