import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="page-container">
      <h1>Registration Form</h1>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input 
            type="text" 
            name="firstName" 
            {...register('firstName', { required: 'First name is required!' })} 
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </label>

        <label>
          Last Name:
          <input 
            type="text" 
            name="lastName" 
            {...register("lastName", { required: 'Last name is required!' })} 
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </label>

        <label>
          Email:
          <input 
            type="text" 
            name="email" 
            {...register("email", { 
              required: 'Email is required!', 
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } 
            })} 
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>

        <label>
          Password:
          <input 
            type="password" 
            name="password" 
            {...register("password", { 
              required: 'Password is required!', 
              minLength: { value: 5, message: "Password must be more than 4 characters" }, 
              maxLength: { value: 20, message: "Password must be less than 20 characters" } 
            })} 
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>

        <input type="submit" value="Submit" className="submit-button" />
        {isSubmitted && <p id="registration-message">Registration Successful!!</p>}
      </form>
    </div>
  );
}

export default RegistrationForm;
