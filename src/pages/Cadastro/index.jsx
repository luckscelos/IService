import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../components/Header";
import { useContext } from "react";
import { RequestContext } from "../../context/RequestContext";
import Footer from "../../components/Footer";
import { Main, Image, Container, Jornal } from "./style";

const Cadastro = () => {
  const { registerUser } = useContext(RequestContext);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo não preenchido")
      .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "Digite apenas letras"),
    email: yup
      .string()
      .required("Campo não preenchido")
      .email("email inválido"),
    password: yup
      .string()
      .required("Campo não preenchido")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Insira uma senha forte"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não corresponde"),
    state: yup.string().required("Campo não selecionado"),
    city: yup.string().required("Campo não preenchido"),
    url: yup.string().required("Campo não preenchido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

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
        <Container>
          <div className="Cadastro">
            <Jornal
              src="https://uploaddeimagens.com.br/images/004/011/594/full/Group_48095517.png?1662413132"
              alt="Foto Jornal"
            />
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit(registerUser)}>
              <label>Nome completo</label>
              <input
                type="text"
                placeholder="Seu nome completo"
                {...register("name")}
              />
              <span>{errors.name?.message}</span>

              <label>Email</label>
              <input
                type="email"
                placeholder="exemplo@email.com"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>

              <label>Senha</label>
              <input
                type="password"
                placeholder="Insira uma senha difícil"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>

              <label>Confirmar senha</label>
              <input
                type="password"
                placeholder="Confirmar Senha"
                {...register("confirm_password")}
              />
              <span>{errors.confirm_password?.message}</span>

              <label>Estado</label>
              <select {...register("state")}>
                <option>Selecione um estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="EX">Estrangeiro</option>
              </select>

              <label>Cidade</label>
              <input
                type="text"
                placeholder="Digite o nome da sua cidade"
                {...register("city")}
              />
              <span>{errors.city?.message}</span>

              <label>Foto de perfil</label>
              <input
                type="text"
                placeholder="Insira a URL de uma foto"
                {...register("url")}
              />
              <span>{errors.city?.message}</span>

              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default Cadastro;
