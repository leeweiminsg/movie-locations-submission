import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

import MapContainer from "./MapContainer";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${35}%`,
    left: `${35}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400
  }
}));

const MapModal = props => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        View
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <MapContainer
            index={props.index}
            locationCoordinates={props.locationCoordinates}
            locationName={props.locationName}
          />
        </div>
      </Modal>
    </div>
  );
};

export default MapModal;
