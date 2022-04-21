import React, { useRef, useState, useEffect } from "react";
import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "../../utils/TextValidator";
import Modal from "react-modal";
// Redux
import { connect } from "react-redux";
import { addProductCategory } from "../../../redux/actions/product_category";


function CreateProductCategory(props) {
  const { user_roles, addProductCategory } = props;
  const form = useRef();
  const [name, setname] = useState("");
  const [type, setType] = useState("");

  const changename = event => {
    setname(event.target.value);
  };
  const changeType = event => {
    setType(event.target.value);
  };


  const createCourse = e => {
    e.preventDefault();

    const body = {
      name: name,
      sel: 0,
      image_url:"",
      type: type,
    };
    addProductCategory(body).then(res => {
      if (res === "success") {
        setname("");
        setType("");

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
              <div className="text-2xl font-medium">Add Product Category</div>
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
                        placeholder="Product category name"
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
                    <label htmlFor="" className="font-semibold text-sm">Supplier Type</label>
                    <div className="pt-2">
                        <select value={type} onChange={changeType}  className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" required>
                            <option value="" disabled>Select supplier type</option>
                            <option value="1">SME</option>
                            <option value="2">Vendor</option>
                        </select>
                    {/* <TextValidator className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm" placeholder="Training duration" type="number" name="search" value={duration} onChange={changeType}/> */}
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
                    {props.isLoading ? (
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
  isLoading: state.product_category.isAdding,
});

export default connect(mapStateToProps, {addProductCategory })(React.memo(CreateProductCategory));
