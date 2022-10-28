import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;

  background-image: radial-gradient(
    circle,
    #ffffff,
    #ffffff,
    #ffffff,
    #d4d2e0,
    #a9a8c3,
    #7e7fa6,
    #53598a,
    #3f497f,
    #3f497f,
    #012a6d
  );

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  padding: 15px;
`;

export const DivInfo = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
  }

  h1 {
    text-align: center;
  }

  p {
    font-size: 18px;
    margin-bottom: 50px;
  }

  button {
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

  button:hover {
    background: rgba(0, 41, 111, 1);
    cursor: pointer;
  }
`;
