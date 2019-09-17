import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import FormWrapper from './components/formWrapper';

function form() {
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
    <form>
      <Input className="btn default"
        type="username"
        icon="user"
        autoComplete='username'
        handleChange={ handleChange }
      />
      <WhiteSpace />
      <Input 
        className="btn default"
        type="password"
        icon="pwd"
        autoComplete='new-password'
        handleClick={ handleClick }
        handleChange={ handleChange }
      />
      <WhiteSpace />
      <Button submit="submit" handleClick={ handleClick } handleSubmit={ handleSubmit } className="btn default" type="button" value="登陆"/>
      </form>
  );
}

export default App;
