import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { mockPanier } from '../../shard/mock';
import { ProduitService } from '../../shard/produit.service';
import { TotalTTCPipe } from '../../shard/total-ttc.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ProductListComponent, CommonModule, TotalTTCPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    service = inject(ProduitService);
}
