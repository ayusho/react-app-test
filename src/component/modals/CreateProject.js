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
    projectName: '',
    displayName: '',
    description: ''

  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  createProject = (evt) => {
    alert();
    this.setState({
      projectName : evt.target.value,
      description: evt.target.value,
      displayName: evt.target.value,
    });
    this.setState({ open: false });
    this.props.updateProject(this.state);
    return console.log(({projectName: this.state.projectName, description: this.state.description, displayName: this.state.displayName}))
  }
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

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
              name="projectName"
              type="text"
              value={this.state.projectName || ''}
              onChange={evt => this.handleChange(evt)}
              fullWidth
            />
            <TextField
              margin="dense"
              id="project-description"
              label="Description"
              name="description"
              type="text"
              value={this.state.description || ''}  
              onChange={evt => this.handleChange(evt)}                                        
              fullWidth
            />
            <TextField
              margin="dense"
              id="display-name"
              label="Display name"
              type="text"
              name="displayName"
              value={this.state.displayName || ''}     
              onChange={evt => this.handleChange(evt)}                                     
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={((e) => this.createProject(e))} color="primary">
              CREATE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
