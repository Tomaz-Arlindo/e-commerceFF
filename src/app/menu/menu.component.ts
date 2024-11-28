import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  products$ = this.productService.getProducts(); // Usa o observable diretamente

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  addToCart(product: any) {
    this.cartService.addProduct(product); // Adiciona o produto ao carrinho
  }
}
