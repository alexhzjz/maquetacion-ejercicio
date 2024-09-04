import React from 'react';
import Input from '/Input';
import Button from '/Button';

const Form = () => {
  return (
    <form className="form">
      <Input placeholder="Input 1" />
      <Input placeholder="Input 2" />
      <Input placeholder="Input 3" />
      <Button />
    </form>
  );
};

export default Form;