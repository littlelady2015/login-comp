import React from 'react';
import WhiteSpace from './components/whiteSpace';
import Board from './components/Board';
import Logo from './components/Logo';
import Button from './components/Button';
import './App.scss';

function App() {
  const imgUrl = 'http://landingsite.italent.link/Content/img/login-logo.png';
  const title = "北森实施一体化解决方案 ";
  let formRef = React.createRef();
  function handleSubmit() {
    console.log('submit already');
    formRef.current.submit();
  }
  function handleClick(e, value) {
    console.log('handleClick e/ value', e, value);
  }
  function handleChange(e, value) {
    console.log('handleChange e/ value', e, value);
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
        <form className="login_input_box" ref={ formRef }>
          <Button className="btn default"
            type="username"
            icon="user"
            handleClick={ handleClick }  
            handleChange={ handleChange }
          ></Button>
          <WhiteSpace />
          <Button 
            className="btn default"
            type="password"
            icon="pwd"
            handleClick={ handleClick }
            handleChange={ handleChange }
          ></Button>
          <WhiteSpace />
          <Button submit="submit" handleClick={ handleClick } handleSubmit={ handleSubmit } className="btn default" type="button" value="登陆"/>
        </form>
      </div>
    </div>
  );
}

export default App;
