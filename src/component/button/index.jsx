/* eslint-disable react/prop-types */
import "./index.scss";
function Button({variant = "default", onClick,children="Button"}) {
   // block , element, modified :props 
   //danger => button--danger
  return <button onClick={onClick} className={`button button--${variant}`}>{children}</button>;
  
}

export default Button
