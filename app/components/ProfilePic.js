import React from "react";

const ProfilePic = props => {
  return <img src={props.imageURL} width={200} height={200} />;
};

// class ProfilePic extends React.Component {
//   render() {
//     return <img src={this.props.imageURL} width={200} height={200} />;
//   }
// }

export default ProfilePic;
