import React from 'react';

import ChildPic from '../assets/assets';

const Login = () => {
  console.log(ChildPic);
  return (
    <div>
      <h1>This is a Login Page</h1>
      <img src={ChildPic} />
    </div>
  );
};

export default Login;
