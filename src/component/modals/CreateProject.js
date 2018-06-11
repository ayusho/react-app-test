import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';


export default class CreateProject extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <AddIcon onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Projects</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You can create projects just by providing just a few details.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="project-name"
              label="Project name"
              type="text"
              fullWidth
            />
                        <TextField
              autoFocus
              margin="dense"
              id="project-description"
              label="Description"
              type="text"
              fullWidth
            />
                        <TextField
              autoFocus
              margin="dense"
              id="display-name"
              label="Display name"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              CREATE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
