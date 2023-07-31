import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import SIGNUP_MUTATION from '../../server/signUp';
import './AdminPanel.scss';
import ALL_USER from '../../server/allUsers';

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [signupMutation, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    refetchQueries: [ALL_USER],
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { register, reset, watch } = useForm();

  const handleSignUp = async (data) => {
    try {
      const {
        data: { signup },
      } = await signupMutation({
        variables: {
          signUpInput: {
            username: data.username,
            email: data.email,
            password: data.password,
          },
        },
      });
      console.log('Successfully registered!', signup);
      setSuccessMessage(`Пользователь (${data.username}) успешно зарегистрирован`);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const onSubmit = handleSubmit(handleSignUp);

  const validateEmail = (value) => {
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      return 'Неправильный формат email';
    }
    return true;
  };

  const validatePassword = (value) => {
    if (!/(?=.*[a-zA-Z])(?=.*\d).{8,}/.test(value)) {
      return 'Пароль должен содержать минимум 8 символов, включая буквы и цифры';
    }
    return true;
  };

  const validateUsername = (value) => {
    if (value.length > 16) {
      return 'Имя пользователя должно содержать не более 16 символов';
    }
    return true;
  };

  // Local state to hold the success message
  const [successMessage, setSuccessMessage] = useState('');

  return (
    <div className="signup">
      <div className="signup__title">Sign Up</div>
      <form onSubmit={onSubmit}>
        <div className="signup__field">
          <label className="signup__label">Username:</label>
          <div className="signup__input">
            <Controller
              name="username"
              control={control}
              rules={{
                required: 'Username is required',
                validate: validateUsername,
              }}
              defaultValue=""
              render={({ field }) => <input type="text" {...field} />}
            />
          </div>
          {errors.username && <p className="error__message">{errors.username.message}</p>}
        </div>
        <div className="signup__field">
          <label className="signup__label">Email:</label>
          <div className="signup__input">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'Email is required',
                validate: validateEmail,
              }}
              render={({ field }) => <input type="text" {...field} />}
            />
          </div>
          {errors.email && <p className="error__message">{errors.email.message}</p>}
        </div>

        <div className={`signup__field ${errors.password ? 'has-error' : ''}`}>
          <label htmlFor="password" className="signup__label">
            Password:
          </label>
          <div className="signup__password">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              {...control.register('password', {
                required: 'Password is required',
                validate: validatePassword,
              })}
            />
            <FontAwesomeIcon
              icon={isPasswordVisible ? faEyeSlash : faEye}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="password__icon"
            />
          </div>
          {errors.password && <p className="error__message">{errors.password.message}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default SignUp;
