import React from 'react';
import PropTypes from 'prop-types';
import MDList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function List(props) {
  const {
    items,
  } = props;

  return (
    <MDList>
      {items.map(item => (
        <ListItem key={item.key}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </MDList>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};
