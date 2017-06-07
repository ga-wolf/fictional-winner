import axios from "axios";

const GithubHelpers = {
  getUser(username) {
    const url = `https://api.github.com/users/${username}`;
    return axios.get(url);
  },
  getUserRepositories(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    return axios.get(url);
  }
};

export default GithubHelpers;
