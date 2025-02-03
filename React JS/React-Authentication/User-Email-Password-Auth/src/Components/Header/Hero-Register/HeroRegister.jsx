import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase.config";
import { useState } from "react";
import { FaEye , FaEyeSlash } from 'react-icons/fa';

const HeroRegister = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const[showPassword , setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault(); // Prevent form reload

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // Reset messages
        setRegisterError('');
        setSuccess('');

        // Validate password
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character');
            return;
        }

        // Create user
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess('User created successfully');
            })
            .catch((error) => {
                console.log(error);
                setRegisterError(error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                                name="email"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" :"password"}
                                placeholder="password"
                                className="input input-bordered"
                                required
                                name="password"
                            />
                            <span onClick={()=> setShowPassword(!showPassword)}>
                                {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                                </span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">
                                Register
                            </button>
                        </div>
                    </form>
                    {registerError && <p className="text-red-800">{registerError}</p>}
                    {success && <p className="text-green-900">{success}</p>}
                </div>
            </div>
        </div>
    );
};

export default HeroRegister;
