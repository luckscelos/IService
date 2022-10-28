import styled from "styled-components";

export const Section = styled.section`
  li {
    list-style-type: none;
    justify-content: center;
    font-family: "Poppins", sans-serif;
  }
  .profileMain {
    display: flex;
  }
  .profileLeft {
    width: 420px;
  }
  .inforProfile,
  .description {
    width: 380px;
  }
  .figProfile {
    margin-top: 0;
  }
  .figProfile {
    width: 160px;
    height: 150px;
    background-color: #d5d5d5;
    border-radius: 10px;
  }
  .profileWatsAppMain {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .profileWhats {
    color: #7ad06d;
    width: 64px;
    height: 64px;
  }
  .txtWhats {
    width: 100px;
    color: #000;
    font-weight: 600;
  }
`;
