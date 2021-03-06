import React, { Component } from "react";
import Loading from "./Loading";

const UserRepositories = props => {
  if (props.repos) {
    const repos = props.repos.map(repo => {
      return (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank">
            {repo.name}
          </a>
        </li>
      );
    });
    return (
      <div className="userRepo">
        <h5>Repositories</h5>
        <ul>
          {repos}
        </ul>
      </div>
    );
  } else {
    return <Loading />;
  }
};

// class UserRepositories extends Component {
//   render() {
//     if (this.props.repos) {
//       const repos = this.props.repos.map(repo => {
//         return (
//           <li key={repo.id}>
//             <a href={repo.html_url} target="_blank">
//               {repo.name}
//             </a>
//           </li>
//         );
//       });
//       return (
//         <div className="userRepo">
//           <h5>Repositories</h5>
//           <ul>
//             {repos}
//           </ul>
//         </div>
//       );
//     } else {
//       return <Loading />;
//     }
//   }
// }

export default UserRepositories;
