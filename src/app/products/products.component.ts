import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Manoplas',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'T1', quantity: '250GR' },
        { name: 'P2', quantity: '350GR' },
        { name: 'F3', quantity: '600GR' },
        { name: 'O4', quantity: '800GR' },
        { name: 'Z8', quantity: '1650GR' },
      ],
    },
    {
      id: 2,
      name: 'Graniplas',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'MA16', quantity: '160KG' },
        { name: 'RA19', quantity: '16KG' },
        { name: 'R6', quantity: '200GR' },
      ],
    },
    {
      id: 3,
      name: 'D-Pegar',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'X1', quantity: '1KG' },
        { name: 'Y2', quantity: '2KG' },
        { name: 'Z3', quantity: '500GR' },
      ],
      
    },
    {
      id: 1,
      name: 'Manoplas',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'T1', quantity: '250GR' },
        { name: 'P2', quantity: '350GR' },
        { name: 'F3', quantity: '600GR' },
        { name: 'O4', quantity: '800GR' },
        { name: 'Z8', quantity: '1650GR' },
      ],
    },
    {
      id: 1,
      name: 'Manoplas',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'T1', quantity: '250GR' },
        { name: 'P2', quantity: '350GR' },
        { name: 'F3', quantity: '600GR' },
        { name: 'O4', quantity: '800GR' },
        { name: 'Z8', quantity: '1650GR' },
      ],
    },
    {
      id: 1,
      name: 'Manoplas',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'T1', quantity: '250GR' },
        { name: 'P2', quantity: '350GR' },
        { name: 'F3', quantity: '600GR' },
        { name: 'O4', quantity: '800GR' },
        { name: 'Z8', quantity: '1650GR' },
      ],
    },
    {
      id: 1,
      name: 'Manoplas',
      image: 'https://i.pinimg.com/736x/4c/c5/57/4cc5575ece9366650d34a79904a2e300.jpg',
      formula: [
        { name: 'T1', quantity: '250GR' },
        { name: 'P2', quantity: '350GR' },
        { name: 'F3', quantity: '600GR' },
        { name: 'O4', quantity: '800GR' },
        { name: 'Z8', quantity: '1650GR' },
      ],
    },
    // Agregar más productos con sus respectivas fórmulas...
  ];

  selectedProduct: any = null; // Producto seleccionado
  operatorId: string = ''; // ID del operador
  packageType: string = ''; // Tipo de empaque
  quantity: number = 0; // Cantidad

  // Método para seleccionar el producto
  selectProduct(product: any) {
    this.selectedProduct = product;
  }

  // Método para registrar la producción
  registerProduction() {
    console.log('Producción registrada:', {
      product: this.selectedProduct,
      operatorId: this.operatorId,
      packageType: this.packageType,
      quantity: this.quantity,
    });

    // Aquí puedes implementar lógica para actualizar el inventario,
    // descontando las cantidades según la fórmula del producto seleccionado.

    // Limpiar formulario después de registrar
    this.operatorId = '';
    this.packageType = '';
    this.quantity = 0;
    this.selectedProduct = null;
  }
}
