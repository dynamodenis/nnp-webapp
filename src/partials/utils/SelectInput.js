import React from 'react'
import Select from 'react-select'

function SelectInput(props) {
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
            />
        </div>
    )
}

export default SelectInput