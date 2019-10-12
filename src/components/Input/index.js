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
  handleChange(e) {
    const { type } = this.props;
    this.props.handleChange(e, type); 
  }
  onBlur(e) {
    this.props.handleBlur(e);
  }
  render() {
    let {icon, id, name, placeholder, autoComplete, type, validate} = this.props;
    const validateStyle = validate.validateStatus ? {display: 'none'} : {display: 'block'};
    if(autoComplete === undefined) autoComplete = 'username'; 
    return (
      <div className={`input-wrapper ${type}`}>
        {icon ? <span className="input_icon"></span>: null }
        <input id={ id }
          name={ name }
          autoComplete={ autoComplete }
          placeholder={ placeholder }
          type={type}
          onChange={ this.handleChange }     
          onBlur={ this.onBlur }
        />
        <div className="error-info" style={ validateStyle }>{ validate && validate.message }</div>
      </div>
    )
    }
}
