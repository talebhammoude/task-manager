import * as React from 'react';
import { Button } from '@mantine/core';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = "event.currentTarget";
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      
    <div>
      <Button>Hello world!</Button>
    </div>
    
  )
}