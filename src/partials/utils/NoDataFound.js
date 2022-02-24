import * as React from "react";
import logo from '../../images/sad-emoji.png'


const NoDataFound = (props) =>{
  
    return (
        <div className="p-30">
            <div className="flex flex-col md:flex-row w-2/3 md:w-1/2 justify-center m-auto gap-4">
                <div className="page_image">
                    <img src={logo} alt="Page Not Found" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="page_details_text">
                        <h2 className="text-gray-500 mb-2">Oops! Not Data Found</h2>
                        <p className="text-gray-500 mb-3">
                            Sorry, the data your searching for is not available or has been deleted.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoDataFound