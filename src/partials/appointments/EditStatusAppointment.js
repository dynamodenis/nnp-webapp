import React, { useRef, useState, useEffect } from "react";

import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "../utils/TextValidator";
import Modal from "react-modal";
import SingleSelectInput from "../utils/SingleSelectInput";
// redux
import { connect } from "react-redux";
import { updateAppointment } from "../../redux/actions/appointments";

function EditStatusAppointment(props) {
  const { isLoading,consultants,edit,updateAppointment } = props;
  let {user} = props;
  const form = useRef();
  const [name, setname] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [dfactor, setDfactor] = useState("hrs");
  const [status, setStatus] = useState("");
  const [desc, setDesc] = useState("");
  const [consultant, setConsultant] = useState("");
  const [id, setId] = useState("");

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
  const changeStatus = event => {
    setStatus(event.target.value);
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

  // Preload data in the fields
  useEffect(() => {
    const consultant = consultants?.filter(el => el.id === edit?.consultant);
    let selected_consultant = {value:"", label:""};
    if(consultant !== undefined){
        selected_consultant = {value:consultant[0]?.id, label:consultant[0]?.name};
    } 
    setname(edit?.topic)
    setConsultant(selected_consultant)
    setDuration(edit?.duration)
    setDfactor(edit?.dfactor)
    setDesc(edit?.notes)
    setId(edit?.id)
    setStatus(edit?.status)
    console.log("statsus", status)
    const date_time = edit?.stime?.split(" ")
    if(edit?.stime){

      if(date_time !== "undefined"){
        setDate(date_time[0])
        setTime(date_time[1])
      }    }
    

  },[edit])

  const createCourse = e => {
    e.preventDefault();
    const body = {
      "id": id,
      "topic": name,
      "consultant": consultant.value,
      "stime": `${date} ${time}:00`,
      "duration": duration,
      "dfactor": dfactor,
      "status": 1,
      "notes": desc,
      "appuser":user?.id
    };
    updateAppointment(id,JSON.stringify(body)).then(res => {
      if (res === "success") {
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
              <div className="text-2xl font-medium">Edit {name} Appointment</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-3 justify-between pb-5">
            <div>
              <ValidatorForm ref={form} onSubmit={createCourse} autoComplete="off">
                <div className="md:grid md:grid-cols-1 justify-between flex flex-col gap-4">
                    <div className="pt-2">
                        <label htmlFor="" className="font-semibold text-sm">
                        Appointment Status
                        </label>
                        <div className="pt-2">
                        <select
                            className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pr-3 text-sm"
                            value={status}
                            onChange={changeDfactor}
                            required
                        >
                            <option value="1">Pending</option>
                            <option value="2">Schedule</option>
                            <option value="3">Reject</option>
                            <option value="4">Re-schedule</option>
                        </select>
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
  isLoading: state.appointments.isUpdating,
  user: state.auth.user,
  consultants: state.consultants.consultants,
});

export default connect(mapStateToProps, { updateAppointment })(EditStatusAppointment);
