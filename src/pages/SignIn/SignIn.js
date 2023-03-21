import React from 'react';
import { useDispatch } from 'react-redux';

export const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(signIn({
    //     password: form.elements.password.value,
    //     email: form.elements.email.value
    // }))
    console.log(`{
            password: ${form.elements.password.value},
            email: ${form.elements.email.value}
        }`);
    form.reset();
  };

  return (
    <>
      <h2>Sign in to see your contacts</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};
