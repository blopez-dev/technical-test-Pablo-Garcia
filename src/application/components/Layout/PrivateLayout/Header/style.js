import styled from 'styled-components';
import colors from '../../../../styles/colors';
import { device } from '../../../../styles/mediaQueries';

export const Heading = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 10px;
  background-color: ${colors.Info};
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 85%;
  width: 100%;
  button {
    background-color: ${colors.Login};
    background-image: none;
    border: none;
    width: 10%;
    padding: 8px 10px;
    color: ${colors.Light};
    border-radius: 15px;
    cursor: pointer;
    @media ${device.mobileM} {
      width: 40%;
    }
    @media ${device.tabletH} {
      width: 25%;
    }
    @media ${device.laptop} {
      max-width: 10%;
    }
  }
  @media ${device.laptop} {
    max-width: 95%;
  }
`;
