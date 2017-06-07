import React from "react";

const HelloWorld = props => {
  return <h1>Hello {props.name.toUpperCase()}</h1>;
};

// class HelloWorld extends React.Component {
//   render() {
//     return <h1>Hello {this.props.name.toUpperCase()}</h1>;
//   }
// }

export default HelloWorld;
