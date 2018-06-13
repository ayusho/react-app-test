import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

const columnData = [
    { id: 'projectname', numeric: true, disablePadding: false, label: 'Project name' },
    { id: 'description', numeric: true, disablePadding: false, label: 'Description' },
    { id: 'createdondate', numeric: true, disablePadding: false, label: 'Created' },
    { id: 'launch', numeric: true, disablePadding: false, label: 'Launch' },
  ];

class ProjectsTableHead extends React.Component {

    createSortHandler = property => event => {
      this.props.onRequestSort(event, property);
    };
  
    render() {
      const { numSelected, rowCount } = this.props;
  
      return (
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
  
            </TableCell>
            {columnData.map(column => {
              return (
                <TableCell
                  key={column.id}
                  numeric={column.numeric}
                  padding={column.disablePadding ? 'none' : 'default'}
                  
                >
                  <Tooltip
                    title="Sort"
                    placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                    enterDelay={300}
                  >
                    <TableSortLabel
                      onClick={this.createSortHandler(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              );
            }, this)}
          </TableRow>
        </TableHead>
      );
    }
  }
  
  ProjectsTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  export default ProjectsTableHead;