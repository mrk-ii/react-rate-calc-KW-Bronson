import React from 'react';

export default function NumberInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input onChange={(e) => {
                props.onChange(e.target.value)} 
            }
            type="number" id={props.id} min={props.min} max={props.max} 
            />
        </div>
    );
}

//id day-rate
//id hours
