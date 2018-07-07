import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Container } from './styles';

export default function ResponsiveTable(props) {
  const {
    data,
    headers,
    keys,
    onClick,
  } = props;

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            {keys.map(key => (
              <TableCell key={key}>{headers[key]}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow
              key={row.id}
              onClick={() => onClick(row)}
            >
              {keys.map(key => (
                <TableCell
                  key={key}
                  component="th"
                  scope="row"
                >
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

ResponsiveTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]))).isRequired,
  // data: PropTypes.arrayOf(PropTypes.oneOf([
  //   PropTypes.objectOf(PropTypes.string),
  //   PropTypes.objectOf(PropTypes.number),
  // ])).isRequired,
  headers: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
};

ResponsiveTable.defaultProps = {
  onClick: () => {},
};
