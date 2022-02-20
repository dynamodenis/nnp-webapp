import React from 'react'
import Select from 'react-select'

function SingleSelectInput(props) {
    return (
        <div>
            <Select
                isClearable
                options={props.options}
                onChange={props.onChange}
                autoFocus={true}
                placeholder={props.placeholder}
                value={props.value}
                style={{outline:'none'}}
                required
                className='select-input'
            />
        </div>
    )
}

export default SingleSelectInput