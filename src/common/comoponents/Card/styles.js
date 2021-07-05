import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: block;
  width: 20%;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 4px 4px 16px #efefef;
`;
export const HeaderCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 10px;
  border-bottom: 1px solid #d2d2d2;
  .user--image {
    display: block;
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      max-width: 100%;
    }
  }
  .user--data {
    max-width: 60%;
    text-align: left;
    .user--name {
      font-size: 1.1rem;
      line-height: 1.2rem;
      font-family: Verdana, sans-serif;
      text-align: left;
      margin: 5px 0 2px 0;
    }
    .user--email {
      font-size: 1rem;
      text-decoration: none;
      color: #333;
    }
  }
`;

export const BodyCard = styled.div`
  width: 100%;
  padding: 10px 0;

  .user--button {
    width: 100%;
    border-radius: 15px;
    padding: 8px 12px;
    color: #fff;
    background-color: #24ccdb;
    border: 0;
    cursor: pointer;
  }
`;
