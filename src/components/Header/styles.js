import styled from "styled-components";
import { Link } from "react-router-dom";

export const Head = styled.header`
  background-image: url("https://uploaddeimagens.com.br/images/004/004/222/full/Vectors.png?1661934300");
  background-repeat: no-repeat, repeat;
  background-size: cover;

  margin: 0;

  width: 100vw;
  height: 170px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Nav = styled.div`
  width: 1400px;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  .logo {
    margin-right: 200px;
  }
`;

export const Search = styled.div`
  width: 250px;
  max-width: 100%;

  height: 20px;

  background: #ffffff;
  border: 1px solid #00296f;
  border-radius: 10px;

  padding: 10px;

  display: flex;
  justify-content: space-between;

  margin-top: 85px;
  margin-left: 100px;

  input {
    background-color: transparent;
    border: none;

    width: 215px;
    max-width: 100%;

    font-size: 14px;
    line-height: 27px;

    padding-left: 15px;

    color: #00296f;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  svg {
    display: flex;
    align-items: center;
    padding-right: 5px;

    font-size: 20px;

    color: rgba(0, 41, 111, 0.7);

    :hover {
      cursor: pointer;
    }
  }

  color: white;
`;

export const Links = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 15px;

  img {
    width: 50px;
    height: 50px;

    border: 1px solid black;
    border-radius: 50%;
    margin-top: 13px;

    object-fit: cover;
  }
`;

export const NavbarLink = styled(Link)`
  width: 100px;
  height: 20px;

  font-weight: 600;
  font-size: 17px;

  text-decoration: none;
  text-align: center;
  word-wrap: break-word;

  padding-top: 15px;

  color: #00296f;
`;
