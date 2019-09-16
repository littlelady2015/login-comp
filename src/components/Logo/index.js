import React from 'react';
import './index.scss';
function Logo(props) {
  return (<div className="logo_wrapper">
            { props.children }
          </div>
  )
}
export default Logo;
