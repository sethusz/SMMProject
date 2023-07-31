import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import './LogIn.scss';
import SIGNIN_MUTATION from '../../server/signin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();
  const [signin, { loading, error }] = useMutation(SIGNIN_MUTATION);

  const handleSignIn = (data) => {
    signin({
      variables: {
        signInInput: {
          email: data.email,
          password: data.password,
        },
      },
    })
      .then((response) => {
        console.log('Logged in successfully', response.data);

        localStorage.setItem('accesstoken', response.data.signin.accessToken);
        localStorage.setItem('refreshtoken', response.data.signin.refreshToken);
        localStorage.setItem('user', JSON.stringify(response.data.signin.user));

        navigate('/');
      })
      .catch((error) => {
        console.error('SignIn failed', error);
      });
  };

  const validatePassword = (value) => {
    if (!/(?=.*[a-zA-Z])(?=.*\d).{8,}/.test(value)) {
      return 'Пароль должен содержать минимум 8 символов, включая буквы и цифры';
    }
    return true;
  };

  const onSubmit = handleSubmit(handleSignIn);

  return (
    <div className="login">
      <div className="login__form">
        <div className="login__container">
          <h2 className="login__title">Авторизоваться</h2>
          <form onSubmit={onSubmit}>
            <div>
              <label>Email:</label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Поле Email обязательно',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Некорректный Email адрес',
                  },
                }}
                render={({ field }) => <input type="text" {...field} className="login__input" />}
              />
              {errors.email && <p className="login__error">{errors.email.message}</p>}
            </div>
            <div>
              <label>Пароль:</label>
              <div className="login__password">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  id="password"
                  name="password"
                  {...control.register('password', {
                    required: 'Поле Пароль обязательно',
                    validate: validatePassword,
                  })}
                />
                <FontAwesomeIcon
                  icon={isPasswordVisible ? faEyeSlash : faEye}
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="password__icon"
                />
              </div>
              {errors.password && <p className="login__error">{errors.password.message}</p>}
            </div>
            <button type="submit" className="login__button">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
