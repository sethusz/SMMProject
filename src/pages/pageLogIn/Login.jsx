import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import './LogIn.scss';
import SIGNIN_MUTATION from '../../server/signin';

const Login = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
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

        // Save tokens and user data to localStorage
        localStorage.setItem('accesstoken', response.data.signin.accessToken);
        localStorage.setItem('refreshtoken', response.data.signin.refreshToken);
        localStorage.setItem('user', JSON.stringify(response.data.signin.user));

        navigate('/');
      })
      .catch((error) => {
        console.error('SignIn failed', error);
      });
  };

  const onSubmit = handleSubmit(handleSignIn);

  return (
    <>
      <div className="login">
        <div className='login__container'>
          <h2 className="login__title">Авторизоваться</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Email:</label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: 'Поле Email обязательно' }}
                render={({ field }) => (
                  <input type="text" {...field} className="login__input" />
                )}
              />
              {errors.email && <p className="login__error">{errors.email.message}</p>}
            </div>
            <div>
              <label>Пароль:</label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: 'Поле Пароль обязательно' }}
                render={({ field }) => (
                  <input type="password" {...field} className="login__input" />
                )}
              />
              {errors.password && <p className="login__error">{errors.password.message}</p>}
            </div>
            <button type="submit" className="login__button">Войти</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
