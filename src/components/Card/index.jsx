import {
  Card,
  Container,
  DivDescription,
  DivImg,
  DivInfo,
  ImgService,
  LinkProfile,
} from "./styles";
import { GoDiffAdded } from "react-icons/go";
import { useContext } from "react";
import { RequestContext } from "../../context/RequestContext";

function ServiceCard() {
  const { listServicesFiltred } = useContext(RequestContext);

  return (
    <>
      <Container className="container-services">
        {listServicesFiltred.slice(0, 8).map((service, index) => (
          <Card key={`${index}`}>
            <div className="div-header">
              <DivImg>
                <ImgService
                  src="https://br.advfn.com/p.php?pid=profilepic&user=anonimo+3333"
                  alt="Pessoa"
                />
              </DivImg>
              <DivInfo>
                <div>
                  <h2>Nome do profissional</h2>
                  <p>{service.age} anos</p>
                </div>
                <div>
                  <p>{service.zone}</p>
                  <p>{service.profession}</p>
                  <p>Experiência: {service.experience}</p>
                </div>
              </DivInfo>
            </div>
            <DivDescription>
              <span>{service.description}</span>
              <LinkProfile to="/profile">
                <GoDiffAdded />
              </LinkProfile>
            </DivDescription>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default ServiceCard;
