import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../components/Header";
import { useContext } from "react";
import { RequestContext } from "../../context/RequestContext";
import Footer from "../../components/Footer";
import { Main, Image, Container } from "./style";
import { useNavigate } from "react-router-dom";

const CadastroService = () => {
  const { createService, loading, token } = useContext(RequestContext);

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    zone: yup.string().required("Campo não selecionado"),
    profession: yup.string().required("Campo não preenchido"),
    age: yup
      .number()
      .typeError("Precisa ser um número")
      .required("Campo não preenchido")
      .min(15, "Número não válido")
      .max(100, "Número não válido"),
    experience: yup.string().required("Campo não preenchido"),
    contact: yup
      .number()
      .typeError("Precisa ser um número")
      .required("Campo não preenchido")
      .min(11111111111, "Número não válido")
      .max(99999999999, "Número não válido"),
    description: yup.string().required("Campo não preenchido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!token) {
    navigate("/home", { replace: true });
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
        <Container>
          <div className="Cadastro">
            <h2>Cadastrar serviço</h2>
            <form onSubmit={handleSubmit(createService)}>
              <label>Área de atuação</label>
              <select {...register("zone")}>
                <option value="">Selecione a área</option>
                <option value="alimentação">Alimentação</option>
                <option value="Administrativo">Administrativo</option>
                <option value="Arte">Arte</option>
                <option value="Educação">Educação</option>
                <option value="Construção">Construção</option>
                <option value="Saúde">Saúde</option>
                <option value="Serviços domésticos">Serviços domésticos</option>
                <option value="Serviços Sociais">Serviços Sociais</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Outras áreas">Outras áreas</option>
              </select>
              <span>{errors.zone?.message}</span>

              <label>Profissão</label>
              <input
                type="text"
                placeholder="Digite sua profissão"
                {...register("profession")}
              />
              <span>{errors.profession?.message}</span>

              <label>Idade</label>
              <input
                type="number"
                placeholder="Insira sua idade"
                {...register("age")}
              />
              <span>{errors.age?.message}</span>

              <label>Tempo de experiência</label>
              <input
                type="text"
                placeholder="'2 anos', '3 meses', etc..."
                {...register("experience")}
              />
              <span>{errors.experience?.message}</span>

              <label>Contato</label>
              <input
                type="number"
                placeholder="Número de contato com DDD"
                {...register("contact")}
              />
              <span>{errors.contact?.message}</span>

              <label>Descrição</label>
              <input
                className="inputDescription"
                type="text"
                placeholder="Fale sobre você"
                {...register("description")}
              />
              <span>{errors.description?.message}</span>

              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default CadastroService;
