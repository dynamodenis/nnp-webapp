import React, { useEffect, useState, useMemo } from "react";
import debounce from "lodash.debounce";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
// import MessageIcon from '@mui/icons-material/Message';
import trainer from "../../images/default.jpg";
import { connect } from "react-redux";
import { loadConsultants } from "../../redux/actions/consultants";
import CircularProgressLoader from "../utils/CircularProgressLoader";
import { Link } from "react-router-dom";
import NoDataFound from "../utils/NoDataFound";
import Appointment from './Appointment';

function Consultancy(props) {
  const { isLoading, consultants, loadConsultants } = props;
  const [consultantList, setConsultantList] = useState([]);
  const [search, setSearch] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsDeleteOpen, setIsDeleteOpen] = useState(false);
  const [edit, setEdit] = useState();
  const [modalIsEditOpen, setIsEditOpen] = useState(false);
  const [selectedConsultant, setSelectedConsultant] = useState("");

  // Open Modal
  function openModal(id) {
    setIsOpen(true);
    setSelectedConsultant(id)
  }

  // edit function
  function editItem(row) {
    setIsEditOpen(true);
    setEdit(row);
  }

  // Delte user
  function deleteItem(row) {
    setIsDeleteOpen(true);
    setEdit(row);
  }
  useEffect(() => {
    setEdit(edit);
  }, [edit]);

  // search
  function searchConsultant(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    loadConsultants();
  }, [loadConsultants]);

  useEffect(() => {
    setConsultantList(consultants);
  }, [consultants]);

  // Search smes
  let filtered_users = [];
  if (search !== "") {
    filtered_users = consultantList.filter(user => {
      let lowercase_name = user.name.toLowerCase();
      return lowercase_name.includes(search?.toLowerCase());
    });
  }

  // check if filtered has value
  useEffect(() => {
    if (search !== "") {
      setConsultantList(filtered_users);
    } else {
      setConsultantList(consultants);
    }
  }, [search]);

  const debouncedResults = useMemo(() => {
    return debounce(searchConsultant, 500);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  function getImage(consultant){
    let imageList = consultant?.imageDownloads
    if(imageList){
      return true
    }
    return false
  }


  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div>
          <div className="text-2xl font-medium">
            Consulants List
            <div className="text-sm link">These are all available consultants.</div>
          </div>
        </div>
        <div>
          <input
            type="text"
            className="border-radius-10 py-0.5 text-sm border-slate-300 text-slate-500"
            placeholder="Search a consultant"
            onChange={debouncedResults}
          />
        </div>
      </div>

      {isLoading ? (
        <CircularProgressLoader />
      ) : (
        <>
          {consultantList.length === 0 ? (
            <div className="pt-8">
              <NoDataFound />
            </div>
          ) : (
            <div className="flex flex-col gap-4 pt-8">
              {consultantList.map((consultant, i) => (
                <div className="bg-white border-radius-10 min-height-20vh border-training-card" key={i}>
                  <div className="flex flex-col md:grid md:grid-cols-3 justify-between px-4 py-4 gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row gap-2">
                        <div>
                          <span className="text-slate-500 text-xs edit-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">
                            Active
                          </span>
                        </div>
                        <div className="text-xs pt-1">08:00 am - 16:00 pm</div>
                      </div>
                      <div className="flex flex-row gap-4 pt-2 pb-2">
                        {getImage(consultant) ? (
                          <img
                            src={`data:image/png;base64,${consultant?.imageDownloads}`}
                            alt=""
                            className="w-20 h-20 border-radius-50"
                          />
                        ) : (
                          <img src={trainer} alt="" className="w-20 h-20 border-radius-50" />
                        )}
                        <div className="text-sm pl-1 pt-3 font-semibold green">{consultant.name}</div>
                      </div>
                      <div></div>
                      <div>
                        <Link to={`/consultancy/details/${consultant.id}`}>
                          {" "}
                          <button className="text-xs check-progress-button pl-4 pr-4 pt-0.5 pb-0.5 hover:text-white ease-in-out duration-300 hover:bg-slate-800">
                            Visit Consultant
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">{consultant.pdescr}</div>
                    </div>
                    <div className="flex flex-row gap-2 justify-end ">
                      <div ><EventAvailableIcon onClick={() => openModal(consultant.id)} titleAccess="Schedule appointment" className="hover:text-gray-900 cursor-pointer" /></div>
                      {consultant.phone && (
                        <a title="Call number" href="tel:0758818394">
                          <CallIcon className="hover:text-gray-900 cursor-pointer" titleAccess="Direct phonecall" />
                        </a>
                      )}
                      {consultant.email && (
                        <a href="mailto: insertemailhere@xyz.com?subject=Mail from xyz.com" target="_blank" title="Send Email">
                          <EmailIcon className="hover:text-gray-900 cursor-pointer" titleAccess="Direct email"/>
                        </a>
                      )}
                      {/* <div>
                      <CallIcon/>
                  </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <Appointment modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} selectedConsultant={selectedConsultant} />
        </>
      )}
    </div>
  );
}

// get the state
const mapStateToProps = state => ({
  consultants: state.consultants.consultants,
  isLoading: state.consultants.isLoading,
});

export default connect(mapStateToProps, { loadConsultants })(React.memo(Consultancy));
