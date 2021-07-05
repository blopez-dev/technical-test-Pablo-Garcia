import styled from 'styled-components';

const FormUserData = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 25px 0;
  form {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    .form__input {
      width: 95%;
      margin: 5px auto;
      padding: 5px;
      border-top: 0;
      border-right: 0;
      border-left: 0;
      border-bottom: 1px solid #09afdb;
      &:focus,
      &:focus-visible,
      &:active {
        border: 0;
        outline: 0;
        background: transparent;
        outline: none;
        border-bottom: 1px solid #09afdb;
      }
    }

    .form__input-button {
      width: 20%;
      margin: 10px 0;
      border: 0;
      cursor: pointer;
      padding: 8px 12px;
      font-size: 0.95rem;
      background: transparent;
    }

    & .update {
      background-color: #09afdb;
      color: #fff;
    }

    & .delete {
      background-color: #dc0651;
      color: #fff;
    }
  }
`;
export default FormUserData;
