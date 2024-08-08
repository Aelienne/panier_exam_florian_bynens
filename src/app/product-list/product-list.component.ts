import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProduitService } from '../../shard/produit.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    service = inject(ProduitService);
    produits = this.service.fetchAll();
}
