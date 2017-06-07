import React, { Component } from "react";
import Avatar from "./Avatar";
import UserProfile from "./UserProfile";
import UserRepositories from "./UserRepositories";
import GithubHelpers from "../utils/GithubHelpers";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      repos: null
    };
  }
  componentWillMount() {
    const username = this.props.match.params.username;
    GithubHelpers.getUser(username).then(response => {
      this.setState({
        user: response.data
      });
      console.log(response.data);
    });
    GithubHelpers.getUserRepositories(username).then(response => {
      this.setState({
        repos: response.data
      });
    });
  }
  render() {
    return (
      <div>
        <Avatar user={this.state.user} />
        <hr />
        <div className="row">
          <div className="six columns">
            <UserProfile user={this.state.user} />
          </div>
          <div className="six columns">
            <UserRepositories repos={this.state.repos} />
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
