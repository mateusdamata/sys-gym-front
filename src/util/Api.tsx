import axios from "axios";
import { alunoType } from "../pages/alunos/CadastroAluno";

export const API_Base = 'https://api.mockfly.dev/mocks/ae219aac-7ce4-49f5-a67d-93915ec3b740';

export function buscarListaAlunos() {
  return axios.get(`${API_Base}/listaAluno`);
}

export function criarAluno() {
  return axios.get(`${API_Base}/listaAluno`);
}

export function atualizarAluno(aluno: alunoType) {
  return axios.put(`${API_Base}/atualizarAluno`, aluno);
}

export function ativarAlunoApi(idAluno: number) {
  return axios.get(`${API_Base}/ativarAluno/${idAluno}`);
}

export function desativarAlunoApi(idAluno: number) {
  return axios.get(`${API_Base}/desativarAluno/${idAluno}`);
}
