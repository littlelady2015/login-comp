import React from 'react';
import Button from '../Button';
import Input from '../Input';
import validate from '../../common/validate';
export default function Form(props) {
 const form = {
  rules: {
    username: {
      type: 'String',
      required: true,
    },
    password: {
      type: 'Number',
      required: true,
    }
  }
}
  const formRef = React.createRef();
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
  function handleBlur() {
    
  }
  return (
    <form ref={ formRef } className={props.className}> 
      { props.children }
    </form>
  ); 
}
