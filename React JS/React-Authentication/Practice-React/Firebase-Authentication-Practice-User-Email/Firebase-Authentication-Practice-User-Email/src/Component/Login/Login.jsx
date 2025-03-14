import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import auth from "../../firebase.config";
import { FaRegEye , FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";


const Login = () => {

const [showPassword , setShowPassword] = useState(false);




 const handleLogin = (e) => {
    e.preventDefault ();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email , password);

 

    signInWithEmailAndPassword (auth , email , password)
    .then(result => {
        console.log(result.user)
    })
    .catch(error => {
        console.log(error)
    })



 }


    
    return (
       <>
   
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">



      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>



          <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
         
         <span onClick={() =>setShowPassword(!showPassword)}> {showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>} </span>



          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>




    </div>
  </div>
</div>
    


















       
       </>
    );
};

export default Login;