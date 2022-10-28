import { Icon, Menu, Zone } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RequestContext } from "../../context/RequestContext";

function MenuZones() {
  const navigate = useNavigate();

  const { allListServices, setListServicesFiltred } =
    useContext(RequestContext);

  function renderAdministracao() {
    setListServicesFiltred(
      allListServices.filter((service) => service.zone === "Administração")
    );
    navigate("/servicos", { replace: true });
  }

  function renderAlimentacao() {
    setListServicesFiltred(
      allListServices.filter((service) => service.zone === "Alimentação")
    );
    navigate("/servicos", { replace: true });
  }

  function renderArte() {
    setListServicesFiltred(
      allListServices.filter((service) => service.zone === "Arte")
    );
    navigate("/servicos", { replace: true });
  }

  function renderConstrucao() {
    setListServicesFiltred(
      allListServices.filter((service) => service.zone === "Construção")
    );
    navigate("/servicos", { replace: true });
  }

  function renderEducacao() {
    setListServicesFiltred(
      allListServices.filter((service) => service.zone === "Educação")
    );
    navigate("/servicos", { replace: true });
  }

  function renderSaude() {
    setListServicesFiltred(
      allListServices.filter((service) => service.zone === "Saúde")
    );
    navigate("/servicos", { replace: true });
  }

  function renderServicosDomesticos() {
    setListServicesFiltred(
      allListServices.filter(
        (service) => service.zone === "Serviços domésticos"
      )
    );
    navigate("/servicos", { replace: true });
  }

  function renderServicosSociais() {
    setListServicesFiltred(
      allListServices.filter((service) => service.zone === "Serviços sociais")
    );
    navigate("/servicos", { replace: true });
  }

  function renderTecnologia() {
    setListServicesFiltred(
      allListServices.filter((service) => service.zone === "Tecnologia")
    );
    navigate("/servicos", { replace: true });
  }

  function renderOutrosAreas() {
    setListServicesFiltred(
      allListServices.filter((service) => service.zone === "Outras áreas")
    );
    navigate("/servicos", { replace: true });
  }

  return (
    <>
      <Menu>
        <Icon>
          <Zone onClick={renderAdministracao}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/522/thumb/lei_%281%29.png?1662047544"
              alt="Menu Administração"
            />
            <p>Administração</p>
          </Zone>
          <Zone onClick={renderAlimentacao}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/524/thumb/milho_%281%29.png?1662047582"
              alt="Menu Alimentação"
            />
            <p>Alimentação</p>
          </Zone>
          <Zone onClick={renderArte}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/465/thumb/arte_%281%29.png?1662045195"
              alt="Menu Arte"
            />
            <p>Arte</p>
          </Zone>
          <Zone onClick={renderConstrucao}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/486/thumb/trabalhador_%281%29.png?1662045846"
              alt="Menu Construção"
            />
            <p>Construção</p>
          </Zone>
          <Zone onClick={renderEducacao}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/490/thumb/educacao-online_%281%29.png?1662045926"
              alt="Menu Educação"
            />
            <p>Educação</p>
          </Zone>
          <Zone onClick={renderSaude}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/487/thumb/cuidados-de-saude_%281%29.png?1662045874"
              alt="Menu Saúde"
            />
            <p>Saúde</p>
          </Zone>
          <Zone onClick={renderServicosDomesticos}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/491/thumb/domestico_%281%29.png?1662045949"
              alt="Menu Serviços Domésticos"
            />
            <p>Serviços Domésticos</p>
          </Zone>
          <Zone onClick={renderServicosSociais}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/488/thumb/recursos-humanos_%281%29.png?1662045892"
              alt="Menu Serviços Sociais"
            />
            <p>Serviços Sociais</p>
          </Zone>
          <Zone onClick={renderTecnologia}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/485/thumb/tecnologia_%281%29.png?1662045815"
              alt="Menu Tecnologia"
            />
            <p>Tecnologia</p>
          </Zone>
          <Zone onClick={renderOutrosAreas}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/489/thumb/adicionar_%281%29.png?1662045909"
              alt="Menu Outras Áreas"
            />
            <p>Outras Áreas</p>
          </Zone>
        </Icon>
      </Menu>
    </>
  );
}

export default MenuZones;
