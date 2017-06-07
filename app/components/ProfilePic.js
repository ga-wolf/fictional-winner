import React from "react";

class ProfilePic extends React.Component {
  render() {
    return <img src={this.props.imageURL} width={200} height={200} />;
  }
}

export default ProfilePic;
