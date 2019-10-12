import React from 'react';
import './index.scss';
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, value) {
    this.props.handleSubmit(e, value); 
  }

  render() {
    const { id, name, placeholder, type, value } = this.props;
    return (
      <div className={`btn-wrapper ${type} `}>
        <button id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onClick={ this.handleClick }     
        >登陆</button>
      </div>
    )
    }
}
