import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password , accepted);
        

        // Reset messages
        setRegisterError("");
        setSuccess("");

        // Validate password
        if (password.length < 6) {
            setRegisterError("Password should be at least 6 characters or longer");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError("Your password should have at least one uppercase character");
            return;
        }
           
        else if (!accepted){
            setRegisterError('Please Accept out terms and condition');
            return;
        }
        // Create user
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess("User Created Successfully");
            })
            .catch((error) => {
                console.log(error);
                setRegisterError(error.message);
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg px-8 py-10 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <span
                            className="absolute top-11 right-3 text-gray-500 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ?   <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            name="terms"
                            id="terms"
                            className="mr-2"
                            required
                        />
                        <label htmlFor="terms" className="text-gray-700">
                            Accept our{" "}
                            <a
                                href="http://www.google.com"
                                className="text-blue-500 hover:underline"
                            >
                                Terms and Conditions
                            </a>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition"
                    >
                        Register
                    </button>
                </form>
                {registerError && (
                    <p className="text-red-600 mt-4 text-center">{registerError}</p>
                )}
                {success && <p className="text-green-600 mt-4 text-center">{success}</p>}
            </div>
        </div>
    );
};

export default Register;
