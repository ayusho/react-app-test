import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import ProjectsTableHead from './ProjectsTableHead';
import ProjectTableToolbar from './ProjectTableToolbar';

import projectTableStyle from '../assets/jss/componentStyle/projectsTable.jsx';
import Button from '@material-ui/core/Button/Button';

let counter = 0;
function createData(projectName, description, createdOn, launchLabel) {
  counter += 1;
  return { id: counter, projectName, description, createdOn, launchLabel };
}

class ProjectsTable extends React.Component {
  constructor(props) {
    super(props);
    this.updateProjectData = this.updateProjectData.bind(this);
    this.state = {
      selected: [],
      data: [],
      page: 0,
      rowsPerPage: 5,
      isLoaded: false,
      projectName: '',
      description: '',
      displayName: ''
    };
  }

  updateProjectData = (project) => {
    this.setState({
      projectName : project.projectName,
      description : project.description,
      displayName : project.displayName
    });

  }
  componentDidMount() {
    fetch("http://localhost:4000/api/openshift/projects?token=Xx4riIMKN8IUauVi4MVjvioIcxa9HKe7LruMM3FDlUI&username=ayush")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.map(project => createData(project.project_name, project.project_description, project.creation_time,'Launch'))
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleClick = (event, id) => {

    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  launchBot = (e,name) => {
    alert('opening botify ' + name.projectName);
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    return (
      <Paper className={classes.root}>
        <ProjectTableToolbar numSelected={selected.length} updateProject={this.updateProjectData} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <ProjectsTableHead
              numSelected={selected.length}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                const isSelected = this.isSelected(n.id);
                return (
                  <TableRow
                    hover
                    onClick={event => this.handleClick(event, n.id)}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isSelected} />
                    </TableCell>
                    <TableCell numeric>{n.projectName}</TableCell>
                    <TableCell numeric>{n.description}</TableCell>
                    <TableCell numeric>{n.createdOn}</TableCell>
                    <TableCell numeric><Button onClick= {((e)=> this.launchBot(e, n))}className={classes.button}>{n.launchLabel}</Button></TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
        
      </Paper>
      
    );
  }
}

ProjectsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(projectTableStyle)(ProjectsTable);
