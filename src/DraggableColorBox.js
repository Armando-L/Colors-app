import React from 'react';
import { sortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = sortableElement(props => {
  const { classes, handleClick, name, color } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }} >
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.delateIcon} onClick={handleClick} />
      </div>
    </div>
  )
})
export default withStyles(styles)(DraggableColorBox);