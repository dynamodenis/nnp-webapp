import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {

    function getYear(){
        const d = new Date();
        let year = d.getFullYear();
        return year
    }
  return (
    <footer className='footer w-full'>
        <hr/>
        <div className='pt-4 pb-4 text-sm'>
            <div>&#169; 2022 - {getYear()} All Rights Reserved.</div>
            <div>Powered by <Link to={`https://thenyeripoly.ac.ke/`}>Nyeri National Polytechnic</Link></div>
        </div>
    </footer>
  )
}

export default React.memo(Footer)