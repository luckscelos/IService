import { Section } from "./style";
import { Link } from "../../routes";

import { ImWhatsapp } from "react-icons/im";

function Profile() {
  return (
    <Section>
      <ul className="profileMain">
        <li className="profileLeft">
          <ul className="inforProfile">
            <li className="">
              <b>Nome:</b> Lucas Vale
              <p />
            </li>
            <li className="">
              <b>Idade:</b> 27 anos
              <p />
            </li>
            <li className="">
              <b>Cidade:</b> Bauru
              <p />
            </li>
            <li className="">
              <b>Estado:</b> SP
              <p />
            </li>
            <li className="">
              <b>Contado:</b> linkedin.com/lucasvale
              <p />
            </li>
            <li className="">
              <b>Serviço:</b> Desenvolvedor Fron-end
              <p />
            </li>
            <li className="">
              <b>Tempo de Experiênia:</b> 1 ano <p />
            </li>
          </ul>
          <ul className="description">
            <li>
              <b>Descrição: </b>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              <p />
            </li>
          </ul>
        </li>
        <li className="profileRight">
          <figure className="figProfile">
            <img src="" alt="" className="photographProfile" />
          </figure>
          <div className="profileWatsAppMain">
            <p>
              <ImWhatsapp className="profileWhats" />
            </p>
            <span className="txtWhats">Chamar no Whatsapp</span>
          </div>
        </li>
      </ul>
    </Section>
  );
}
export default Profile;
