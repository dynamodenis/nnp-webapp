import React,{useState, useRef} from 'react';
import login_pic from '../images/login-logo.png';
import logo from '../images/logo.jpeg';
import lock from '../images/lock-password.svg';
import Button from '../partials/utils/Button';
import eye from '../images/eye.png';
import eye_slash from '../images/eye-slash.jpeg';
import { Link,Redirect,useHistory } from 'react-router-dom';

import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../partials/utils/TextValidator'

// Redux
import {connect} from 'react-redux'
import { updatePassword } from '../redux/actions/users';
function ResetPassword(props) {
    let {user, updatePassword} = props;
    const history = useHistory();
    const form = useRef();
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [match, setMatch] = useState(true)

    // check if user is undefined
    if (user !== 'undefined') {
        user = JSON.parse(user);
    } else {
        user = {}
    }

    const changeConfirmPassword = event => {
        if (event.target.value !== password){
            setMatch(false)
        }else {
            setMatch(true)
        }
        setConfirmPassword(event.target.value)
    }

    const changePassword = event => {
        setPassword(event.target.value)
    }

    // On login
    const loginUser = async (e) =>{
        e.preventDefault()
        
        const body = {
            "id": user?.id,
            "name": user?.name,
            "mail": user?.email,
            "password": password,
            "phone": user?.phone,
            "firstTimeLogin": 1,
        }
       
        try{
            await updatePassword(body).then( res => {
                if(res === "success"){
                    history.push("/login");
                } 
            })   
        }catch(error){
            console.log(error)
            // setError(error.message)
        }
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

    if (props.isAuthenticated){
        // check if the have updated their password or not
        if(user?.isFirstLogin === 0){
            return <Redirect to="/home" />
        }
    }

    return <>
    <div className='flex flex-row justify-between h-screen bg-white'>
        <div className='flex flex-col sm:m-auto border-radius-10 login-form'>
            <div className='login-form-container min-w-full'>
                <div className='flex justify-center item-center pt-1'>
                    <img src={logo} alt="" className='w-20 pt-1 pb-1'/>
                </div>
                <ValidatorForm ref={form} onSubmit={loginUser} autoComplete='off'>
                    <div className='flex flex-col gap-3 items-center login-fields'>
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

                    </div>
                    
                    <div>
                        <div className='btn-container flex flex-row m-auto pt-6'>
                            {props.isLoading ? <button className='bg-primary-green success-btn rounded-md text-white m-auto disabled:opacity-25 font-bold' disabled>Loading...</button> :
                                <Button type="submit" class="bg-primary-green success-btn rounded-md text-white m-auto font-bold" title="Reset Password"/>
                            }
                        </div>
                    </div>
                </ValidatorForm>
                <div className='flex flex-row text-center pt-2 text-xs ml-5 md:ml-6'>
                    <div>
                        <p>Already have an account? <Link to="/login" className='link'>Back to login.</Link></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='sm_display_none'>
            <img src={login_pic} alt="Login" className='h-screen w-50vh'/>
        </div>
    </div>
    </>;
}

// get the state of user isAuthenticated
const mapStateToProps = state =>({
    isAuthenticated:state.auth.isAuthenticated,
    errors:state.errors,
    messages: state.messages,
    isLoading:state.users.isAdding,
    user: state.auth.user
})

export default connect(mapStateToProps,{updatePassword})(React.memo(ResetPassword))
