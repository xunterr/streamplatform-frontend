import { useState } from "react";
import { IoCheckmarkCircleOutline, IoCopy } from "react-icons/io5"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Button from "./Button";
import { useEffect } from "react";

export const TextInput = ({ isError, errorMessage, className, isCopy, isHidden, ...props }) => {
  const copy = () => {
    navigator.clipboard.writeText(props.value)
    setCopied(true)
  }

  const [copied, setCopied] = useState(false)
  const [hidden, setHidden] = useState(isHidden)

  useEffect(() => {
    const timeout = setTimeout(() => {
        if (copied) setCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);

  return(
    <div className={`flex flex-col ${className}`}>
      <div className="flex justify-center w-full gap-1">
        <input {...props}
          className={`${isError? "border-rose-600" : ""} flex-1 input`} 
          type={hidden ? "password" : "text"} />
        {isCopy &&  
          <Button inner={copied ? <IoCheckmarkCircleOutline/> :<IoCopy/>}
          className={` ${copied ? "text-green-400 rotate-6" : ""} w-8 h-8 transition-all duration-100`}
          onClick={copy}/>}
        {isHidden && (
          <Button onClick={() => setHidden(!hidden)} className={"w-8 h-8"}
          inner={hidden ? <BsEyeSlashFill/> : <BsEyeFill/>}/>
        )}
      </div>
      {isError && (
          <span className="text-xs p-0 pl-1 font-light text-rose-600">
            {errorMessage}
          </span>
      )}
    </div>
)};