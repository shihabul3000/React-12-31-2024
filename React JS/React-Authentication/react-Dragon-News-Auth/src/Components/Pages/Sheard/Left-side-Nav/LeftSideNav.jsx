import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categoris , setCategoris] = useState([]);
    useEffect (() =>{
        fetch('categories.json')
        .then(result =>result.json())
        .then(data => setCategoris(data))
        .catch()
    },[])
    return (
        <div className="space-y-6">
            <h2 className="text-2xl">All Categories{
                
                categoris.map(category => <Link 
                    className="block ml-4 text-xl font font-semibold "
                     key={category.id}
                     to={`/category/${category.id}`}
                     >
                        {category.name}
                        </Link>)

                
                }</h2>
        </div>
    );
}

export default LeftSideNav;