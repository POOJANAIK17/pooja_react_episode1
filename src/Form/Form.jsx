import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
function Form() {
    const onSubmit = (data) => {
        console.log(data);
    }
    const schema = yup.object().shape({
        fullName: yup.string().required("Fill name is required"),
        email: yup.string().email("Must be an email").required("Email is required"),
        age: yup.number().min(18).positive().integer().required("Age is required"),
        password: yup.string().min(4, "Atleast 4 chars").max(10).required("Password is required"),
        confirmpassword: yup.string().oneOf([yup.ref("password"), null], "Password does not match").required("Password is required"),
    });
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name" {...register("fullName")} />
        <p>{errors.fullName?.message}</p>
        <input type="text" placeholder="Email" {...register("email")}/>
        <p>{errors.email?.message}</p>
        <input type="text" placeholder="Age" {...register("age")}/>
        <p>{errors.age?.message}</p>
        <input type="password" placeholder="Password" {...register("password")}/>
        <p>{errors.password?.message}</p>
        <input type="password" placeholder="Confirm Password" {...register("confirmpassword")}/>
        <p>{errors.confirmpassword?.message}</p>
        <input type="submit"/>
    </form>
  )
}

export default Form