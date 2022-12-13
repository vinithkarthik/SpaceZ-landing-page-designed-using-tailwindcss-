import React from "react";
import 'react-dropdown/style.css';
import { useState } from "react";
import Dropdown from 'react-dropdown';

/**
 * SelectBox
 * A reusable component for displaying text in a specific way
 * 
 * Props
 * @param {Array} dropdownList - enumvalues for dropdown
 * @param {string} placeholder - placeholder for dropdown
 * @param {Function} onChange - callback function triggered on dropdown change
 * @param {string} id - unique identifier for dropdown
 * 
 * Examples
 * <SelectBox text="Hello World" style="bold" />
 */
const SelectBox = ({ dropdownList, placeholder = "", onChange, id }) => {
    const [value, setValue] = useState("Select a value");
    const onSel = (value, id) => {
        console.log(e, id)
    }
    return (
        <Dropdown 
            key={id}
            className="w-[20vw] mr-2" 
            controlClassName="rounded-xl shadow-md"
            options={dropdownList} 
            value={value} 
            placeholder={placeholder} 
            onChange={(e) => onChange({value: e.value, id})} 
        />
    )
}

export default SelectBox;