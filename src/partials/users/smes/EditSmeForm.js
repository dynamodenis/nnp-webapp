import React, { useRef, useState, useEffect } from "react";

import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "../../utils/TextValidator";
import Modal from "react-modal";
// redux
import { connect } from "react-redux";
import { updateSme } from "../../../redux/actions/smes";

function EditSmeForm(props) {
  const { updateSme, isLoading, edit } = props;
  const form = useRef();
  const [name, setname] = useState("");
  const [contact, setContact] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [desc, setDesc] = useState("");
  const [scounty, setSCounty] = useState("");
  const [id, setId] = useState("");

  const changename = event => {
    setname(event.target.value);
  };
  const changeContact = event => {
    setContact(event.target.value);
  };
  const changeTel = event => {
    setTel(event.target.value);
  };
  const changeMail = event => {
    setMail(event.target.value);
  };
  const changeAddress = event => {
    setAddress(event.target.value);
  };
  const changeTown = event => {
    setTown(event.target.value);
  };
  const changeDesc = event => {
    setDesc(event.target.value);
  };
  const changeCounty = event => {
    setSCounty(event.target.value);
  };

  // Get current vendor
  useEffect(() => {
    setname(edit?.name);
    setContact(edit?.contact);
    setTel(edit?.tel);
    setMail(edit?.mail);
    setAddress(edit?.address1);
    setTown(edit?.town);
    setDesc(edit?.descr);
    setSCounty(edit?.scounty);
    setId(edit?.id);
  }, [id, edit]);

  const createCourse = e => {
    e.preventDefault();
    const body = {
      id: id,
      name: name,
      contact: contact,
      address1: address,
      tel: tel,
      mail: mail,
      town: town,
      suspend: 0,
      sel: 0,
      descr: desc,
      scounty: scounty,
      location: { x: 0, y: 0 },
    };
    updateSme(id, body).then(res => {
      if (res === "success") {
        props.setIsOpen(!props.modalIsOpen);
      }
    });
  };

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
              <div className="text-2xl font-medium">Edit SME</div>
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
                        placeholder="Vendor's name"
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
                      Contact name
                    </label>
                    <div className="pt-2">
                      <TextValidator
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="Vendor's contact name"
                        type="text"
                        name="search"
                        value={contact}
                        onChange={changeContact}
                      />
                    </div>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
                  <div className="pt-2">
                    <label htmlFor="" className="font-semibold text-sm">
                      Contact number
                    </label>
                    <div className="pt-2">
                      <TextValidator
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="0720000000/+2547200000000"
                        type="text"
                        name="search"
                        value={tel}
                        onChange={changeTel}
                        validators={["required"]}
                        errorMessages={["Contact number is required"]}
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <label htmlFor="" className="font-semibold text-sm">
                      Email address
                    </label>
                    <div className="pt-2">
                      <TextValidator
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="Vendor's contact name"
                        type="email"
                        name="search"
                        value={mail}
                        onChange={changeMail}
                        validators={["isEmail"]}
                        errorMessages={["Valid email is required"]}
                      />
                    </div>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
                  <div className="pt-2">
                    <label htmlFor="" className="font-semibold text-sm">
                      Physical address
                    </label>
                    <div className="pt-2">
                      <TextValidator
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="P.0 Box 1234-00100"
                        type="text"
                        name="search"
                        value={address}
                        onChange={changeAddress}
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <label htmlFor="" className="font-semibold text-sm">
                      Location/Town
                    </label>
                    <div className="pt-2">
                      <TextValidator
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="Nairobi, Kenya"
                        type="text"
                        name="search"
                        value={town}
                        onChange={changeTown}
                      />
                    </div>
                  </div>
                </div>

                <div className="md:grid md:grid-cols-2 justify-between flex flex-col gap-4">
                  <div className="pt-2">
                    <label htmlFor="" className="font-semibold text-sm">
                      Sub-county
                    </label>
                    <div className="pt-2">
                      <TextValidator
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="Kasarani,Nairobi"
                        type="text"
                        name="search"
                        value={scounty}
                        onChange={changeCounty}
                      />
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
  smes: state.smes.smes,
  isLoading: state.smes.isUpdating,
});

export default connect(mapStateToProps, { updateSme })(React.memo(EditSmeForm));
