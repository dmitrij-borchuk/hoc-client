import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

export const Header = styled(AppBar)`
  && {
    position: relative;
  }
`;
export const Title = styled(Typography)`
  flex: 1;
`;
export const DialogFormBody = styled.div`
  padding: 1rem;
`;
