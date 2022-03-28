import React,{useRef, useState} from "react";
import Modal from "react-modal";

// Redux
import {connect} from 'react-redux';

function CourseImages(props) {
  const {selected_image} = props;
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
        <div>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
            <div className="text-2xl font-medium">
                Training Image
            </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-3 justify-between pb-5">
        <img src={`data:image/png;base64,${selected_image}`}  alt="" id="img" className="cursor-pointer" />
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
    selected_image: state.research.selected_image,
  });

export default connect(mapStateToProps)((React.memo(CourseImages)));
