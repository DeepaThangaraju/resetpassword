import * as yup from 'yup';
import { useFormik } from "formik";
import {useHistory} from "react-router-dom";
// import { API_URL } from "./global_constant";


const formValidationSchema = yup.object({
    email: yup.string().email("Must be valid email").required("Email is required"),
    password: yup.string().min(4).required("Why not fill the password?"),
})

const API_URL="https://userslogina.herokuapp.com";

export function Signin() {
    const history=useHistory();
    const {handleSubmit,values,handleChange,handleBlur,errors,touched}=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema: formValidationSchema,
        onSubmit: (newUser) => {
            console.log("onsubmit", newUser);
            adduser(newUser);
        },
    })
    const adduser=(newUser)=>{
      fetch(`${API_URL}/users`,
      {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(() => history.push("/users"));
    }
  return (
    <div className="registerform">
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input 
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter Email id" />
        {errors.email && touched.email && errors.email}<br />
        <label>Password:</label>
        <input 
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter Password"/>
        {errors.password && touched.password && errors.password}<br />
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
}
