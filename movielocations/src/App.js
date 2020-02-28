import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import firebase from "./Firebase";
import SelectMovie from "./components/SelectMovie";
import LocationList from "./components/LocationList";

import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      movies: [],
      locations: [],
      selectedMovie: "",
      movieLocations: []
    };
  }

  getData() {
    firebase
      .firestore()
      .collection("movies")
      .get()
      .then(snapshot => {
        this.setState({ data: snapshot });
        let movies = [];
        let locations = [];

        snapshot.forEach(doc => {
          movies.push({ title: doc.data().title });
          locations.push({ location: doc.data().locations });
        });

        movies.forEach((movie, id) => {
          movie.id = id++;
        });

        locations.forEach((location, id) => {
          location.id = id++;
        });

        this.setState({ movies: movies });
        this.setState({ locations: locations });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }

  onSelectMovieChange = (_e, movie) => {
    this.setState({
      selectedMovie: movie,
      movieLocations: this.state.locations[movie.id]
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { movies } = this.state;

    return (
      <Container maxWidth="sm">
        <Box m={4}>
          <Typography variant="h4" align="center">
            Movie Location
          </Typography>
        </Box>
        <Box>
          <SelectMovie
            movies={movies}
            onSelectMovieChange={this.onSelectMovieChange}
          />
        </Box>
        <Box>
          <LocationList movieLocations={this.state.movieLocations} />
        </Box>
      </Container>
    );
  }
}

export default App;
