import { useState } from "react";

const Checkbox = ({ label, checkedDefault }) => {
    const [checked, setChecked] = useState(checkedDefault || false)
    return (
        <label className="flex items-center text-xs gap-1">
            <input 
            type="checkbox"
            onChange={()=>{
                setChecked(!checked)
            }}/>
            <span 
            className={`default-checkbox ${checked && "default-checkbox--active"}`}
            aria-hidden="true"/>
            {label}
        </label>
    );
  };
  export default Checkbox;