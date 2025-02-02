import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import MenuItem from "../Home/Sheard/MenueItem/MenuItem";

const PopulerMenue = () => {
    const [nenu , setMenu] = useState([]);
    useEffect( () =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => 
            {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems) 
            
            
            }[])
    } ,[])
    return (
        <section>
            <SectionTitle
            
            heading="From Our Menu"
            subHeading="Popular Items"

            
            
            />
            <div>
                {
                    menu.map(item => <MenuItem
                    
                        key ={item._id}
                        item ={item}
                    
                    ></MenuItem> )
                }
            </div>
        </section>
    );
};

export default PopulerMenue;