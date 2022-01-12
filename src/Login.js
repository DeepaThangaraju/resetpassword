import * as yup from 'yup';
import { useFormik } from "formik";
const formValidationSchema = yup.object({
    email: yup.string().email("Must be valid email").required("Email is required"),
    password: yup.string().min(4).required("Why not fill the password?"),
})  
export function Login() {
    const {handleSubmit,values,handleChange,handleBlur,errors,touched}=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema: formValidationSchema,
        onSubmit: ({email,password}) => {
            console.log("onsubmit", email,password);
           
        },
    })
  return (
    <div>
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
