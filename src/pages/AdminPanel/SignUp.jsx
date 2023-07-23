import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import './AdminPanel.scss'

const SignUp = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data); // You can handle form submission logic here
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <Controller
            name="username"
            control={control}
            rules={{ required: 'Username is required' }}
            render={({ field }) => (
              <input type="text" {...field} />
            )}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{ required: 'Email is required' }}
            render={({ field }) => (
              <input type="text" {...field} />
            )}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password:</label>
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <input type="password" {...field} />
            )}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
