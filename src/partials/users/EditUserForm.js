import React, { useRef, useState, useEffect } from "react";
import eye from "../../images/eye.png";
import eye_slash from "../../images/eye-slash.jpeg";
import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "../utils/TextValidator";
import Modal from "react-modal";

// Redux
import { connect } from "react-redux";
import { updateUser } from "../../redux/actions/users";

function EditUserForm(props) {
  const { user_roles, updateUser, isLoading, edit } = props;
  const form = useRef();
  const [name, setname] = useState("");
  const [mail, setMail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");

  const changename = event => {
    setname(event.target.value);
  };
  const handleChangeRole = event => {
    setRole(event.target.value);
  };
  const handleChangeMail = event => {
    setMail(event.target.value);
  };
  const changePassword = event => {
    setPassword(event.target.value);
  };
  const changePhone = event => {
    setPhone(event.target.value);
  };

  useEffect(() => {
    const roles = user_roles?.filter(role => role.id === edit?.role)
    let selected_role = {value:"", label:""};
    if(roles !== undefined){
        selected_role = {value:roles[0]?.id, label:roles[0]?.name};
    } 
    setname(edit?.name);
    setRole(selected_role);
    setMail(edit?.mail);
    setPhone(edit?.phone);
    setCurrentPassword(edit?.password);
    setId(edit?.id);
  }, [id, edit]);
  

  const togglePassword = () => {
    const input = document.getElementsByClassName("myInput")[0];
    const visibility = document.getElementsByClassName("see")[0];
    const visibility_off = document.getElementsByClassName("unsee")[0];

    if (input.type === "password") {
      input.type = "text";
      visibility.style.display = "none";
      visibility_off.style.display = "block";
    } else {
      input.type = "password";
      visibility.style.display = "block";
      visibility_off.style.display = "none";
    }
  };

  const createCourse = e => {
    e.preventDefault();
    const slice_number = phone.slice(-9);

    const body = {
      id: id,
      name: name,
      sel: 0,
      admin: 0,
      mail: mail,
      role: role,
      status: 0,
      password: password !== "" ? password : currentPassword,
      phone: `254${slice_number}`,
      type: 1,
      created: "",
      otpNumber: 0,
      otpExpiration: 0,
      firstTimeLogin: 0,
      verified: true,
    };
    updateUser(id, body).then(res => {
      if (res === "success") {
        props.setIsOpen(!props.modalIsOpen);
      }
    });
  };
  return (
    <>
      <Modal
        isOpen={props.modalIsOpen}
        //   onAfterOpen={afterOpenModal}
        closeTimeoutMS={500}
        onRequestClose={() => props.setIsOpen(!props.modalIsOpen)}
        style={customStyles}
        contentLabel="Brand Modal"
      >
        <div className="md:pl-8 md:pr-8">
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <div>
              <div className="text-2xl font-medium">Edit User</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-3 justify-between pb-5">
            <div>
              <ValidatorForm ref={form} onSubmit={createCourse} autoComplete="off">
                <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
                  <div className="pt-2">
                    <label htmlFor="" className="font-semibold text-sm">
                      Name
                    </label>
                    <div className="pt-2">
                      <TextValidator
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="John Doe"
                        type="text"
                        name="search"
                        value={name}
                        onChange={changename}
                        validators={["required"]}
                        errorMessages={["Name is required"]}
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <label htmlFor="" className="font-semibold text-sm">
                      Phone Number
                    </label>
                    <div className="pt-2">
                      <TextValidator
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="+254720000000"
                        type="text"
                        name="search"
                        value={phone}
                        onChange={changePhone}
                        validators={["required"]}
                        errorMessages={["Phone number is required"]}
                      />
                    </div>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4 pt-2">
                  <div className="pt-4">
                    <label htmlFor="" className="font-semibold text-sm">
                      User Role
                    </label>
                    <div>
                      <select
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pr-3 text-sm"
                        value={role}
                        onChange={handleChangeRole}
                        required
                      >
                        {/* <option value="">Select Role</option> */}
                        {user_roles.map((role, i) => (
                          <option key={i} value={role.id}>
                            {role.name} - {role.desc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label htmlFor="" className="font-semibold text-sm">
                      Email Address
                    </label>
                    <div className="pt-2">
                      <TextValidator
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="exmple@gmail.com"
                        type="email"
                        name="search"
                        value={mail}
                        onChange={handleChangeMail}
                        validators={["isEmail"]}
                        errorMessages={["Valid email is required"]}
                      />
                    </div>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4 pt-2">
                  <div className="pt-2">
                    <label htmlFor="" className="font-semibold text-sm">
                      Password
                    </label>
                    <div className="pt-2 relative">
                      <TextValidator
                        className="myInput text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="Password"
                        type="password"
                        name="search"
                        value={password}
                        onChange={changePassword}
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2" onClick={togglePassword}>
                        <img src={eye} alt="" className="see h-5 w-5 fill-slate-300 cursor-pointer" />
                        <img src={eye_slash} alt="" className="unsee h-5 w-5 fill-slate-300 hidden cursor-pointer" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:w-36 pt-8 md:float-right ">
                  <div className="grid grid-cols-2">
                    <button
                      type="button"
                      className="bg-primary-gray cancel-btn rounded-md text-white text-sm"
                      onClick={() => props.setIsOpen(!props.modalIsOpen)}
                    >
                      Back
                    </button>
                    {isLoading ? (
                      <button className="bg-primary-green success-btn rounded-md text-white m-auto disabled:opacity-25" disabled>
                        Loading...
                      </button>
                    ) : (
                      <button type="submit" className="bg-primary-green success-btn rounded-md text-white m-auto text-sm" title="Save">
                        Update
                      </button>
                    )}
                  </div>
                </div>
              </ValidatorForm>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    paddingTop: "10px",
    height: "auto",
  },
  overlay: {
    backgroundColor: "rgba(31, 30, 30, 0.2)",
  },
};

// get the state
const mapStateToProps = state => ({
  user_roles: state.user_roles.user_roles,
  isLoading: state.users.isUpdating,
  users: state.users.users,
});

export default connect(mapStateToProps, { updateUser })(React.memo(EditUserForm));
