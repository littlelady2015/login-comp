import React from 'react';
import schema from 'async-validator';
import WhiteSpace from './components/whiteSpace';
import Board from './components/Board';
import Logo from './components/Logo';
import Form from './components/Form';
import Button from './components/Button';
import Input from './components/Input';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: '',
        password: '',
      },
      formConfig: {
        descriptor: {
          username: {
            type: "string",
            required: true,
            validateStatus:  true,
            message: '用户名不能为空',
            validator: (rule, value) => value !== '',
          },
          password: {
            type: "string",
            required: true,
            validateStatus:  true,
            message: '密码不能为空',
            validator: (rule, value) => value !== '',
          }
        },
        model: {
          username: '',
          password: '',
        }   
      }
    }
    this.imgUrl = 'http://landingsite.italent.link/Content/img/login-logo.png';
    this.title = "北森实施一体化解决方案 ";
  }
  handleErrors = (errors, fields) => {
    let { formConfig } = this.state;
    for (let key in fields){
      formConfig.descriptor[key].validateStatus = false;
    } 
    this.setState({
      formConfig: formConfig,
    })
  }
  formValidate = () => {
    const { formConfig , formData} = this.state;
     const validator = new schema(formConfig.descriptor);
     validator.validate(formData, (error,fields) => {
      if(error) {
        this.handleErrors(error, fields);
      }
    }); 
  }
  handleSubmit = () => {
    this.formValidate(); 
    // document.querySelector(".login_input_box").submit();
  }
  handleClick = (e) => {
    console.log('handleClick e/ value', e.target.value);
  }
  handleChange= (e,type) => {
     const { formData } = this.state;
     const value = e.target.value;
     if(type === 'username') formData.username = value;
     else if (type  === 'password') formData.password = value; 
     this.setState({
      formData: formData,
     })
  }
  handleUsernameBlur = (e) => {
    const { formData } = this.state;
    formData.username = e.target.value;
    this.setState({
      formData: formData,
     })
  }
  handlePwdBlur = (e) => {
    const { formData } = this.state;
    formData.password = e.target.value;
    this.setState({
      formData: formData,
    })
  }
  render() {
    const { formConfig } = this.state;
    return (
      <div className="container">
        <div className="left_container">
          <Board />
        </div>
        <div className="right_container">
          <Logo>
            <img className="logo-img" alt={this.title} src={this.imgUrl} />
            <p className="logo-title">北森实施一体化解决方案 <br /> SaaS产品的着陆场</p>
          </Logo>
          <Form className="login_input_box">
            <Input className="btn default"
              type="username"
              icon="user"
              autoComplete='username'
              validate={formConfig.descriptor.username}
              handleChange={ this.handleChange }
              handleBlur= { this.handleUsernameBlur }
            />
            <WhiteSpace />
            <Input 
              className="btn default"
              type="password"
              icon="pwd"
              autoComplete='new-password'
              validate={formConfig.descriptor.password}
              handleClick={ this.handleClick }
              handleChange={ this.handleChange }
              handleBlur= { this.handlePwdBlur }
            />
            <WhiteSpace />
            <Button submit="submit" handleClick={ this.handleClick } handleSubmit={ this.handleSubmit } className="btn default" type="button" value="登陆"/>
          </Form>
        </div>
      </div>
    );
  }
  
}

export default App;
