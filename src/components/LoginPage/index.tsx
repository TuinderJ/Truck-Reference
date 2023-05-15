import React, { useState } from 'react';
import auth from '../../utils/auth';
import { Button, FormContainer, Input, InputContainer, InputLabel, InputsContainer, LoginSignupForm, Option, OptionInput, OptionLabel, OptionsContainer, Title } from './style';
import { LoginStateChange } from '../types';

export default function LoginPage() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleFormChange = (e: React.FormEvent<EventTarget>, type: LoginStateChange) => {
    const target = e.currentTarget as HTMLInputElement;
    switch (type) {
      case 'EMAIL':
        setFormState({ ...formState, email: target.value.toUpperCase() });
        break;
      case 'PASSWORD':
        setFormState({ ...formState, password: target.value });
        break;
    }
  };

  const handleFormSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    console.log('submit');
  };

  const testLogin = async () => {
    const response = await fetch(`https://us-central1-truck-reference.cloudfunctions.net/login`, {
      method: 'POST',
      body: JSON.stringify({
        username: 'test',
        email: 'test@test.com',
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
            <Title>Login</Title>
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
        </LoginSignupForm>
      </FormContainer>
    </>
  );
}
