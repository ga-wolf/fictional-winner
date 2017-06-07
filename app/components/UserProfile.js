import React, { Component } from "react";
import Loading from "./Loading";

const UserProfile = props => {
  if (props.user) {
    const user = props.user;
    return (
      <div>
        <h5>Stats</h5>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Public Repositories: {user.public_repos}</p>
        <p>Public Gists: {user.public_gists}</p>
      </div>
    );
  } else {
    return <Loading />;
  }
};

// class UserProfile extends Component {
//   render() {
//     if (this.props.user) {
//       const user = this.props.user;
//       return (
//         <div>
//           <h5>Stats</h5>
//           <p>Followers: {user.followers}</p>
//           <p>Following: {user.following}</p>
//           <p>Public Repositories: {user.public_repos}</p>
//           <p>Public Gists: {user.public_gists}</p>
//         </div>
//       );
//     } else {
//       return <Loading />;
//     }
//   }
// }

export default UserProfile;
