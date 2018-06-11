import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { lighten } from '@material-ui/core/styles/colorManipulator';

import toolbarStyles from '../assets/jss/componentStyle/projectTableToolbar';
import CreateProject from './modals/CreateProject';
import DeleteProject from './modals/DeleteProject';


  
let ProjectTableToolbar = props => {
    const { numSelected, classes } = props;
    console.log(props.numSelected);
  
    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subheading">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography variant="title" id="tableTitle">
              Projects
            </Typography>
          )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {numSelected === 1 ? (
            <Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteProject />
              </IconButton>
            </Tooltip>
          ) : (numSelected === 0) ? (
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list">
              <CreateProject />
              </IconButton>
            </Tooltip>
          ) : console.log() }
        </div>
      </Toolbar>
    );
  };
  
  ProjectTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
  };
  
  ProjectTableToolbar = withStyles(toolbarStyles)(ProjectTableToolbar);

  export default ProjectTableToolbar;