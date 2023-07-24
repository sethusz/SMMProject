import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import SIGNUP_MUTATION from '../../server/signUp';

import './AdminPanel.scss';

const SignUp = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [signupMutation, { loading, error }] = useMutation(SIGNUP_MUTATION);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false)

  const {
    register,
    reset,
    watch
  } = useForm()


  const password = watch('password')
  const repeatPassword = watch('repeatPassword')

  const handleSignUp = async (data) => {
    try {
      const { data: { signup } } = await signupMutation({
        variables: {
          signUpInput: {
            username: data.username,
            email: data.email,
            password: data.password,
            closedAt: data.closedAt,
          },
        },
      });

      // Handle successful registration here, e.g. show a success message or redirect to another page
      console.log('Successfully registered!', signup);
    } catch (error) {
      // Handle error here, e.g. show an error message to the user
      console.error('Registration failed', error);
    }
  };

  const onSubmit = handleSubmit(handleSignUp);

  return (
    <div className="signup">
      <div className='signup__title'>Sign Up</div>
      <form onSubmit={onSubmit}>
        <div className='signup__field'>
          <label className='signup__label'>Username:</label>
          <div className="signup__input">
          <Controller
            name="username"
            control={control}
            rules={{ required: 'Username is required' }}
            defaultValue=""
            render={({ field }) => (
              <input type="text" {...field} />
            )}
          />
          </div>
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div className='signup__field'>
          <label className='signup__label'>Email:</label>
          <div className="signup__input">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: 'Email is required' }}
              render={({ field }) => (
                <input type="text" {...field} />
              )}
            />

          </div>
          {errors.email && <p>{errors.email.message}</p>}


        </div>

        <div className={`signup__field ${errors.password ? 'has-error' : ''}`}>
          <label htmlFor="password" className='signup__label'>Password:</label>
          <div className="signup__password">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              {...control.register('password', { required: 'Password is required' })}


            />
            <FontAwesomeIcon
              icon={isPasswordVisible ? faEyeSlash : faEye}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="password__icon"
            />
          </div>
          {errors.password && <div className="error__message">{errors.password.message}</div>}
        </div>


        <div className='signup__field'>
          <label className='signup__label'>data:</label>
          <div className="signup__input">
          <Controller
            name="closedAt"
            control={control}
            defaultValue=""
            rules={{ required: 'closedAt is required' }}
            render={({ field }) => (
              <input type="closedAt" {...field} />
            )}
          />
          </div>
          {errors.closedAt && <p>{errors.closedAt.message}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default SignUp;
