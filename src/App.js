import React from 'react';
import schema from 'async-validator';
import WhiteSpace from './components/whiteSpace';
import Board from './components/Board';
import Logo from './components/Logo';
import Form from './components/Form';
import Button from './components/Button';
import Input from './components/Input';
import validate from './common/validate'
import FormWrapper from './components/formWrapper';
import './App.scss';

function App() {
  const imgUrl = 'http://landingsite.italent.link/Content/img/login-logo.png';
  const title = "北森实施一体化解决方案 ";
  let data = {
    username: '',
    password: 1111,
  }
  const formConfig = {
    descriptor: {
      username: {
        type: "string",
        required: true,
        validator: (rule, value) => value === 'muji',
      },
      password: {
        type: "string",
        required: true,
        validator: (rule, value) => value === 'muji',
      }
    },
    model: {
      username: data.username,
      password: data.password,
    }
    
  }
  function handleSubmit() {
    debugger;
    validate(formConfig);
    document.querySelector(".login_input_box").submit();
  }
  function handleClick(e, value) {
    console.log('handleClick e/ value', e, value);
  }
  function handleChange(e, value, type) {
     if(type === 'username') data.username = value;
     else if (type  === 'password') data.password = value; 
  }
  function handleUsernameBlur(e, value, type) {
  }
  function handlePwdBlur(e, value, type) {
  }
  return (
    <div className="container">
      <div className="left_container">
        <Board />
      </div>
      <div className="right_container">
        <Logo>
          <img className="logo-img" alt={title} src={imgUrl} />
          <p className="logo-title">北森实施一体化解决方案 <br /> SaaS产品的着陆场</p>
        </Logo>
        <Form className="login_input_box">
          <Input className="btn default"
            type="username"
            icon="user"
            autoComplete='username'
            handleChange={ handleChange }
            handleBlur= { handleUsernameBlur }
          />
          <WhiteSpace />
          <Input 
            className="btn default"
            type="password"
            icon="pwd"
            autoComplete='new-password'
            handleClick={ handleClick }
            handleChange={ handleChange }
            handleBlur= { handlePwdBlur }
          />
          <WhiteSpace />
          <Button submit="submit" handleClick={ handleClick } handleSubmit={ handleSubmit } className="btn default" type="button" value="登陆"/>
        </Form>
      </div>
    </div>
  );
}

export default App;
