import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {

    function getYear(){
        const d = new Date();
        let year = d.getFullYear();
        return year
    }
  return (
    <footer className='app_footer w-full'>
        <hr/>
        <div className='pt-4 pb-4 text-sm'>
            <div>&#169; 2022 - {getYear()} All Rights Reserved.</div>
            <div>Nyeri National Polytechnic Dairy Platform . </div>
            <div>Powered by <Link to={`https://thenyeripoly.ac.ke/`}>Mabawa Innovations Limited</Link></div>
        </div>
    </footer>
  )
}

export default React.memo(Footer)