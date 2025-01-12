import { Link } from "react-router-dom";
import Navbar from "../Sheard/NavBar/Navbar";
import { useContext } from "react";
import { AuthContex } from "../../../Providers/AuthProvider";


const Register = () => {

    const {createUser } = useContext (AuthContex);


    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;

    
        console.log(name,photourl,email,password);


        // Create User
        createUser (email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })



    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Navbar />
        <div className="w-full px-4 md:w-3/4 lg:w-1/2">
            <h2 className="text-3xl font-bold my-6 text-center text-gray-800">Please Register</h2>

            <form className="bg-white shadow-md rounded-lg p-8" onSubmit={handleRegister}>



                <div className="form-control mb-4">
                    <label className="label mb-2">
                        <span className="label-text text-gray-700">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        className="input input-bordered w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                        name="name"
                    />
                </div>
                <div className="form-control mb-4">
                    <label className="label mb-2">
                        <span className="label-text text-gray-700">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your Photo URL"
                        className="input input-bordered w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                        name="photourl"
                    />
                </div>
                <div className="form-control mb-4">
                    <label className="label mb-2">
                        <span className="label-text text-gray-700">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                        name="email"
                    />
                </div>




                <div className="form-control mb-4">
                    <label className="label mb-2">
                        <span className="label-text text-gray-700">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="input input-bordered w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                        name="password"
                    />
                    <label className="label mt-2">
                        <a href="#" className="label-text-alt text-blue-500 hover:underline">Forgot password?</a>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Register
                    </button>
                </div>
            </form>
            <p className="text-center mt-2">Already Have an Account ? <Link className="text-blue-600 font-bold" to='/login'>Login </Link> </p>
        </div>
    </div>
    );
};

export default Register;