import React from 'react';
import './index.scss';
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(e, value) {
    this.props.handleChange(e, value); 
  }
  handleClick(e,value) {
    const { handleClick, handleSubmit, type } = this.props;
    if(type === 'button') {
      handleSubmit();
      return;
    } 
    handleClick(e,value);
  }

  render() {
    const {icon, id, name, placeholder, type, value, validate} = this.props;
    const prefix = type === 'button' ? 'btn-wrapper' : 'input-wrapper';
    const validateStyle = validate ? {display: 'none'} : {display: 'block'};
    return (
      <div className={`${prefix} ${type}`}>
        {icon ? <span className="input_icon"></span>: null }
        <input id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onClick={ this.handleClick }
          onChange={ this.handleChange }     
        />
        <p style={ validateStyle }>{ validate && validate.msg}</p>
      </div>
    )
    }
}
