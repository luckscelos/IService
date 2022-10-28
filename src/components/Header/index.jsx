import { Head, Links, Nav, NavbarLink, Search } from "./styles";
import { FiArrowRight } from "react-icons/fi";
import { useContext, useState } from "react";
import { RequestContext } from "../../context/RequestContext";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const { user, logoutUser, setListServicesFiltred, allListServices } =
    useContext(RequestContext);

  let location = useLocation();

  const navigate = useNavigate();

  const [palavraFiltrada, setPalavraFiltrada] = useState([]);

  function renderFiltros() {
    navigate("/servicos", { replace: true });
    setListServicesFiltred(
      allListServices.filter(
        (service) =>
          service.zone.toLowerCase().includes(palavraFiltrada.toLowerCase()) ||
          service.profession
            .toLowerCase()
            .includes(palavraFiltrada.toLowerCase())
      )
    );
  }

  return (
    <>
      {user ? (
        <Head>
          <Nav>
            <img
              src="https://uploaddeimagens.com.br/images/004/005/044/thumb/Screenshot_1_%282%29.png?1661970929"
              alt="Logo"
              className="logo"
            />
            {location.pathname === "/home" ||
            location.pathname === "/servicos" ? (
              <Search>
                <input
                  type="text"
                  placeholder="Buscar profissional"
                  onChange={(event) => setPalavraFiltrada(event.target.value)}
                />
                <FiArrowRight onClick={renderFiltros} />
              </Search>
            ) : (
              <div></div>
            )}

            <Links>
              <NavbarLink to="/home">Home</NavbarLink>
              <NavbarLink to="/novoservico">Cadastrar Serviço</NavbarLink>
              <NavbarLink to="/profiles">Meus Cadastros</NavbarLink>
              <NavbarLink to="/home" onClick={logoutUser}>
                Sair
              </NavbarLink>
              <img src={user.url} alt="Foto Perfil" />
            </Links>
          </Nav>
        </Head>
      ) : (
        <Head>
          <Nav>
            <img
              src="https://uploaddeimagens.com.br/images/004/005/044/thumb/Screenshot_1_%282%29.png?1661970929"
              alt=""
            />
            {location.pathname === "/home" ||
            location.pathname === "/servicos" ? (
              <Search>
                <input
                  type="text"
                  placeholder="Buscar profissional"
                  onChange={(event) => setPalavraFiltrada(event.target.value)}
                />
                <FiArrowRight onClick={renderFiltros} />
              </Search>
            ) : (
              <div></div>
            )}
            <Links>
              <NavbarLink to="/home">Home</NavbarLink>
              <NavbarLink to="/login">Login</NavbarLink>
              <NavbarLink to="/cadastro">Cadastro</NavbarLink>
            </Links>
          </Nav>
        </Head>
      )}
    </>
  );
}

export default Header;
