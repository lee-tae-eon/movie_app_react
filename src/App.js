import React from "react";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMoives = async () => {
    const movies = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
  };

  componentDidMount() {
    this.getMoives();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "Ready"}</div>;
  }
}

export default App;
