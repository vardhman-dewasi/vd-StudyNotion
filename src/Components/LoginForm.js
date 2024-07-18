import { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

function LoginForm({setLogin}){
    const navigate = useNavigate()
    const [formData,setFormData] = useState({email:"",password:""})

   function changeHandler(event){
        setFormData((prevData) => (
           {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    const [showPassword,setShowPassword] = useState(false);
    
    function passwordHandler(){
        setShowPassword(!showPassword);
    }

    function submitHandler(event){
        event.preventDefault();
        setLogin(true);
        toast.success("Logged In")
        navigate("/dashboard")
    }

    return(
       <form onSubmit={submitHandler} className="flex flex-col w-full mt-6">
        <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-200">*</sup></p>
            <input 
            type="email" 
            required value={formData.email}
            placeholder="Enter email address" 
            name="email"
            onChange={changeHandler} className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]" />
        </label>

        <br/>

        <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password <sup className="text-pink-200">*</sup></p>
            <input 
            type= {showPassword ? ("text") : ("password")} 
            required value={formData.password}
            placeholder="Enter password" 
            name="password"
            onChange={changeHandler} className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]" />

            <span className="absolute right-2 top-[38px] cursor-pointer" onClick={passwordHandler}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
            </span>
        </label>

        <Link to="#">
            <p className=" text-xs mt-1 text-blue-100 max-w-max ml-auto">
                Forgot Password
            </p>
        </Link>
        <button className="bg-yellow-50 rounded-md font-medium text-richblack-500 mt-2 p-1">
            Sign in
        </button>
       </form> 
    )
}
export default LoginForm;