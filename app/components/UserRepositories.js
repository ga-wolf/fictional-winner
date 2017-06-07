import React, { Component } from "react";
import Loading from "./Loading";

class UserRepositories extends Component {
  render() {
    if (this.props.repos) {
      const repos = this.props.repos
        .sort((a, b) => {
          return a.name - b.name;
        })
        .map(repo => {
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
  }
}

export default UserRepositories;
