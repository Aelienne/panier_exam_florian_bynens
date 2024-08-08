import { IProduit } from "./ProductInterface";

export const mockPanier:IProduit[] = [];
export const mockProduits = [
  {image: 'https://media.istockphoto.com/id/1452520286/fr/vectoriel/vecteur-de-mangue-mangue-sur-fond-blanc-symbole-conception-du-logo-dessert-tha%C3%AFlandais.jpg?s=612x612&w=0&k=20&c=j5pqS2s_MMewRonU24wf-Hwb8TFFEKJQmyMwmVllZ4Q=', prixHT: 19, nom: 'Mangue',quantite:1},
  {image: 'https://media.gettyimages.com/id/1296379574/fr/vectoriel/fruit-rouge-de-framboise-disolement-sur-le-blanc.jpg?s=612x612&w=gi&k=20&c=fj5Eo1wtLdDS550ya4VO1iMn-uHic2QvBJnA6TGccl8=', prixHT: 9, nom: 'Frambroise',quantite:1},
  {image: 'https://img.freepik.com/vecteurs-premium/regime-bananes-vecteur-illustration-dessin-anime_650087-313.jpg?w=2000', prixHT: 8, nom: 'Banane',quantite:1},
  {image: 'https://img.freepik.com/vecteurs-libre/pomme-rouge-isole-fond-blanc_1308-81536.jpg', prixHT: 19, nom: 'Pomme', quantite:1},
  {image: 'https://img.freepik.com/vecteurs-libre/illustration-dessin-anime-fruits-raisin-style-bande-dessinee-plat_138676-2877.jpg', prixHT: 7, nom: 'Raisin',quantite:1},
  {image: 'data:image/jpeg;base64,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', prixHT: 13, nom: 'Fraise',quantite:1},
  {image: 'https://img.freepik.com/vecteurs-libre/illustration-orange-colore-dessine-main_53876-2977.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais', prixHT: 64, nom: 'Orange',quantite:1},
  {image: 'data:image/png;base64,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', prixHT: 39, nom: 'Pasteque',quantite:1},
]
