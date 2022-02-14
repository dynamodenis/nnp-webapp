import React,{useState, useRef} from 'react';
import logo from '../images/logo.jpeg';
import register from '../images/register.jpeg';
import lock from '../images/lock-password.svg';
import eye from '../images/eye.png';
import eye_slash from '../images/eye-slash.jpeg';
import Vector from '../images/Vector.png';
import Button from '../partials/utils/Button';
import { Link } from 'react-router-dom';

import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../partials/utils/TextValidator'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Register() {
    const form = useRef()
    const [phone, setPhone] = useState("")
    const [mail, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const changePhone = event => {
        setPhone(event.target.value)
    }
    const changeEmail = event => {
        setEmail(event.target.value)
    }
    const changeName = event => {
        setName(event.target.value)
    }
    const changePassword = event => {
        setPassword(event.target.value)
    }
    const changeConfirmPassword = event => {
        setConfirmPassword(event.target.value)
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

    const toggleConfirmPassword = () => {
        const input = document.getElementsByClassName("myInput2")[0]
        const visibility = document.getElementsByClassName("see2")[0]
        const visibility_off = document.getElementsByClassName("unsee2")[0]

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

    const registerUser = (e) =>{
        e.preventDefault()
        const form = {phone, mail,password}
        console.log(form)
    }

    return <>
    <div className='flex flex-row justify-between h-screen'>
        <div className='sm_display_none'>
            <img src={register} alt="Login" className='h-screen w-50vh object-fit'/>
        </div>
        <div className='flex flex-col sm:m-auto border-radius-10 login-form'>
            <div className='login-form-container registration-form-container min-w-full'>
                <div className='flex flex-row ml-5 md:ml-6 pt-1'>
                    <p className='text-center text-sm md:text-lg font-semibold'>Hello There, Dairy Farmer</p>
                </div>
                <div className='flex justify-center item-center pt-1'>
                    <img src={logo} alt="" className='w-20 pt-1 pb-1'/>
                </div>
                <ValidatorForm ref={form}  onSubmit={registerUser} autoComplete='off'>
                    <div className='flex flex-col gap-3 items-center login-fields'>
                        <div>
                            <label htmlFor="phone" className='text-sm'>Phone Number</label>
                                <label className="relative block text-sm md:text-base">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <i className="fa fa-phone h-5 w-5 fill-slate-100"></i>
                                </span>
                                <TextValidator className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" placeholder="+254700000000" type="text" name="search" value={phone} onChange={changePhone} validators={['required']}
                                errorMessages={['Phone number is required']}/>
                            </label>
                        </div>

                        <div>
                            <label htmlFor="phone" className='text-sm'>Username</label>
                                <label className="relative block text-sm md:text-base">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    {/* <img src={Vector} alt="" className="h-5 w-5 fill-slate-300"/> */}
                                    <i className="fa fa-user"></i>
                                </span>
                                <TextValidator className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" placeholder="John Doe" type="text" name="search" value={name} onChange={changeName} validators={['required']}
                                errorMessages={['Phone number is required']}/>
                            </label>
                        </div>

                        <div>
                            <label htmlFor="phone" className='text-sm'>Email</label>
                                <label className="relative block text-sm md:text-base">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <img src={Vector} alt="" className="h-5 w-5 fill-slate-300"/>
                                </span>
                                <TextValidator className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" placeholder="example@gmail.com" type="email" name="search" value={mail} onChange={changeEmail} />
                            </label>
                        </div>

                        <div>
                            <label htmlFor="phone" className='text-sm'>Password</label>
                                <label className="relative block text-sm md:text-base">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <img src={lock} alt="" className="h-5 w-5 fill-slate-300"/>
                                </span>
                                <TextValidator className="myInput placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" placeholder="Password" type="password" name="search" value={password} onChange={changePassword} validators={['required']} 
                                    errorMessages={['Password is required']}/>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2" onClick={togglePassword}>
                                    <img src={eye} alt="" className="see h-5 w-5 fill-slate-300 cursor-pointer"/>
                                    <img src={eye_slash} alt="" className="unsee h-5 w-5 fill-slate-300 hidden cursor-pointer"/>
                                </span>
                            </label>
                        </div>

                        <div>
                            <label htmlFor="phone" className='text-sm'>Confirm Password</label>
                                <label className="relative block text-sm md:text-base">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <img src={lock} alt="" className="h-5 w-5 fill-slate-300"/>
                                </span>
                                <TextValidator className="myInput2 placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" placeholder="Confirm Password" type="password" name="search" value={confirmPassword} onChange={changeConfirmPassword} validators={['required']} 
                                    errorMessages={['Confirm password is required']}/>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2" onClick={toggleConfirmPassword}>
                                    <img src={eye} alt="" className="see2 h-5 w-5 fill-slate-300 cursor-pointer"/>
                                    <img src={eye_slash} alt="" className="unsee2 h-5 w-5 fill-slate-300 hidden cursor-pointer"/>
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
                        <div className='btn-container flex flex-row m-auto pt-2'>
                            <Button type="submit" class="bg-green success-btn rounded-md text-white m-auto" title="Register"/>
                        </div>
                    </div>
                </ValidatorForm>
                <div className='flex flex-row text-center pt-2 text-xs ml-5 md:ml-6 pb-4'>
                    <div>
                        <p>Already have an account? <Link to="/login" className='link'>Back to Login.</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>;
}

export default Register;
