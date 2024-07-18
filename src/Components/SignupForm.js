import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm ({setLogin}){
  const navigate = useNavigate();
  const [formData,setFormData] = useState({firstname:"", lastname:"", email:"", createPassword:"", confirmPassword:""})

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

    if(formData.createPassword !== formData.confirmPassword){
      toast.error("Password do not match")
      return;
    }
    setLogin(true);
    toast.success("Account Created")

    const accountData = {
      ...formData,accountType
    }
    console.log(accountData);

    navigate("/dashboard");
}

 const[accountType,setAccountType] = useState("student");

    return (
          <form onSubmit={submitHandler}>
              <div className="flex gap-3 bg-richblack-800 p-1 gap-x-2 rounded-full max-w-max">
                <button className={ `${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccountType("student")}>Student</button>

                <button className={ `${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}  onClick={() => setAccountType("instructor")}>Instructor</button>
              </div>

            <div className="flex justify-start items-center gap-x-4">
              <label>
                  <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className="text-pink-200">*</sup></p>
                  <input 
                  type="text" 
                  required value={formData.firstname}
                  placeholder="Enter firstname" 
                  name="firstname"
                  onChange={changeHandler} className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]" />
              </label>
              <label>
                  <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
                  <input 
                  type="text" 
                  required value={formData.lastname}
                  placeholder="Enter lastname" 
                  name="lastname"
                  onChange={changeHandler} className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]" />
              </label>
            </div>

              <label>
                  <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-200">*</sup></p>
                  <input 
                  type="email" 
                  required value={formData.email}
                  placeholder="Enter email address" 
                  name="email"
                  onChange={changeHandler} className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]"/>
              </label>

              <br/>

            <div className="flex justify-start items-center gap-x-4">
              <label className="relative">
                  <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password <sup className="text-pink-200">*</sup></p>
                  <input 
                  type= {showPassword ? ("text") : ("password")} 
                  required value={formData.createPassword}
                  placeholder="Enter password" 
                  name="createPassword"
                  onChange={changeHandler} className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]" />

                  <span className="absolute right-2 top-[38px] cursor-pointer" onClick={passwordHandler}>
                  {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                  </span>
              </label>
              <label className="relative">
                  <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password <sup className="text-pink-200">*</sup></p>
                  <input 
                  type= {showPassword ? ("text") : ("password")} 
                  required value={formData.confirmPassword}
                  placeholder="Enter password" 
                  name="confirmPassword"
                  onChange={changeHandler} className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]"/>

                  <span className="absolute right-2 top-[38px] cursor-pointer" onClick={passwordHandler}>
                  {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                  </span>
              </label>
            </div>

              <button className=" w-full bg-yellow-50 rounded-md font-medium text-richblack-500 mt-3 p-1
              ">
                Create Account
              </button>
          </form>
    )
}
export default SignupForm;