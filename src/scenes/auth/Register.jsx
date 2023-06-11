import { useFormik } from "formik";
import { useEffect } from "react";
import * as yup from "yup";
import Header from "../../components/Header";
import { TextInput } from "../../components/TextInput";
import ReactLoading from 'react-loading';
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import Avatar from "boring-avatars";

const validationSchema = yup.object().shape({
    username: yup.string().min(4).required("Username is required"),
    email: yup.string().email("Wrong email").required("Email is required"),
    password: yup.string().min(8).required("Password is required"),
    confirmPassword: yup.string().label('confirm password').required()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const Register = () => {
    const nav = useNavigate()
    const handleFormSubmit = (values, actions)=>{
    }

    const {values, errors, touched, isSubmitting, setFieldValue, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues:{
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema:validationSchema,
        onSubmit:handleFormSubmit,
    })

    return (
        <div className="bg-secondary-500 p-6 flex flex-col gap-2">
            <Header title={"Register"} subtitle={"Use an existing account"}/>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <TextInput id="username" onChange={handleChange}
                placeholder="Username"
                value={values.username}
                onBlur={handleBlur}
                isError={errors.username && touched.username}
                errorMessage={errors.username}/>
                
                <TextInput id="email" onChange={handleChange}
                placeholder="Email"
                value={values.email}
                onBlur={handleBlur}
                isError={errors.email && touched.email}
                errorMessage={errors.email}/>

                <TextInput id="password" onChange={handleChange}
                placeholder="Password"
                value={values.password}
                onBlur={handleBlur}
                isError={errors.password && touched.password}
                errorMessage={errors.password} isCopy={false} isHidden={true}/>

                <TextInput id="confirmPassword" onChange={handleChange}
                placeholder="Confirm password"
                value={values.confirmPassword}
                onBlur={handleBlur}
                isError={errors.confirmPassword && touched.confirmPassword}
                errorMessage={errors.confirmPassword} isCopy={false} isHidden={true}/>

                <button 
                disabled={isSubmitting}
                className="button w-full h-10 bg-teal-600 
                p-1 font-mono disabled:opacity-25" 
                type="submit">
                    {isSubmitting ? <ReactLoading type="cubes" height={"100%"} width={"15%"} delay={100}/> : "Register"}
                </button>
            </form>
            <button className="button w-full n text-sm disabled:opacity-25 p-1">
                Register with something    
            </button>
            <Link to={"/auth/login"} className=" text-xs m-auto text-teal-600">
                already have an account?
            </Link>
        </div>
    );
};

export default Register;