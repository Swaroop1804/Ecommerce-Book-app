import React,{useState} from 'react'
import loginSignupImage from "../assest/login-animation.gif"
import {BiShow,BiHide} from "react-icons/bi"
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const [showPassword,setShowPassword]=useState(false);
    // const [showConfirmPassword,setConfirmPassword]=useState(false);
    const [data,setData]=useState({
        email:"",
        password:"",
    }
    );
    const navigate=useNavigate()
    console.log(data)
    const handleShowPassword =()=>{
        setShowPassword(preve =>!preve)
    };
    // const handleShowConfirmPassword =()=>{
    //     setConfirmPassword(preve =>!preve)
    // }
    const handleOnChange =(e)=>{
        const {name,value}=e.target
        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        if (email && password) {
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const dataRes = await fetchData.json();
          console.log(dataRes);
      
          if (!dataRes.alert) {
            navigate("/");
          }
        } else {
          alert("please enter required fields");
        }
      };
      
  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
            <div className='w-20 '>
                <img src={loginSignupImage} className="w-full" />
            </div>
        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
            

            <label htmlFor='email'>Email</label>
            <input type={"email"} id="email" name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'
             value={data.email}
             onChange={handleOnChange}
             />
            
            <label htmlFor='password'>Password</label>
            <div className='flex px-2 py-1 bg-slate-200 mt-1 mb-2 rounded focus-within:outline-blue-300'>
            <input type={showPassword ? "text":"password"} id="password" name='password' className=' w-full bg-slate-200 px-2 py-1 border-none outline-none'
             value={data.password}
             onChange={handleOnChange}
             />
            <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ?<BiShow/>:<BiHide/>}</span>
            </div>

           

            <button className='w-full max-w-[120px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Login</button>

        </form>
        <p className="text-left text-sm mt-2">Don't Have an account ? <Link to={"/signup"} className="text-red-500 underline">Sign up</Link></p>
        </div>

    </div>
  )
}

export default Login