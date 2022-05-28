import React, { useContext } from 'react'
import { Formik, Form, ErrorMessage } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { DatabaseContext } from './DatabaseContext';

export const Signup = () => {

   const {userInfo} = useContext(DatabaseContext);
   const [UserInfoValue,setUserInfoValue] = userInfo;
   const {Update} = useContext(DatabaseContext);
   const [UpdateValue,setUpdateValue] = Update

    const validate = Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required(' Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required'),

    })
    const initialValues = {email:'',password:''};
    var navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                initialValues.email=values.email;
                initialValues.password=values.password;
               
                setUserInfoValue([...UserInfoValue,initialValues])
                setUpdateValue(true);
                navigate('/login');
                
            }}
        >
            {formik => (
                <div>
                    <h1 className='my-5 font-weight-bold-display-4' style={{color:"black",fontSize:"3em", marginLeft:"30%"}}>Sign Up</h1>
                    <Form>
                        <TextField label="First Name" name="firstName" type="text"/>
                        <TextField label="Surname" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="text" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />

                       
                        <button className='btn btn-primary mt-3' type="submit" disabled={!formik.isValid} >Register</button>
                        
                        
                    </Form>
                </div>
            )

            }
        </Formik>
    )
}

export default Signup;
