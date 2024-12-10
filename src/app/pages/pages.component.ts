import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { CommonModule } from '@angular/common'; // Importar CommonModule para *ngFor y *ngIf

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [FormsModule, CommonModule], // Agregar los módulos requeridos aquí
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'], // Corregir `styleUrl` por `styleUrls`
})
export class PagesComponent {
  data = [
    {
      operador: 'Juan Pérez',
      producto: 'estucar',
      empaque: 'cuñete',
      cantidad: 100,
      fecha: new Date(2023, 5, 15),
    },
    {
      operador: 'pablo garcia',
      producto: 'manoplas',
      empaque: 'galon',
      cantidad: 200,
      fecha: new Date(2023, 5, 16),
    },
    {
      operador: 'Juan Pérez',
      producto: 'estucar',
      empaque: 'cuñete',
      cantidad: 100,
      fecha: new Date(2023, 5, 15),
    },
    {
      operador: 'Juan Pérez',
      producto: 'estucar',
      empaque: 'cuñete',
      cantidad: 100,
      fecha: new Date(2023, 5, 15),
    },
    {
      operador: 'Juan Pérez',
      producto: 'estucar',
      empaque: 'cuñete',
      cantidad: 100,
      fecha: new Date(2023, 5, 15),
    },
    {
      operador: 'Juan Pérez',
      producto: 'estucar',
      empaque: 'cuñete',
      cantidad: 100,
      fecha: new Date(2023, 5, 15),
    },
    {
      operador: 'Juan Pérez',
      producto: 'estucar',
      empaque: 'cuñete',
      cantidad: 100,
      fecha: new Date(2023, 5, 15),
    },
    {
      operador: 'Juan Pérez',
      producto: 'estucar',
      empaque: 'cuñete',
      cantidad: 100,
      fecha: new Date(2023, 5, 15),
    },
  ];

  // Termino de búsqueda
  searchTerm: string = '';

  // Datos filtrados
  filteredData = [...this.data];

  // Método para filtrar los datos
  filterData() {
    const term = this.searchTerm.toLowerCase();
    this.filteredData = this.data.filter(
      (item) =>
        item.operador.toLowerCase().includes(term) ||
        item.producto.toLowerCase().includes(term) ||
        item.empaque.toLowerCase().includes(term)
    );
  }

  // Método para imprimir el reporte
  printReport() {
    window.print();
  }
}
