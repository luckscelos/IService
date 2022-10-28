import { DivInfo, Main } from "./styles";
import { useNavigate } from "react-router-dom";

function Inicial() {
  const navigate = useNavigate();

  function paraHome() {
    setTimeout(() => {
      navigate("/home", { replace: true });
    }, 500);
  }

  return (
    <>
      <Main>
        <DivInfo
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <img
            src="https://uploaddeimagens.com.br/images/004/005/044/thumb/Screenshot_1_%282%29.png?1661970929"
            alt="Logo"
            className="logo"
          />
          <h1>Encontre o profissional que está procurando</h1>
          <p>de forma rápida e segura</p>
          <button onClick={paraHome}>Ir para o site</button>
        </DivInfo>
      </Main>
    </>
  );
}

export default Inicial;
