import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.ul`
  width: 1400px;
  max-width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
`;

export const Card = styled.li`
  width: 320px;
  max-width: 100%;
  height: 250px;

  border: 1px solid rgba(0, 41, 111, 0.25);
  border-radius: 10px;
  list-style: none;
  margin-bottom: 20px;
  box-sizing: border-box;

  :hover {
    background: rgba(0, 41, 111, 0.05);
    border: 1px solid #00296f;
    cursor: pointer;
  }

  .div-header {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    padding: 10px;
  }
`;

export const DivImg = styled.div`
  width: 40%;
  height: 100%;
`;

export const ImgService = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 5px 0;
  margin-left: 10px;
  box-sizing: border-box;

  width: 60%;
  height: 100%;
  h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  p {
    font-size: 14px;
    margin: 0;
  }
`;

export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
  padding: 0 10px;
  font-size: 15px;
  box-sizing: border-box;

  span {
    display: flex;
    height: 70%;
    align-items: center;
    margin-bottom: 5px;
  }
`;

export const LinkProfile = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;

  svg {
    color: #00296f;
    font-size: 25px;

    :hover {
      background-color: #00296f;
      color: #ffffff;
      font-size: 25px;
      border-radius: 3px;
    }
  }
`;
