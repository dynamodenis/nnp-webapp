import React,{useState} from 'react';
import login from '../images/login.jpg';
import logo from '../images/logo.jpeg';
import lock from '../images/lock-password.svg';
import Button from '../partials/utils/Button';
import eye from '../images/eye.png';
import eye_slash from '../images/eye-slash.jpeg';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

function Login() {
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    toast.error("Wow so easy!");

    const changePhone = event => {
        setPhone(event.target.value)
    }

    const changePassword = event => {
        setPassword(event.target.value)
    }

    const loginUser = (e) =>{
        e.preventDefault()
        const form = {phone, password}
        console.log(form)
    }

    const togglePassword = () => {
        const input = document.getElementsByClassName("myInput")[0]
        const visibility = document.getElementsByClassName("see")[0]
        const visibility_off = document.getElementsByClassName("unsee")[0]

        if (input.type ==='password'){
            input.type = "text"
            visibility.style.display = "none"
            visibility_off.style.display = "block"
        }else {
            input.type = "password"
            visibility.style.display = "block"
            visibility_off.style.display = "none"
        }
    }

    return <>
    <div className='flex flex-row justify-between h-screen'>
        <div className='flex flex-col sm:m-auto border-radius-10 login-form'>
            <div className='login-form-container min-w-full'>
                <div className='flex justify-center item-center pt-1'>
                    <img src={logo} alt="" className='w-20 pt-1 pb-1'/>
                </div>
                <form onSubmit={loginUser} autoComplete='off'>
                    <div className='flex flex-col gap-3 items-center login-fields'>
                        <div>
                            <label htmlFor="phone" className='text-sm'>Phone Number</label>
                                <label className="relative block text-sm md:text-base">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    {/* <img src={phone} alt="" className="h-5 w-5 fill-slate-300"/> */}
                                    <i className="fas fa-mobile-alt h-5 w-5 fill-slate-300"></i>
                                </span>
                                <input required className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" placeholder="+254700000000" type="text" name="search" value={phone} onChange={changePhone}/>
                            </label>
                        </div>
                        <ToastContainer />
                        <div>
                            <label htmlFor="phone" className='text-sm'>Password</label>
                                <label className="relative block text-sm md:text-base">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <img src={lock} alt="" className="h-5 w-5 fill-slate-300"/>
                                </span>
                                <input required className="myInput placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" placeholder="Password" type="password" name="search" value={password} onChange={changePassword}/>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2" onClick={togglePassword}>
                                    <img src={eye} alt="" className="see h-5 w-5 fill-slate-300 cursor-pointer"/>
                                    <img src={eye_slash} alt="" className="unsee h-5 w-5 fill-slate-300 hidden cursor-pointer"/>
                                </span>
                            </label>
                        </div>
                        <div className='flex flex-row margin-left--6rem  gap-4'>
                            <div className='space-x-4'>
                                <input type="checkbox" name='check' className='appearance-none checked:green '/>
                            </div>
                            <div>
                                <label htmlFor="check" className='text-sm'>Keep me logged in</label>
                            </div>
                        </div>
                    </div>
                    <div>
                    <Link to="/dashboard">
                        <div className='btn-container flex flex-row m-auto pt-2'>
                            <Button type="submit" class="bg-green success-btn rounded-md text-white m-auto" title="Login"/>
                        </div>
                        </Link>
                    </div>
                </form>
                <div className='flex flex-row text-center pt-2 text-xs ml-5 md:ml-6'>
                    <div>
                        <p>Don't have an account yet! <Link to="/register" className='link'>Register as a farmer.</Link></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='sm_display_none'>
            <img src={login} alt="Login" className='h-screen w-50vh object-fit'/>
        </div>
    </div>
    </>;
}

export default Login;
