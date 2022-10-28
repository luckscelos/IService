import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Image, Jornal, Main } from "./style";
import { RequestContext } from "../../context/RequestContext";
import { useContext } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const { loginUser } = useContext(RequestContext);

  const navigate = useNavigate();

  function paraCadastro() {
    navigate("/cadastro", { replace: true });
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
        <Container className="div-container">
          <div className="Login">
            <Jornal
              src="https://uploaddeimagens.com.br/images/004/011/594/full/Group_48095517.png?1662413132"
              alt="Foto Jornal"
            />
            <h2>Login</h2>
            <form onSubmit={handleSubmit(loginUser)}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>

              <label>Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>
              <button type="submit">Entrar</button>
              <p>Ainda não possui conta?</p>
              <button onClick={paraCadastro}>Cadastrar</button>
            </form>
          </div>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default Login;
