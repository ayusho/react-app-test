import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';


export default class DeleteProject extends React.Component {
  state = {
    open: false,
    value: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  deleteProject = (prop, e) => {
    console.log(e.target);
    prop.deleteProject(prop.projectSelectedForDelete, this.state.value);
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <DeleteIcon onClick={this.handleClickOpen}/>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Projects</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this project? 
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Project name"
              type="text"
              value={this.state.value || ''}
              onChange={evt => this.handleChange(evt)}
              fullWidth
            />


          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={((e) => this.deleteProject(this.props, e))} color="primary">
              DELETE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
