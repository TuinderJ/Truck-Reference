import React, { useState } from 'react';
import auth from '../../utils/auth';
import { Button, FormContainer, Input, InputContainer, InputLabel, InputsContainer, LoginSignupForm, Message } from './style';
import { LoginStateChange } from '../types';

export default function LoginPage() {
  if (auth.loggedIn()) location.href = '/';

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleFormChange = (e: React.FormEvent<EventTarget>, type: LoginStateChange): void => {
    const target = e.currentTarget as HTMLInputElement;
    switch (type) {
      case 'EMAIL':
        setFormState({ ...formState, email: target.value });
        break;
      case 'PASSWORD':
        setFormState({ ...formState, password: target.value });
        break;
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<EventTarget>): Promise<void> => {
    e.preventDefault();
    const response = await fetch(`https://us-central1-truck-reference.cloudfunctions.net/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: formState.email.toUpperCase(),
        password: formState.password,
      }),
    });
    const { token } = await response.json();
    auth.login(token);
  };

  return (
    <>
      <FormContainer>
        <LoginSignupForm onSubmit={handleFormSubmit}>
          <InputsContainer>
            <InputContainer>
              <InputLabel htmlFor='email'>Email:</InputLabel>
              <Input required id='email' type='email' value={formState.email} onChange={(e) => handleFormChange(e, 'EMAIL')} />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor='password'>Password:</InputLabel>
              <Input required id='password' type='password' value={formState.password} onChange={(e) => handleFormChange(e, 'PASSWORD')} />
            </InputContainer>
          </InputsContainer>
          <Button>Login</Button>
          <Message>
            If you need an accound, please <a href='mailto:tuinderj@rushenterprises.com?subject=Truck Reference Account Request'>email</a> requesing an account.
          </Message>
        </LoginSignupForm>
      </FormContainer>
    </>
  );
}
