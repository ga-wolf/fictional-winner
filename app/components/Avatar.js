import React from "react";
import ProfileLink from "./ProfileLink";
import ProfileName from "./ProfileName";
import ProfilePic from "./ProfilePic";
import Loading from "./Loading";

class Avatar extends React.Component {
  render() {
    if (this.props.user) {
      return (
        <div className="avatar">
          <ProfileName name={this.props.user.login} />
          <ProfilePic imageURL={this.props.user.avatar_url} />
          <ProfileLink username={this.props.user.login} />
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

export default Avatar;
