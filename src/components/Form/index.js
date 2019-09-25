import React from 'react';
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  handleSubmit = () =>{
    console.log('submit already');
    this.formRef.current.submit();
  }
  handleClick = (e, value) => {
    console.log('handleClick e/ value', e, value);
  }
  handleChange = (e, value) => {
    console.log('handleChange e/ value', e, value);
  }
  render() {
    const { className, children } = this.props;
    return (
      <form ref={ this.formRef } className={className}> 
        { children }
      </form>
    );
  }
}
