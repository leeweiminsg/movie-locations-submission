import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

class SelectMovie extends Component {
  render() {
    const movies = this.props.movies;

    return (
      <Autocomplete
        options={movies}
        autoHighlight
        getOptionLabel={movie => movie.title}
        renderOption={movie => (
          <React.Fragment>
            <span>{movie.title}</span>
          </React.Fragment>
        )}
        renderInput={params => (
          <TextField
            {...params}
            label="Enter movie"
            variant="outlined"
            fullWidth
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password"
            }}
          />
        )}
        onChange={this.props.onSelectMovieChange}
      />
    );
  }
}

export default SelectMovie;
