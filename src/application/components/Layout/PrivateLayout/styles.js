import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Layout = styled.div`
  display: block;
  width: 100%;
  min-height: calc(100vh - 26px);
  background-color: ${colors.Custom};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 26px);
`;
