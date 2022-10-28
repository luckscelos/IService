import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Card, CardMais, Div, Image, Main, Zones } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RequestContext } from "../../context/RequestContext";

const Home = () => {
  const navigate = useNavigate();

  const { allListServices, setListServicesFiltred } =
    useContext(RequestContext);

  function renderAdministração() {
    setListServicesFiltred(
      allListServices.filter((service) => service.zone === "Administração")
    );
    navigate("/servicos", { replace: true });
  }

  function renderAlimentação() {
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
      <Header />
      <Main>
        <Image>
          <img
            src="https://uploaddeimagens.com.br/images/004/008/174/full/Illustration.png?1662132148"
            alt="Foto"
          />
        </Image>
        <Zones>
          <Card onClick={renderAdministração}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/522/thumb/lei_%281%29.png?1662047544"
              alt="Administração"
            />
            <h3>Administração</h3>
          </Card>
          <Card onClick={renderAlimentação}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/524/thumb/milho_%281%29.png?1662047582"
              alt="Menu Alimentação"
            />
            <h3>Alimentação</h3>
          </Card>
          <Card onClick={renderArte}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/465/thumb/arte_%281%29.png?1662045195"
              alt="Menu Arte"
            />
            <h3>Arte</h3>
          </Card>
          <Card onClick={renderConstrucao}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/486/thumb/trabalhador_%281%29.png?1662045846"
              alt="Menu Construção"
            />
            <h3>Construção</h3>
          </Card>
          <Card onClick={renderEducacao}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/490/thumb/educacao-online_%281%29.png?1662045926"
              alt="Menu Educação"
            />
            <h3>Educação</h3>
          </Card>
          <Card onClick={renderSaude}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/487/thumb/cuidados-de-saude_%281%29.png?1662045874"
              alt="Menu Saúde"
            />
            <h3>Saúde</h3>
          </Card>
          <Card onClick={renderServicosDomesticos}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/491/thumb/domestico_%281%29.png?1662045949"
              alt="Menu Serviços Domésticos"
            />
            <h3>Serviços Domésticos</h3>
          </Card>
          <Card onClick={renderServicosSociais}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/488/thumb/recursos-humanos_%281%29.png?1662045892"
              alt="Menu Serviços Sociais"
            />
            <h3>Serviços Sociais</h3>
          </Card>
          <Card onClick={renderTecnologia}>
            <img
              src="https://uploaddeimagens.com.br/images/004/006/485/thumb/tecnologia_%281%29.png?1662045815"
              alt="Menu Tecnologia"
            />
            <h3>Tecnologia</h3>
          </Card>
          <CardMais>
            <Div onClick={renderOutrosAreas}>
              <img
                src="https://uploaddeimagens.com.br/images/004/006/489/thumb/adicionar_%281%29.png?1662045909"
                alt="Menu Outras Áreas"
              />
              <p>Outras Áreas</p>
            </Div>
          </CardMais>
        </Zones>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
