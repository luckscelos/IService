import { Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import React from "react";
import Home from "../pages/Home";
import Inicial from "../pages/Inicial";
import CadastroService from "../pages/CadastroService";
import Servicos from "../pages/Servicos";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicial />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/novoservico" element={<CadastroService />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  );
};

export default RoutesMain;
