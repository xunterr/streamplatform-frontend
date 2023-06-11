import { useEffect, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";

const DropzoneInput = ({preview, handleDrop, value, className, ...props}) => {

  const isPreview = value.length > 0
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      handleDrop(acceptedFiles)
    },
    ...props
  });
  return (
    <div className={`w-full h-full flex items-center justify-center rounded-lg
      ${ !isPreview && "bg-placeholder bg-opacity-2"}`} 
     {...getRootProps()}>
      <input className=" " {...getInputProps({className: 'dropzone'})} />
        {isPreview ? (
          value?.map((file) => (
            <div key={file.name} className={`w-[${100 / value.length}%] h-full`}>
                <img src={URL.createObjectURL(file)} alt={file.name}
                  className={`rounded-lg border-2 border-gray-700 h-full`}/>
            </div>
          ))   
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
    </div>
  )
} 

export default DropzoneInput;