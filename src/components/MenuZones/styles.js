import styled from "styled-components";

export const Menu = styled.div`
  width: 1100px;
  max-width: 100%;
  height: 100px;

  margin: 20px auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Zone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid transparent;

  padding-top: 10px;

  width: 110px;
  height: 100px;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-size: 15px;
    color: rgba(0, 41, 111, 0.8);
    word-wrap: break-word;

    width: 110px;
    height: 50px;

    font-weight: 600;

    text-align: center;
    padding-top: 10px;
    margin: 0;
  }

  :hover {
    cursor: pointer;
    border: 1px solid rgba(0, 41, 111, 0.25);
    border-radius: 5px;
    background-color: rgba(0, 41, 111, 0.05);
  }
`;
