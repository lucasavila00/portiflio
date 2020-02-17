import filtroume_cover from "../imgs/filtroume_cover.jpg";
import abacate_cover from "../imgs/abacate_cover.jpg";
import cobranca_cover from "../imgs/cobranca_cover.jpg";
import fege_cover from "../imgs/fege_cover.jpg";

export interface IProduct {
  title: string;
  hashtags: string[];
  imgCover: any;
  to: string;
}
export const prod_cobranca = {
  title: "Cobrança de Formaturas",
  hashtags: ["#web", "#bancário", "#boletos"],
  to: "/cobranca",
  imgCover: cobranca_cover,
};

export const prod_festaestranha = {
  title: "Mini Site Festa Estranha",
  hashtags: ["#web", "#mobile", "#instagram"],
  to: "/fege",
  imgCover: fege_cover,
};

export const prod_abacate = {
  title: "Abacate.app",
  hashtags: ["#web", "#amp", "#iOS", "#android"],
  to: "/abacate",
  imgCover: abacate_cover,
};
export const prod_filtroume = {
  title: "Filtrou.me",
  hashtags: [
    "#web",
    "#realidadeaumentada",
    "#inteligênciaartificial",
  ],
  to: "/filtroume",
  imgCover: filtroume_cover,
};
export const products: IProduct[] = [
  prod_filtroume,
  prod_abacate,
  prod_festaestranha,
  prod_cobranca,
];
