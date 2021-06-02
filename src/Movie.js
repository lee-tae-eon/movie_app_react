import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, description, synopsis, poster }) {
  return <h5>{title}</h5>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
