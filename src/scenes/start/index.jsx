import { useFormik } from "formik";
import Header from "../../components/Header";
import * as yup from "yup";
import DropzoneInput from "../../components/DropzoneInput";
import { TextInput } from "../../components/TextInput";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TagsInput from "react-tagsinput";
import '../../styles/tagsinput.css'
import ReactLoading from 'react-loading';
import Switch from "../../components/SwitchBox";

const streamSchema = yup.object().shape({
    title: yup.string().min(3).required("required"),
    preview: yup.array().min(1).required("preview!"),
})

const Start = () => {
    const nav = useNavigate()

    const handleFormSubmit = (values, actions)=>{
        //window.localStorage.setItem("isLive", true)
        console.log(values)
        //window.dispatchEvent(new Event("liveChange"))
        //actions.resetForm()
        //nav("/dashboard")
    }

    useEffect(()=>{
        if(window.localStorage.getItem("isLive") === "true"){
            nav("/dashboard")
        }
    }, [nav])

    const {values, errors, touched, isSubmitting, setFieldValue, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues:{
            title: '',
            description: '',
            tags: [],
            preview: [],
            autoDelete: true
        },
        validationSchema:streamSchema,
        onSubmit:handleFormSubmit,
    })

    return (
        <div className="ml-16 h-full">
            <Header title={"New stream"}/>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-[40%_60%] grid-rows-2 gap-4 mr-16 h-full">
                    <div className={` videobox flex justify-center items-center aspect-video 
                    ${errors.preview && touched.preview ? ' border-rose-600 border-[1px]' : ''}`}>
                        <DropzoneInput preview={true} handleDrop={(files) => setFieldValue("preview", files)} 
                        multiple={false} maxSize={10 * 10485760} value={values.preview}/> 
                    </div>
                    <div className="flex flex-col gap-4 w-5/6 row-span-2">
                        <TextInput id="title" onChange={handleChange}
                        placeholder="Title"
                        value={values.title}
                        onBlur={handleBlur}
                        isError={errors.title && touched.title}
                        errorMessage={errors.title}/>
    
                        <textarea id="description" onChange={handleChange}
                        placeholder="Description here (optionally)"
                        value={values.description}
                        onBlur={handleBlur}
                        className={`input resize-none scrollbar h-32 pt-3`}/>

                        <Switch label={"Delete after stream end"} value={values.autoDelete}
                        onChange={(v)=> setFieldValue("autoDelete", v)}/>

                        <TagsInput value={values.tags} onChange={(t) => setFieldValue("tags", t)} addKeys={[32, 13]} onlyUnique 
                        />
                        <button 
                        disabled={isSubmitting}
                        className="button w-1/6 h-10 bg-teal-600 
                        col-start-2 p-4 font-mono disabled:opacity-25" 
                        type="submit">
                            {isSubmitting ? (
                                <ReactLoading type="cubes" height={"55px"}/>
                            ): "Create"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Start;