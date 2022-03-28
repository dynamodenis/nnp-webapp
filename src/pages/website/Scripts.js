import React from 'react'
import {Helmet} from "react-helmet";

function Scripts() {
  return (
    <div className="application">
        <Helmet>
            <script src="/path/to/resource.js" type="text/javascript" />
        </Helmet>
        ...
    </div>
  )
}

export default Scripts