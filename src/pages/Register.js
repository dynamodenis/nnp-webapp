import React,{useState, useRef} from 'react';
import logo from '../images/logo.jpeg';
import register_logo from '../images/login-logo.png';
import lock from '../images/lock-password.svg';
import eye from '../images/eye.png';
import eye_slash from '../images/eye-slash.jpeg';
import Vector from '../images/Vector.png';
import Button from '../partials/utils/Button';
import { Link,useHistory } from 'react-router-dom';

import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../partials/utils/TextValidator'
// Redux
import {connect} from 'react-redux'
import {registerUser} from '../redux/actions/auth'


function Register(props) {
    const history = useHistory();
    const {registerUser, isLoading, registration} = props
    const form = useRef()
    const [phone, setPhone] = useState("")
    const [mail, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [match, setMatch] = useState(true)
    const [type, setType] = useState("")
    const [otpTo, setOtpTo] = useState("")

    const changePhone = event => {
        
        setPhone(event.target.value)
    }
    const changeEmail = event => {
        setEmail(event.target.value)
    }
    const changeName = event => {
        setName(event.target.value)
    }
    const changeType = event => {
        setType(event.target.value)
    }
    const changeOtpTo = event => {
        setOtpTo(event.target.value)
    }
    const changePassword = event => {
        setPassword(event.target.value)
    }
    const changeConfirmPassword = event => {
        if (event.target.value !== password){
            setMatch(false)
        }else {
            setMatch(true)
        }
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

    const register = (e) =>{
        e.preventDefault()
        const slice_number = phone.slice(-9);
        const form = {phone:`254${slice_number}`, mail,password, name,"sel": 0,"admin": 0,"status": 1,"type": parseInt(type)}
        registerUser(form, otpTo).then( res => {
            if(res === "success"){
                history.push("/verify-user");
            }     
        })
    }

    return <>
    <div className='flex flex-row justify-between h-screen bg-white overflow-auto'>
        <div className='sm_display_none'>
            <img src={register_logo} alt="Login" className='h-screen w-50vh overflow-auto'/>
        </div>
        <div className='flex flex-col sm:m-auto border-radius-10 registration-form'>
            <div className='login-form-container registration-form-container min-w-full'>
                <div className='flex flex-row ml-5 md:ml-14 pt-1'>
                    <p className='text-center text-sm md:text-lg font-semibold'>Hello there, welcome.</p>
                </div>
                <div className='flex justify-center item-center pt-1'>
                    <img src={logo} alt="" className='w-20 pt-1 pb-1'/>
                </div>
                <ValidatorForm ref={form}  onSubmit={register} autoComplete='off'>
                    <div className='flex flex-col gap-1 items-center login-fields'>
                        <div>
                            <label htmlFor="phone" className='text-sm'>Register As</label>
                                <label className="relative block text-sm md:text-base">
                                <div className="">
                                    <select name="" id="" value={type} onChange={changeType} className="text_inputs--pl block bg-white width-17rem border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" required>
                                        <option value="" className="text-slate-400">Select user type</option>
                                        <option value="3" className="text-slate-400">Farmer</option>
                                        <option value="2" className="text-slate-400">SME</option>
                                    </select>
                                </div>
                            </label>
                        </div>

                        <div>
                            <label htmlFor="phone" className='text-sm'>Phone Number</label>
                            <label className="relative block text-sm md:text-base width-17rem">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <i className="fa fa-phone h-5 w-5 fill-slate-100"></i>
                                </span>
                                <TextValidator className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" placeholder="+254700000000" type="text" name="search" value={phone} onChange={changePhone} validators={['required']}
                                errorMessages={['Phone number is required']}/>
                            </label>
                        </div>

                        <div>
                            <label htmlFor="phone" className='text-sm'>Username</label>
                                <label className="relative block text-sm md:text-base width-17rem">
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
                                <label className="relative block text-sm md:text-base width-17rem">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <img src={Vector} alt="" className="h-5 w-5 fill-slate-300"/>
                                </span>
                                <TextValidator className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" placeholder="example@gmail.com" type="email" name="search" value={mail} onChange={changeEmail} />
                            </label>
                        </div>

                        <div>
                            <label htmlFor="phone" className='text-sm'>Password</label>
                                <label className="relative block text-sm md:text-base width-17rem">
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
                                <label className="relative block text-sm md:text-base width-17rem">
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
                            { !match && <span className='text-xs error font-bold'>Passwords do not match</span>}
                        </div>

                        <div>
                            <label htmlFor="phone" className='text-sm'>Send OTP To</label>
                                <label className="relative block text-sm md:text-base">
                                <div className="">
                                    <select name="" id="" value={otpTo} onChange={changeOtpTo} className="text_inputs--pl block bg-white width-17rem border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" required>
                                        <option value="" className="text-slate-400">Select option</option>
                                        <option value="1" className="text-slate-400">Phone Number</option>
                                        <option value="2" className="text-slate-400">Email Adress</option>
                                    </select>
                                </div>
                            </label>
                        </div>

                    </div>
                    <div>
                        <div className='btn-container flex flex-row m-auto pt-2 width-17rem'>
                            {isLoading ? <button className='bg-primary-green success-btn rounded-md text-white m-auto disabled:opacity-75 w-full' disabled>Loading...</button> :
                                <Button type="submit" class="bg-primary-green success-btn rounded-md text-white m-auto w-full" title="Register"/>
                            }
                            
                        </div>
                    </div>
                </ValidatorForm>
                <div className='flex flex-row text-center pt-2 text-xs ml-5 md:ml-6 pb-4'>
                    <div className='md:pl-8'>
                        <p>Already have an account? <Link to="/login" className='link'>Back to Login.</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>;
}
// get the state of user registered
const mapStateToProps = state =>({
    registration:state.auth.registration,
    isLoading:state.auth.isLoading
})


export default connect(mapStateToProps, {registerUser})(React.memo(Register));
