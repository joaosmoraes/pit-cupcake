import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private _router = inject(Router);
  cartService = inject(CartService);

  public products = [
    {
      id: 1,
      name: 'Cupcake de Café',
      description: 'Sabor intenso de café, perfeito para amantes.',
      price: 5.99,
      image: 'assets/images/cupcake-cafe.jpg'
    },
    {
      id: 2,
      name: 'Cupcake de Brigadeiro',
      description: 'Doçura clássica do brigadeiro, coberto com granulado.',
      price: 6.49,
      image: 'assets/images/cupcake-brigadeiro.jpg'
    },
    {
      id: 3,
      name: 'Cupcake de Coco',
      description: 'Bolo macio com o toque tropical do coco.',
      price: 5.99,
      image: 'assets/images/cupcake-coco.jpg'
    },
    {
      id: 4,
      name: 'Cupcake de Goiabada',
      description: 'Massa leve com o sabor autêntico da goiabada.',
      price: 6.29,
      image: 'assets/images/cupcake-goiabada.jpg'
    },
    {
      id: 5,
      name: 'Cupcake de Laranja',
      description: 'Frescor cítrico em cada mordida, aroma natural.',
      price: 5.99,
      image: 'assets/images/cupcake-laranja.jpg'
    },
    {
      id: 6,
      name: 'Cupcake de Leite Ninho',
      description: 'Recheio cremoso, sabor suave e doce.',
      price: 6.79,
      image: 'assets/images/cupcake-leite-ninho.jpg'
    },
    {
      id: 7,
      name: 'Cupcake de Leite Ninho com Nutella',
      description: 'Combinação de leite ninho e Nutella, irresistível.',
      price: 7.49,
      image: 'assets/images/cupcake-leite-ninho-nutella.jpg'
    },
    {
      id: 8,
      name: 'Cupcake de Nozes',
      description: 'Toque crocante com sabor levemente caramelizado.',
      price: 6.99,
      image: 'assets/images/cupcake-nozes.jpg'
    },
    {
      id: 9,
      name: 'Cupcake Red Velvet',
      description: 'Massa aveludada e cobertura de cream cheese deliciosa.',
      price: 7.29,
      image: 'assets/images/cupcake-red-velvet.jpg'
    }
  ];

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  buyNow(product: any) {
    this.cartService.addToCart(product);
    this._router.navigate(['/cart']);
  }

  formatPrice(price: any): string {
    const numPrice = Number(price);
    return isNaN(numPrice) ? '0.00' : numPrice.toFixed(2);
  }
}
