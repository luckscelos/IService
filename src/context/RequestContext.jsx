import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const token = localStorage.getItem("@IService:Token");
  const [listServicesFiltred, setListServicesFiltred] = useState([]);

  const navigate = useNavigate();

  // O TOKEN QUE SERÁ USADO PARA FAZER REQUESTS

  const userId = localStorage.getItem("@IService:UserId");

  useEffect(() => {
    getUsers();
    getServices();

    async function loadUser() {
      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
            token
          )}`;

          const { data } = await api.get(`/600/users/${userId}`);
          setUser(data);
        } catch (error) {
          setUser(null);
          console.error(error);
        }
      }
      setLoading(false);
    }

    loadUser();
  }, [token, userId, listServicesFiltred, setListServicesFiltred]);

  // SÃO TODOS OS SERVIÇOS DISPONÍVEIS NO SITE
  const [allListServices, setAllListServices] = useState([]);

  // SÃO TODOS OS SERVIÇOS QUE VOCÊ CADASTROU
  const [yourListServices, setYourListServices] = useState([]);

  // FUNÇÃO PERMITE VISUALIZAR O SERVIÇO ESPECÍFICO
  const viewService = (id) => {
    api
      .get(`/services/${id}`)
      .then((response) => setAllListServices(response.data.id));
  };

  // FUNÇÃO DE FAZER O CADASTRO DO USUÁRIO (CONCLUIDO)
  const registerUser = (data) => {
    api
      .post("/users", data)

      .then((response) => {
        navigate("/login", { replace: true });
        toast.success("Usuario Cadastrado");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Usuário não cadastrado!");
      });
  };

  // FUNÇÃO DE FAZER O CADASTRO DO USUÁRIO (CONCLUIDO)
  const getServices = () => {
    api
      .get("/services")
      .then((response) => {
        setAllListServices(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUsers = () => {
    api
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // FUNÇÃO QUE VAI FAZER O LOGIN (CONCLUIDO)
  const loginUser = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem(
          "@IService:UserId",
          JSON.stringify(response.data.user.id)
        );
        localStorage.setItem(
          "@IService:Token",
          JSON.stringify(response.data.accessToken)
        );
        setUser(response.data.user);
        navigate("/home", { replace: true });
        toast.success("Login feito");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Usuário não cadastrado!");
      });
  };

  //FUNÇÃO DE DESLOGAR USER

  const logoutUser = () => {
    localStorage.removeItem("@IService:Token");
    localStorage.removeItem("@IService:UserId");
    setUser(null);
    toast.error("Logout feito");
    navigate("/home");
  };

  // FUNÇÃO QUE VAI CADASTRAR SERVIÇOS
  const createService = (data) => {
    data.contact = "https://wa.me/+55" + data.contact;

    api
      .post("/services", data)
      .then((response) => {
        setAllListServices([...allListServices, response.data]);
        toast.success("Serviço criado");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Não foi possivel criar serviço");
      });
  };

  // FUNÇÃO QUE VAI PERMITIR MODIFICAR OU EDITAR O SERVIÇO (CONCLUIDO)
  const updateService = (id) => {
    api.put(`/users/services/${id}`).then((response) => {
      setAllListServices((listServices) => {
        const indexEncontrado = listServices.findIndex(
          (element) => element.id === id
        );
        const trocarValores = listServices.splice(
          indexEncontrado,
          1,
          response.data
        );
        return listServices;
      });
    });
  };

  // FUNÇÃO QUE VAI DELETAR O SERVIÇO SELECIONADO (CONCLUIDO)
  const deleteService = (id) => {
    api
      .delete(`/user/services/${id}`)
      .then(() => {
        setAllListServices((listServices) =>
          listServices.filter((element) => element.id !== id)
        );
        toast.success("Serviço deletado");
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <RequestContext.Provider
      value={{
        loading,
        user,
        viewService,
        registerUser,
        loginUser,
        logoutUser,
        users,
        getUsers,
        createService,
        updateService,
        deleteService,
        allListServices,
        setAllListServices,
        listServicesFiltred,
        setListServicesFiltred,
        yourListServices,
        setYourListServices,
        userId,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};
