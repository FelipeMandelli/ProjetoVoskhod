import { ProblemasRegioesApiModel } from "./problemas-regioes-api-model";

export interface RegioesApiModel {

  cidade: string;
  id: number;
  imagem: string;
  problemas: Array<ProblemasRegioesApiModel>;
  regiao: string;

}
