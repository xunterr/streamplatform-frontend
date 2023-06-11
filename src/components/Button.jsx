import { useState } from "react";

const Button = ({inner, isPressedDefault, className, onClick}) => {
    const [isPressed, setIsPressed] = useState(isPressedDefault)
    return (
        <div className={`button ${className}`} onClick={() => {
            setIsPressed(!isPressed)
            { onClick?.()}
            }}>
            {inner}
        </div>
    );
}

export default Button;