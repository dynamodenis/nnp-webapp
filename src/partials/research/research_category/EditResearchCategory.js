import React, { useRef, useState, useEffect } from "react";
import { ValidatorForm } from "react-form-validator-core";
import TextValidator from "../../utils/TextValidator";
import Modal from "react-modal";
// Redux
import { connect } from "react-redux";
import { updateResearchCategory } from "../../../redux/actions/research_category";


function EditResearchCategory(props) {
  const { isLoading, updateResearchCategory,edit } = props;
  const form = useRef();
  const [name, setname] = useState("");
  const [id, setId] = useState("");


  const changename = event => {
    setname(event.target.value);
  };

  useEffect(() => {
    setname(edit?.name)
    setId(edit?.id)
  },[edit])


  const createCourse = e => {
    e.preventDefault();

    const body = {
      "id": id,
      "name": name,
      "sel": 1,
      // "init_dte": "2022-02-24 16:58:39"
    }
    updateResearchCategory(id, JSON.stringify(body)).then(res => {
      if (res === "success") {    
        props.setIsOpen(!props.modalIsOpen);
      }
    });
  };

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
              <div className="text-2xl font-medium">Edit Research Category</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-3 justify-between pb-5">
            <div>
              <ValidatorForm ref={form} onSubmit={createCourse} autoComplete="off">
                <div className="md:grid md:grid-cols-1 justify-between flex flex-col gap-4">
                  <div className="pt-2">
                    <label htmlFor="" className="font-semibold text-sm">
                      Category Name
                    </label>
                    <div className="pt-2">
                      <TextValidator
                        className="text_inputs--pl placeholder:text-slate-400 block bg-white w-full border login-inputs border-slate-300 rounded-md py-2 pl-40 pr-3 text-sm"
                        placeholder="Category category name"
                        type="text"
                        name="search"
                        value={name}
                        onChange={changename}
                        validators={["required"]}
                        errorMessages={["Name is required"]}
                      />
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
  isLoading: state.research_category.isUpdating,
});

export default connect(mapStateToProps, { updateResearchCategory })(React.memo(EditResearchCategory));
