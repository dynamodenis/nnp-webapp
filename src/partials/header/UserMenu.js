import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../utils/Transition';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutModal from './LogoutModal';

function UserMenu(props) {
  let {user} = props;
  const trigger = useRef(null);
  const dropdown = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openLogoutModal,setOpenLogoutModal] = useState(false);
  // check if user is undefined
  if (user !== 'undefined') {
    user = JSON.parse(user);
  } else {
    user = {}
  }

  const handleOpenLogoutModal = () => {
      setOpenLogoutModal(true)
  }

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current?.contains(target) || trigger.current?.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <div>
          <div className="w-8 h-8 rounded-full primary-green bg-light-green"><ManageAccountsIcon/></div>
        </div>
        <div className="flex items-center truncate">
          <span className="badge badge_light_green truncate ml-2 text-sm font-semibold">{user?.name || ""}</span>
          <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200">
            <div className="font-semibold text-gray-500">{user?.name || ""}</div>
            <div className="text-xs text-gray-500 italic">{user?.role || ""}</div>
          </div>
          <ul>
            <li>
              <Link
                className="font-semibold text-sm text-gray-400 hover:text-gray-600 flex items-center py-1 px-3"
                to={`/users/details/${user?.id}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Profile
              </Link>
            </li>
            <li>
              <div className="font-semibold cursor-pointer text-sm text-gray-400 hover:text-gray-600 flex items-center py-1 px-3" onClick={handleOpenLogoutModal} >Sign Out</div>
            </li>
          </ul>
        </div>
      </Transition>
      <LogoutModal modalIsOpen={openLogoutModal} setIsOpen={setOpenLogoutModal} onClick={() => setDropdownOpen(!dropdownOpen)}/>
    </div>
  )
}

export default UserMenu;