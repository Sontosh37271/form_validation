import React from 'react'
import { PropTypes } from "prop-types";  // ami PropTypes nilam
console.log(PropTypes);
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.roll}</h1>
    </div>
  );
};
User.propTypes ={
    name: PropTypes.string,
    roll:PropTypes.number
}
export default User;
