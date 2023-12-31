import axios from "axios";
import { alunoType } from "../pages/alunos/CadastroAluno";

 axios.defaults.baseURL = "https://projeto-integrado-sys-gym-production.up.railway.app"
//  axios.defaults.baseURL = "http://localhost:5026";

export function buscarListaAlunos() {
  return  axios.get(`/api/Pessoas/ListarAlunos/`,);
}

export function criarAluno(aluno: alunoType) {
  return axios.post(`/api/Pessoas/CadastrarAluno`, aluno);
}

export function atualizarAluno(aluno: alunoType) {
  return axios.put(`/api/Pessoas/AtualizarAluno`, aluno);
}

export function ativarAlunoApi(idAluno: number) {
  return axios.get(`/api/Pessoas/DesbloquearAluno/${idAluno}`);
}

export function desativarAlunoApi(idAluno: number) {
  return axios.get(`/api/Pessoas/BloquearAluno/${idAluno}`);
}

export function buscarAulas() {
  return axios.get(`/api/Aulas/ListarAulas/`);
}
