import React from 'react'
import classnames from "classnames"
function TextInputGroup(props) {
    return (
        <div>
            <div className="form-group">
                <label htmlFor={props.name}>{props.label}</label>
                <input
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    className={classnames('form-control',{
                        "is-invalid":props.error
                    })} />
                <div className="invalid-feedback">{props.error}</div>
            </div>
        </div>
    )
}

export default TextInputGroup
