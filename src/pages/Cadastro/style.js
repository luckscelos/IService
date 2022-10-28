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

  padding: 0;

  width: 400px;
  height: 670px;

  margin-top: 10px;

  background: #ffffff;
  border: 3px solid rgba(0, 41, 111, 0.8);
  border-radius: 20px;

  h2 {
    font-weight: 700;
    font-size: 22px;
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
    height: 40px;

    background: #f7f8f8;
    border: 1.2px solid #f7f8f8;
    border-radius: 8px;

    padding-left: 15px;
    font-size: 14px;
    font-weight: 100;

    color: rgba(0, 41, 111, 1);
  }

  form select {
    box-sizing: border-box;

    width: 250px;
    max-width: 100%;
    height: 40px;

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
    margin-bottom: 5px;
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

    margin-top: 20px;

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
`;
