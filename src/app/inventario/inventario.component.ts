import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentsService } from '../services/component.service';
import { Stock } from '../interface/component.model';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  inventory = [
    { name: 'T1', quantity: '250GR', stock: 100, minStock: 50 },
    { name: 'P2', quantity: '350GR', stock: 150, minStock: 75 },
    { name: 'P2', quantity: '350GR', stock: 150, minStock: 75 },
    { name: 'P2', quantity: '350GR', stock: 150, minStock: 75 },
    
  ];
  componentes: any[] = [];
  searchTerm: string = ''; // Propiedad para la barra de búsqueda

  selectedItem: any = null;
  showCreateModal = false;
  stock: Stock = { name: '', price: 0, stock: 0 };
  newChemical = { name: '', quantity: '', stock: 0, minStock: 0 };

  constructor(private componentsService: ComponentsService) {}

  // Filtra los componentes según el término de búsqueda
  getFilteredComponents(): any[] {
    if (!this.searchTerm) {
      return this.componentes;
    }
    const term = this.searchTerm.toLowerCase();
    return this.componentes.filter(item =>
      item.name.toLowerCase().includes(term)
    );
  }

  editStock(item: any) {
    this.selectedItem = { ...item };
  }

  saveStockProduct(): void {
    this.componentsService.createComponent(this.stock).subscribe(
      (response) => {
        console.log('Component created:', response);
        this.closeCreateModal();
        this.fetchComponents();
      },
      (error) => {
        console.error('Error creating component:', error);
      }
    );
    this.closeCreateModal();
  }

  saveStock() {
    const index = this.inventory.findIndex(item => item.name === this.selectedItem.name);
    if (index !== -1) {
      this.inventory[index] = { ...this.selectedItem };
    }
    this.closeModal();
  }

  closeModal() {
    this.selectedItem = null;
  }

  openCreateModal() {
    this.showCreateModal = true;
    this.resetNewChemical();
  }

  addChemical() {
    console.log(this.stock);
    if (this.newChemical.name && this.newChemical.quantity) {
      this.inventory.push({ ...this.newChemical });
      this.closeCreateModal();
    }
  }

  closeCreateModal() {
    this.showCreateModal = false;
  }

  resetNewChemical() {
    this.newChemical = { name: '', quantity: '', stock: 0, minStock: 0 };
  }

  ngOnInit(): void {
    this.fetchComponents();
  }

  fetchComponents(): void {
    this.componentsService.getComponents().subscribe(
      (data) => {
        this.componentes = data;
        console.log(this.componentes);
      },
      (error) => {
        console.error('Error fetching components:', error);
      }
    );
  }

  filterData() {
    console.log('Buscando componentes:', this.searchTerm);
  }
}
