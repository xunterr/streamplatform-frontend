import { useFormik } from "formik";
import { useEffect } from "react";
import * as yup from "yup";
import Header from "../../components/Header";
import { TextInput } from "../../components/TextInput";
import ReactLoading from 'react-loading';
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

const validationSchema = yup.object().shape({
    username: yup.string().min(4).required("required"),
    password: yup.string().min(8).required("required"),
})

const Login = () => {
    const nav = useNavigate()
    const signIn = useSignIn();
    const handleFormSubmit = (values, actions)=>{
        signIn({
            token: "exampleToken",
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: {username: values.username}
        })
        nav("/home")
    }

    const {values, errors, touched, isSubmitting, setFieldValue, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues:{
            username: '',
            password: '',
        },
        validationSchema:validationSchema,
        onSubmit:handleFormSubmit,
    })

    return (
        <div className="bg-secondary-500 p-6 flex flex-col gap-2">
            <Header title={"Login"} subtitle={"Use an existing account"}/>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <TextInput id="username" onChange={handleChange}
                placeholder="Username"
                value={values.username}
                onBlur={handleBlur}
                isError={errors.username && touched.username}
                errorMessage={errors.username}/>

                <TextInput id="password" onChange={handleChange}
                placeholder="Password"
                value={values.password}
                onBlur={handleBlur}
                isError={errors.password && touched.password}
                errorMessage={errors.password} isCopy={false} isHidden={true}/>

                <button 
                disabled={isSubmitting}
                className="button w-full h-10 bg-teal-600 
                p-1 font-mono disabled:opacity-25" 
                type="submit">
                    {isSubmitting ? <ReactLoading type="cubes" height={"100%"} width={"15%"} delay={100}/> : "Login"}
                </button>
            </form>
            <button className="button w-full n text-sm disabled:opacity-25 p-1">
                Login with something    
            </button>
            <Link to={"/auth/register"} className=" text-xs m-auto text-teal-600">
                do not have an account?
            </Link>
        </div>
    );
};

export default Login;