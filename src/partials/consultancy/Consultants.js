import React, { useEffect } from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
// import MessageIcon from '@mui/icons-material/Message';
import trainer from "../../images/default.jpg";
import { connect } from "react-redux";
import { loadConsultants } from "../../redux/actions/consultants";
import CircularProgressLoader from "../utils/CircularProgressLoader";

function Consultancy(props) {
  const { isLoading, consultants, loadConsultants } = props;

  useEffect(() => {
    // loadConsultants();
  }, [loadConsultants]);
  console.log("consultants", consultants);
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
          />
        </div>
      </div>

      {isLoading ? (
        <CircularProgressLoader />
      ) : (
        <div className="flex flex-col gap-4 pt-8">
          {
            consultants.map((consultant, i) => (
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
                    {consultant.consultantsProfileList[0]?.imageDownload ? <img src={`data:image/png;base64,${consultant?.consultantsProfileList[0]?.imageDownload}`} alt="" className="w-20 h-20 border-radius-50" /> : <img src={trainer} alt="" className="w-10 border-radius-50" />}
                    <div className="text-sm pl-1 pt-3 font-semibold green">{consultant.name}</div>
                  </div>
                  <div></div>
                  <div>
                    <button className="text-xs check-progress-button pl-4 pr-4 pt-0.5 pb-0.5 hover:font-semibold ease-in-out duration-300">
                      Visit consultant
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">{consultant.pdescr}</div>
                </div>
                <div className="flex flex-row gap-2 justify-end ">
                  <a title="Call number" href="tel:0758818394">
                    <CallIcon className="hover:text-gray-900 cursor-pointer" />
                  </a>
                  <a href="mailto: insertemailhere@xyz.com?subject=Mail from xyz.com" target="_blank" title="Send Email">
                    <EmailIcon className="hover:text-gray-900 cursor-pointer" />
                  </a>
                  {/* <div>
                      <CallIcon/>
                  </div> */}
                </div>
              </div>
            </div>
            ))
          }
        </div>
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
