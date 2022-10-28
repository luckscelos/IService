import styled from "styled-components";

export const Main = styled.main`
  width: 1200px;
  max-width: 100%;
  height: 650px;

  margin: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;
    height: 520px;
  }
`;
export const Zones = styled.div`
  width: 520px;
  max-width: 100%;
  height: 550px;

  gap: 15px;

  margin-top: 10px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Card = styled.div`
  width: 160px;
  height: 170px;

  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  border: 1px solid rgba(0, 41, 111, 0.15);
  border-radius: 10px;

  padding: 15px;

  :hover {
    background: rgba(0, 41, 111, 0.05);
    border: 1px solid #00296f;

    cursor: pointer;
  }

  img {
    width: 100px;
    height: 100px;
  }

  h3 {
    text-align: center;

    font-size: 18px;
    line-height: 27px;

    margin: 0;

    color: #00296f;
  }
`;

export const CardMais = styled.div`
  max-width: 100%;

  border: 1px solid rgba(0, 41, 111, 0.15);
  border-radius: 10px;

  display: flex;
  flex-direction: row;

  box-sizing: border-box;
  gap: 15px;

  padding: 5px;

  :hover {
    background: rgba(0, 41, 111, 0.05);
    border: 1px solid #00296f;

    cursor: pointer;
  }

  img {
    width: 35px;
    height: 35px;

    padding: 0;
    margin: 0;
  }

  p {
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;

    margin: 0;

    color: #00296f;
  }
`;

export const Div = styled.div`
  width: 500px;
  max-width: 100%;
  height: 40px;

  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
