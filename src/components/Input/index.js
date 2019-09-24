import React from 'react';
import './index.scss';
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value && props.value.length !== 0 ? props.value : props.defaultValue || []
    };
    this.handleChange = this.handleChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  handleChange(e, value) {
    this.props.handleChange(e, value); 
  }
  onBlur(e,value) {
    this.props.handleBlur(e,value);
  }
  render() {
    let {icon, id, name, placeholder, autoComplete, type, validate} = this.props;
    const validateStyle = validate ? {display: 'none'} : {display: 'block'};
    if(autoComplete === undefined) autoComplete = 'username'; 
    return (
      <div className={`input-wrapper ${type}`}>
        {icon ? <span className="input_icon"></span>: null }
        <input id={id}
          name={name}
          autoComplete={autoComplete}
          placeholder={placeholder}
          type={type}
          onChange={ this.handleChange.bind(this, type) }     
          onBlur={ this.onBlur.bind(this, type) }
        />
        <p style={ validateStyle }>{ validate && validate.msg}</p>
      </div>
    )
    }
}
