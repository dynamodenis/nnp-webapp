import * as React from "react";
import logo from '../../images/sad-emoji.png'
import { useHistory } from "react-router-dom";


const PageNotFound = (props) =>{
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
  
    return (
        <div className=" p-30">
            <div className="flex flex-col md:flex-row w-1/2 justify-center m-auto gap-4">
                <div className="page_image pt-20">
                    <img src={logo} alt="Page Not Found" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="page_details_text">
                        <h1 className="error__header mb-2">404</h1>
                        <h2 className="text-gray-500 mb-2">Oops! Page Not Found</h2>
                        <p className="text-gray-500 mb-3">
                            Sorry, the page you are looking for does not exist, has been removed, name changed or is temporarily unavailable.
                        </p>
                        
                    </div>
                    <div className="justify-start">
                        <button type="button" className="bg-error back-btn rounded-md text-white text-sm" onClick={goToPreviousPath} >
                        Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound