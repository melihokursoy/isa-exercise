import { login } from '@isa-exercise/state';
import { Button, Card, Input } from '@isa-exercise/ui';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const [credentials, setCredentials] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCredentials((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleLogin = async () => {
    setError(null);
    login(credentials, ()=>{navigate('/');})
  };

  return (
    <Card
      title="Login to your account"
      footer={
        <Button buttonType="primary" onClick={handleLogin}>
          Login
        </Button>
      }
    >
      <Input label="Email" name="email" type="email" onChange={handleChange} />
      <Input
        label="Password"
        name="password"
        type="password"
        onChange={handleChange}
      />
      {error ? <h3>{error}</h3> : null}
    </Card>
  );
};
