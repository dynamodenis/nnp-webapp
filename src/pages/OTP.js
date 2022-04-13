import React, { useState, useEffect } from "react";
import login_pic from "../images/login-logo.png";
import logo from "../images/logo.jpeg";
import Button from "../partials/utils/Button";
import { Link, Redirect } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { verifyUser } from "../redux/actions/auth";
import { resendOtp } from "../redux/actions/users";

function OTP(props) {
  let { registration,resendingOtp,resendOtp } = props;
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState({});
  const [sendTo, setSendTo] = useState("");

  const changeOtp = event => {
    setOtp(event.target.value);
  };

  const changeSendTo = event => {
    setSendTo(event.target.value);
  };

  useEffect(() => {
    setUser(registration?.user);
  });
  // On otp
  const confirmUser = async e => {
    e.preventDefault();
    const body = {
      id: user?.id,
      name: user?.name,
      sel: 0,
      admin: 0,
      mail: user?.mail,
      role: user?.role,
      status: 1,
      phone: user?.phone,
      otpNumber: parseInt(otp),
    };

    try {
      await props.verifyUser(body);
    } catch (error) {
      console.log(error);
      // setError(error.message)
    }
  };

  console.log("registration", registration)
  const resendCode = e => {
    e.preventDefault()
    resendOtp(registration?.user)
  }

  if (props.isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <div className="flex flex-row justify-between h-screen bg-white">
        <div className="flex flex-col sm:m-auto border-radius-10 login-form">
          <div className="login-form-container min-w-full otp_height">
            <div className="flex justify-center item-center pt-1">
              <img src={logo} alt="" className="w-20 pt-1 pb-1" />
            </div>
            <form onSubmit={confirmUser} autoComplete="off">
              <div className="flex flex-col gap-3 items-center login-fields">
                <div className="login-fields__div">
                  <label htmlFor="phone" className="text-sm">
                    Enter OTP sent on your mobile phone
                  </label>
                  <label className="relative block text-sm md:text-base pt-2">
                    <input
                      required
                      className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3"
                      placeholder="45775"
                      type="text"
                      name="search"
                      value={otp}
                      onChange={changeOtp}
                    />
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 justify-between grid-4 w-full">
                  <div>
                      <div className="pt-2 pl-6 md:pl-8">
                        <div className="pt-2">
                            <select
                            className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pr-3 text-sm"
                            value={sendTo}
                            onChange={changeSendTo}
                            required
                            >
                              <option value="">Select send to</option>
                              <option value="hrs">Mobile sms</option>
                              <option value="mins">Email</option>
                            </select>
                        </div>
                        </div>
                  </div>
                  <div>
                      <div className="w-36 pt-4 md:float-right p6-6 md:pr-5">
                        <div className="grid grid-cols-1">
                            {resendingOtp ? (
                              <button className="bg-green success-btn font-bold  rounded-md text-white m-auto disabled:opacity-25" disabled>
                                  Loading...
                              </button>
                              ) : (
                              <button type="button" className="bg-green success-btn font-bold rounded-md text-white m-auto text-sm disabled:opacity-50" disabled={!sendTo} onClick={resendCode}>
                                Resend
                              </button>
                            )}
                        </div>
                    </div>
                  </div>
              </div>
              <div>
                <div className="btn-container flex flex-row m-auto pt-4">
                  {props.isLoading ? (
                    <button className="bg-green success-btn rounded-md text-white m-auto disabled:opacity-75 font-bold " disabled>
                      Loading...
                    </button>
                  ) : (
                    <Button type="submit" class="bg-green success-btn rounded-md text-white m-auto font-bold " disabled={!otp} title="Confirm OTP" />
                  )}
                </div>
              </div>
            </form>
            {/* <div className='flex flex-row text-center pt-2 text-xs ml-5 md:ml-6'>
                    <div>
                        <p>Go back <Link to="/register" className='link'>Register.</Link></p>
                    </div>
                </div> */}
          </div>
        </div>
        <div className="sm_display_none">
          <img src={login_pic} alt="Login" className="h-screen w-50vh" />
        </div>
      </div>
    </>
  );
}

// get the state of user isAuthenticated
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.errors,
  messages: state.messages,
  isLoading: state.auth.isLoading,
  registration: state.auth.registration,
  resendingOtp: state.users.isAdding,
});

export default connect(mapStateToProps, { verifyUser, resendOtp })(OTP);
