import React from 'react';
import styled from 'styled-components';
import { signInWithGoogle } from '../firebase'; // Ensure this path is correct

// You might need to install react-icons: npm install react-icons
import { FaGoogle } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const LoginBox = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 20rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  color: #1f2937;
`;

const Subtitle = styled.p`
  color: #4b5563;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: #2563eb;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #bfdbfe;
  }
`;

const GoogleIcon = styled(FaGoogle)`
  margin-right: 0.5rem;
`;

const GoogleLoginComponent = ({ onLoginSuccess }) => {
  const handleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      onLoginSuccess(user);
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  return (
    <Container>
      <LoginBox>
        <Title>Welcome Back</Title>
        <Subtitle>Please sign in with your Google account to continue</Subtitle>
        <Button onClick={handleLogin}>
          <GoogleIcon />
          Sign in with Google
        </Button>
      </LoginBox>
    </Container>
  );
};

export default GoogleLoginComponent;