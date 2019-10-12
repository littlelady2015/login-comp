import schema from 'async-validator';

function handleErrors(errors, fields) {
  let errorStatus = [];
  let errorInfo = {};
  errors.forEach(item => {
    if(!item.status) {
      errorInfo.msg = fields.msg;
      // 代表此时校验出错
      errorInfo.status = true;
      errorStatus.push(errorInfo);
    }
  })
  return errorStatus; 
}

export default function validate(form) {
  // model 需要校验的对象
  const { descriptor , model } = form;
  const validator = new schema(descriptor);
  validator.validate(model, (errors, fields) => {
    if(errors) return  handleErrors(errors, fields);
  })
// 根据校验规则构造一个 validator
}

