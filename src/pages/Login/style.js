import styled from "styled-components";

export const Jornal = styled.img`
  position: absolute;

  width: 70px;
  height: 70px;

  top: -26px;
  right: -26px;
`;

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

export const Container = styled.div`
  box-sizing: border-box;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 520px;

  margin-top: 50px;

  background: #ffffff;
  border: 3px solid rgba(0, 41, 111, 0.8);
  border-radius: 20px;

  h2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: rgba(0, 41, 111, 1);
  }

  form {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  form label {
    font-weight: 400;
    font-size: 12px;
    color: rgba(0, 41, 111, 1);
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 7px;
  }

  form input {
    box-sizing: border-box;

    width: 250px;
    max-width: 100%;
    height: 45px;

    background: #f7f8f8;
    border: 1.2px solid #f7f8f8;
    border-radius: 8px;

    padding-left: 15px;
    font-size: 14px;
    font-weight: 100;

    color: rgba(0, 41, 111, 1);
  }

  form span {
    width: 250px;
    max-width: 100%;
    font-size: 11px;
    color: rgba(0, 41, 111, 1);
    text-align: end;
    margin-bottom: 15px;
  }

  form input:focus {
    border: 1.2px solid rgba(0, 41, 111, 0.5);
    border-radius: 8px;
    outline: 0;
  }

  form button {
    width: 250px;
    max-width: 100%;
    height: 45px;

    margin-top: 10px;
    margin-bottom: 10px;

    color: white;
    font-size: 16px;

    background: rgba(0, 41, 111, 0.8);
    border: 1px solid rgba(0, 41, 111, 0.8);
    border-radius: 20px;
  }

  form button:hover {
    background: rgba(0, 41, 111, 1);
    cursor: pointer;
  }

  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #868e96;
    margin: 0 auto;
  }

  .cadastro {
    padding: 0px 22.3336px;
    gap: 10.15px;
    width: 330px;
    height: 48px;
    background: #868e96;
    border: 1.2182px solid #868e96;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
  }

  .cadastro:hover {
    background: #343b41;
    border: 1.2182px solid #343b41;
  }
`;
