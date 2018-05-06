import React from 'react';
import PropTypes from 'prop-types';
import { ContentContainer } from './styles';

export default function Content(props) {
  const {
    children,
  } = props;

  return (
    <ContentContainer>
      {children}
    </ContentContainer>
  );
}

Content.propTypes = {
  children: PropTypes.node,
};

Content.defaultProps = {
  children: null,
};
