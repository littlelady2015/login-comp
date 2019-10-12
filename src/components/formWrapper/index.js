import React from 'react';

function FormWrapper(Wrappedcomponent) {
  return (class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.info('current Props',this.props);
      console.info('next Props', nextProps);
    }
    render() {
      return <Wrappedcomponent {...this.props} />;
    }
  })
}
export default FormWrapper;
