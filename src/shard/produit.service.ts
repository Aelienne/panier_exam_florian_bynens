import { Injectable } from '@angular/core';
import { mockPanier, mockProduits } from './mock';
import { IProduit } from './ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor() {}

  fetchAll(){
    return mockProduits;
  };

  fetchAllPanier(){
    return mockPanier;
  };

  ajouterAuPanier(produit:IProduit) {
    let check = false;
    mockPanier.forEach((elem) => {
      if(elem === produit) {
        check = true
        elem.quantite++
      }
    })
    if (check === false) {
      mockPanier.push(produit)
    }
  };


  supprimerAuPanier(produit:IProduit){
    let id = mockPanier.indexOf(produit)
    mockPanier.splice(id, 1);
    produit.quantite = 0;
  };

  totalDuPanier(){
    let total = 0;
    mockPanier.forEach(elem=>total+=elem.prixHT*elem.quantite
    )
    return total;
  }

}
