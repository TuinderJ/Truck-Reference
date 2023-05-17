import { Form, FormContainer, Input, InputContainer, Label, SubmitButton } from './style';

export default function AddAccountPage() {
  const onformSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <FormContainer>
      <Form onSubmit={onformSubmit}>
        <InputContainer>
          <Label>Email Account of New User:</Label>
          <Input type='email' />
        </InputContainer>
        <SubmitButton type='submit'>Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
}
