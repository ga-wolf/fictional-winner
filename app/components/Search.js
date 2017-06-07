import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.searchForUser = this.searchForUser.bind(this);
  }
  searchForUser(e) {
    e.preventDefault();
    this.props.history.push(`/details/${this.state.searchTerm}`);
  }
  handleUserInput(e) {
    this.setState({
      searchTerm: e.currentTarget.value
    });
  }
  render() {
    return (
      <form onSubmit={this.searchForUser}>
        <h2>Search for a user</h2>
        <input
          type="text"
          name="search"
          value={this.state.searchTerm}
          placeholder="Username: "
          onInput={this.handleUserInput}
        />
        <br />
        <input
          type="submit"
          className="button-primary"
          value={`Search for ${this.state.searchTerm}`}
        />
      </form>
    );
  }
}

export default Search;
