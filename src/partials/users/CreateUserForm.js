import React, { useRef, useState, useEffect } from "react";
import eye from "../../images/eye.png";
import eye_slash from "../../images/eye-slash.jpeg";
import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "../utils/TextValidator";
import Modal from "react-modal";
// Redux
import { connect } from "react-redux";
import { addUser, loadUserRoles } from "../../redux/actions/users";


function CreateUserForm(props) {
  const { user_roles, addUser, loadUserRoles } = props;
  const form = useRef();
  const [name, setname] = useState("");
  const [mail, setMail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

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
    loadUserRoles();
  }, [loadUserRoles]);

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
      name: name,
      sel: 0,
      admin: 0,
      mail: mail,
      role: role,
      status: 1,
      password: password,
      phone: `254${slice_number}`,
      type: 1,
    };
    addUser(body).then(res => {
      if (res === "success") {
        setname("");
        setRole("");
        setMail("");
        setPassword("");
        setPhone("");

        props.setIsOpen(!props.modalIsOpen);
      }
    });
  };

  let roles = [];
  user_roles?.forEach((el) => {
    roles.push({
      value: el.id,
      label: el.name - el.desc
    });
  })
  return (
    <div className="z-10">
      {/* New order Modal */}
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
              <div className="text-2xl font-medium">Add User</div>
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
                        {user_roles.map((role, i) => {
                          return (<option key={i} value={role.id}>
                            {role.name} - {role.desc}
                          </option>)
                        })}
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
                        validators={["required"]}
                        errorMessages={["Password is required"]}
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
                      className="bg-blue success-btn rounded-md text-white text-sm"
                      onClick={() => props.setIsOpen(!props.modalIsOpen)}
                    >
                      Back
                    </button>
                    {props.isLoading ? (
                      <button className="bg-green success-btn rounded-md text-white m-auto disabled:opacity-25" disabled>
                        Loading...
                      </button>
                    ) : (
                      <button type="submit" className="bg-green success-btn rounded-md text-white m-auto text-sm" title="Save">
                        Save
                      </button>
                    )}
                  </div>
                </div>
              </ValidatorForm>
            </div>
          </div>
        </div>
      </Modal>
    </div>
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
  user_roles: state.users.user_roles,
  isLoading: state.users.isAdding,
});

export default connect(mapStateToProps, { addUser, loadUserRoles })(React.memo(CreateUserForm));
