import React,{useState} from 'react';
import login_pic from '../images/login-logo.png';
import logo from '../images/logo.jpeg';
import lock from '../images/lock-password.svg';
import Button from '../partials/utils/Button';
import eye from '../images/eye.png';
import eye_slash from '../images/eye-slash.jpeg';
import { Link,Redirect } from 'react-router-dom';

// Redux
import {connect} from 'react-redux'
import {login} from '../redux/actions/auth'

function Login(props) {
    let {user} = props
    const [id] = useState("");
    const [prm] = useState(2);
    const [name] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const changePhone = event => {
        setPhone(event.target.value)
    }

    const changePassword = event => {
        setPassword(event.target.value)
    }

    // On login
    const loginUser = async (e) =>{
        e.preventDefault()
        const slice_number = phone.slice(-9);
        const body = {
            "id":id,
            "name":name,
            "password":password,
            "phone":`254${slice_number}`,
            "prm":prm
        }

        try{
            await props.login(body)
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

    if (props.isAuthenticated){
        // check if user is undefined
        if (user !== 'undefined') {
            user = JSON.parse(user);
        } else {
            user = {}
        }
        console.log("login ",user)
        // check if the have updated their password or not
        if(user.isFirstLogin === 1){
            return <Redirect to="/reset-password" />
        }else {
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
                <form onSubmit={loginUser} autoComplete='off'>
                    <div className='flex flex-col gap-3 items-center login-fields'>
                        <div className='login-fields__div'>
                            <label htmlFor="phone" className='text-sm'>Phone Number</label>
                            <label className="relative block text-sm md:text-base">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <i className="fa fa-phone h-5 w-5 fill-slate-100"></i>
                                </span>
                                <input required className="placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3" placeholder="+254700000000" type="text" name="search" value={phone} onChange={changePhone}/>
                            </label>
                        </div>
                        
                        <div className='login-fields__div'>
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
                    </div>
                    
                    <div>
                        <div className='btn-container flex flex-row m-auto pt-6'>
                            {props.isLoading ? <button className='bg-primary-green success-btn rounded-md text-white m-auto disabled:opacity-25 font-bold' disabled>Loading...</button> :
                                <Button type="submit" class="bg-primary-green success-btn rounded-md text-white m-auto font-bold" title="Login"/>
                            }
                        </div>
                    </div>
                    <div className='flex flex-row justify-end gap-4 pt-2 mr-30px'>
                        <div>
                            <div htmlFor="check" className='text-xs link'><Link to='/forgot-password'>Forgot Password?</Link></div>
                        </div>
                    </div>
                </form>
                <div className='flex flex-row text-center pt-2 text-xs ml-5 md:ml-6'>
                    <div>
                        <p>Don't have an account yet! <Link to="/register" className='link'>Register as a user.</Link></p>
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
    isLoading:state.auth.isLoading,
    user: state.auth.user
})

export default connect(mapStateToProps,{login})(Login)
