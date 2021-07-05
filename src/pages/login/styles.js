import styled from 'styled-components';
import colors from '../../application/styles/colors';
import { device } from '../../application/styles/mediaQueries';

const FormLogin = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${colors.Shadow};

  form {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 25%;
    padding: 15px 25px;
    box-sizing: border-box;
    min-height: 350px;
    background-color: ${colors.Light};
    box-shadow: 2px 3px 9px rgb(86 83 83 / 37%);

    input {
      margin: 10px 0;
      width: 90%;
      max-width: 100%;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      padding: 10px 7px;
      &:focus-visible {
        outline: none;
      }
    }

    button {
      width: 35%;
      margin: 5px 10px;
      padding: 8px 10px;
      border: 0;
      color: ${colors.Light};
      font-size: 0.95rem;
      background: ${colors.Primary};
      cursor: pointer;
    }
    @media ${device.mobileM} {
      width: 90%;
    }
    @media ${device.tabletH} {
      width: 65%;
    }
    @media ${device.laptop} {
      max-width: 40%;
    }
    @media ${device.laptopL} {
      max-width: 30%;
    }
  }
`;
export default FormLogin;
