import { useState } from "react";

const Switch = ({ label, value, onChange }) => {
    return (
      <label className="toggle-switch relative flex text-xs">
        <input type="checkbox" id="switch" checked={value} onChange={()=>onChange(!value)} />
        <span className="switch" />
        <label className=" ml-10" htmlFor="switch">{label}</label>
      </label>
    );
  };
  export default Switch;