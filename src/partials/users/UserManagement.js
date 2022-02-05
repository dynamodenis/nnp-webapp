import React from "react";
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@material-ui/core/IconButton';

import UsersTable from "./UsersTable";



function UserManagement() {
  return (
    <div>
      <div className="pb-6">
        <h2 className="font-semibold text-xl">Users Management</h2>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
        <div className="">
            <input type="text" className="w-full border-radius-10 py-1 text-sm border-slate-300 text-slate-500" placeholder="Search a topic" />
        </div>

        <div className="w-full md:w-1/2">
            <Link to="/users/create">
              <button type="button" className="bg-blue add-user-btn rounded-md text-white text-sm">
                <IconButton style={{ padding: 1.5, color:"white" }} className="text-white">
                    <AddIcon fontSize="small"/>
                </IconButton>
                Add User
              </button>
            </Link>
        </div>
      </div>

     
      <div className="flex flex-col pt-8">
        <UsersTable/>
      </div>
     

      
    </div>
  );
}

export default UserManagement;
