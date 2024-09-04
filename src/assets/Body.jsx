import React from 'react';
import Main from '/Main';
import Section from '/Section';
import Div from '/Div';
import Form from '/Form';
import '/styles.css';

const Body = () => {
  return (
    <div className="body">
      <Main />
      <div className="right-side">
        <Section />
        <Div />
        <Div />
      </div>
      <Form />
    </div>
  );
};

export default Body;

