import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Geocode from "../GeoCode";
import MapModal from "./MapModal";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieLocations: this.props.movieLocations,
      locationCoordinates: []
    };
  }

  getCoordinates() {
    let locationCoordinates = [];
    let movieLocations = this.props.movieLocations.location;

    movieLocations.forEach((locationName, i) => {
      Geocode.fromAddress(locationName).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          locationCoordinates.push({ id: i, lat, lng });
        },
        error => {
          console.error(error);
        }
      );
    });

    this.setState({ locationCoordinates: locationCoordinates });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movieLocations !== this.props.movieLocations) {
      this.setState({ movieLocations: this.props.movieLocations.location });
      this.getCoordinates();
    }
  }

  render() {
    const { movieLocations } = this.state;

    return (
      <List component="nav">
        {movieLocations.map((location, i) => {
          return (
            <ListItemLink key={location}>
              <ListItemText primary={location} />
              <MapModal
                index={i}
                locationCoordinates={this.state.locationCoordinates}
                locationName={location}
              />
            </ListItemLink>
          );
        })}
      </List>
    );
  }
}

export default LocationList;
