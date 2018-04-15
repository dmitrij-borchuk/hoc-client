import React from 'react';
import PropTypes from 'prop-types';
import MDList, { ListItem, ListItemText } from 'material-ui/List';

export default function List(props) {
  const {
    items,
  } = props;

  return (
    <MDList>
      {items.map(item => (
        <ListItem key={item}>
          <ListItemText>
            <span>{item}</span>
          </ListItemText>
        </ListItem>
      ))}
    </MDList>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
