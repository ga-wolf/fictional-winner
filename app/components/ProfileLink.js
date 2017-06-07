import React from "react";

const ProfileLink = props => {
  const url = `https://github.com/${props.username}`;
  return (
    <div>
      <a href={url} target="_blank">
        {props.username}
      </a>
    </div>
  );
};

// class ProfileLink extends React.Component {
//   render() {
//     const url = `https://github.com/${this.props.username}`;
//     return (
//       <div>
//         <a href={url} target="_blank">
//           {this.props.username}
//         </a>
//       </div>
//     );
//   }
// }

export default ProfileLink;
