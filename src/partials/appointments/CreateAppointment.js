import React, { useRef, useState } from "react";

import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "../utils/TextValidator";
import Modal from "react-modal";
import SingleSelectInput from "../utils/SingleSelectInput";
// redux
import { connect } from "react-redux";
import { addAppointment } from "../../redux/actions/appointments";

function CreateAppointment(props) {
  const { addAppointment, isLoading,consultants } = props;
  let {user} = props;
  const form = useRef();
  const [name, setname] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [dfactor, setDfactor] = useState("hrs");
  const [desc, setDesc] = useState("");
  const [consultant, setConsultant] = useState("");

  const changename = event => {
    setname(event.target.value);
  };
  const changeDate = event => {
    setDate(event.target.value);
  };
  const changeTime = event => {
    setTime(event.target.value);
  };
  const changeDuration = event => {
    setDuration(event.target.value);
  };
  const changeDfactor = event => {
    setDfactor(event.target.value);
  };
  const changeDesc = event => {
    setDesc(event.target.value);
  };
  const changeConsultant = event => {
    setConsultant(event);
  };

  // check if user is undefined
  if (user !== 'undefined') {
    user = JSON.parse(user);
  } else {
    user = {}
  }

  const createCourse = e => {
    e.preventDefault();
    const body = {
      "topic": name,
      "consultant": consultant.value,
      "stime": `${date} ${time}:00`,
      "duration": duration,
      "dfactor": dfactor,
      "status": 1,
      "notes": desc,
      "appuser":user?.id
    };
    addAppointment(JSON.stringify(body)).then(res => {
      if (res === "success") {
        setname("");
        setDate("");
        setTime("");
        setDuration("");
        setDfactor("hrs");
        setDesc("");
        setConsultant("")
        props.setIsOpen(!props.modalIsOpen);
      }
    });
  };

     // Select 2 users
     const cat_options = [];
     consultants?.map( cat => {
       cat_options.push({
         value:cat.id,
         label:cat.name
       })
     })

  return (
    <>
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
              <div className="text-2xl font-medium">Schedule Appointment</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-3 justify-between pb-5">
            <div>
              <ValidatorForm ref={form} onSubmit={createCourse} autoComplete="off">
                <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
                  <div className="pt-2">
                    <label htmlFor="" className="font-semibold text-sm">
                      Topic
                    </label>
                    <div className="pt-2">
                      <TextValidator
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="Appointment topic"
                        type="text"
                        name="search"
                        value={name}
                        onChange={changename}
                        validators={["required"]}
                        errorMessages={["Topic is required"]}
                      />
                    </div>
                  </div>

                    <div className="pt-2">
                        <label htmlFor="" className="font-semibold text-sm">Consultant name</label>
                        
                        <div className="pt-2">
                        <SingleSelectInput onChange={changeConsultant} options={cat_options} placeholder="Select Consultant.." value={consultant} />
                        </div>
                    </div>
                </div>

                <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
                    <div className="pt-2">
                        <label htmlFor="" className="font-semibold text-sm">
                        Appointment Date
                        </label>
                        <div className="pt-2">
                        <TextValidator
                            className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                            placeholder="Appointment date"
                            type="date"
                            name="search"
                            value={date}
                            onChange={changeDate}
                            validators={["required"]}
                            errorMessages={["Date is required"]}
                        />
                        </div>
                    </div>
                  <div className="pt-2">
                    <label htmlFor="" className="font-semibold text-sm">
                      Appointment Time
                    </label>
                    <div className="pt-2">
                      <TextValidator
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="Appointment time"
                        type="time"
                        name="search"
                        value={time}
                        onChange={changeTime}
                        validators={["required"]}
                        errorMessages={["Time is required"]}
                      />
                    </div>
                  </div>
                  
                </div>

                <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
                    <div className="pt-2">
                        <label htmlFor="" className="font-semibold text-sm">
                        Appointment Duration
                        </label>
                        <div className="pt-2">
                        <TextValidator
                            className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                            placeholder="Appointment duration"
                            type="number"
                            name="search"
                            value={duration}
                            onChange={changeDuration}
                            validators={["required"]}
                            errorMessages={["Duration is required"]}
                        />
                    </div>
                  </div>
                    <div className="pt-2">
                        <label htmlFor="" className="font-semibold text-sm">
                        Duration type
                        </label>
                        <div className="pt-2">
                        <select
                            className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pr-3 text-sm"
                            value={dfactor}
                            onChange={changeDfactor}
                            required
                        >
                            <option value="hrs">hrs</option>
                            <option value="mins">min</option>
                        </select>
                        </div>
                    </div>
                </div>

                <div className="justify-between flex flex-col gap-4 pt-2">
                  <div className="pt-2">
                    <label htmlFor="" className="font-semibold text-sm">
                      Description
                    </label>
                    <div className="pt-2">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="5"
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border textarea-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        value={desc}
                        onChange={changeDesc}
                      ></textarea>
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
  isLoading: state.appointments.isAdding,
  user: state.auth.user,
  consultants: state.consultants.consultants,
});

export default connect(mapStateToProps, { addAppointment })(CreateAppointment);
