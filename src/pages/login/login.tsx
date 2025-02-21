import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/components/hooks/store';

import { loginAction } from 'src/store/api-action';


function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (emailRef.current && passwordRef.current) {
      try {
        const response = await dispatch(loginAction({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }));
        if (response.meta.requestStatus === 'fulfilled') {
          navigate('/');
        } else {
          // Ajoute ici un message d'erreur si la connexion échoue
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Login error', error);
      }
    }
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden" htmlFor="email">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                ref={emailRef}
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden" htmlFor="password">Password</label>
              <input
                className="login__input form__input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
