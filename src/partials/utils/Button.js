import React from 'react';

function Button(props) {
  return <>
    <button type={props.type} className={`${props.class}`}>{props.title}</button>
  </>;
}

export default Button;
