import { useState, useRef } from "react";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const emailRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Reset message
        setMessage("");
        setMessageType("");

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setMessage("Successfully logged in!");
                setMessageType("success");
                
                if(result){
                    setMessage("User Logged in SuccessFully ")
                }
                else{
                    alert("Please Verify Your Email")
                }
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    setMessage("Your account is not registered. Please register.");
                } else if (error.code === "auth/wrong-password") {
                    setMessage("Incorrect username or password.");
                } else {
                    console.error("Unhandled error:", error);
                    setMessage("An unknown error occurred. Please try again later.");
                }
                setMessageType("error");
            });
    };

    const handleForgetPassword = () => {
        if (!emailRef.current) {
            console.error("Email input field is not available.");
            return;
        }

        const email = emailRef.current.value;
        if (!email) {
            console.log("Please provide an email.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            console.log("Please write a valid email.");
            return;
        }

        console.log("Send Reset Email:", email);
        // Add functionality to send reset email here


        // Send Validation Email

        sendPasswordResetEmail(auth , email)
        .then( () => {
            alert('Please Check Your Email !!')
        } )
        .catch(error =>{
            console.log(error)
        })


    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    
                    <form className="card-body" onSubmit={handleLogin}>
                        {message && (
                            <div
                                className={`text-center mb-4 p-2 rounded ${
                                    messageType === "success"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                }`}
                            >
                                {message}
                            </div>
                        )}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                ref={emailRef}
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a
                                    onClick={handleForgetPassword}
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>
                        New to this Website? Please <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
