import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formula',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css'],
})
export class FormulaComponent {
  productos = [
    { nombre: 'Producto A' },
    { nombre: 'Producto B' },
    { nombre: 'Producto C' },
  ];

  formulas: {
    producto: string;
    ingredientes: { nombre: string; cantidad: number; unidad: string }[];
  }[] = [];

  ingredientes: { nombre: string; cantidad: number; unidad: string }[] = [];
  selectedProducto: string | null = null;
  editingFormulaIndex: number | null = null;
  isModalOpen = false;
  busqueda: string = '';

  componentes = [
    { nombre: 'Agua' },
    { nombre: 'Cloro' },
    { nombre: 'Ácido' },
    { nombre: 'Sal' },
    // Agrega más componentes según sea necesario
  ];
  

  // Abre el modal para agregar o editar una fórmula
  abrirModal(isEditMode: boolean = false) {
    this.isModalOpen = true;

    if (!isEditMode) {
      // Sólo reinicia las variables si no es en modo de edición
      this.selectedProducto = null;
      this.ingredientes = [];
      this.editingFormulaIndex = null;
    }
  }

  // Cierra el modal
  cerrarModal() {
    this.isModalOpen = false;
    this.selectedProducto = null;
    this.ingredientes = [];
    this.editingFormulaIndex = null;
  }

  // Agrega un nuevo ingrediente al formulario
  agregarIngrediente() {
    this.ingredientes.push({ nombre: '', cantidad: 0, unidad: 'GR' });
  }

  // Elimina un ingrediente del formulario
  eliminarIngrediente(index: number) {
    this.ingredientes.splice(index, 1);
  }

  // Guarda la fórmula en la lista
  guardarFormula() {
    if (!this.selectedProducto || this.ingredientes.length === 0) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Verifica que el producto exista
    const producto = this.productos.find(p => p.nombre === this.selectedProducto)?.nombre;

    if (producto) {
      const nuevaFormula = { producto, ingredientes: [...this.ingredientes] };

      // Actualiza si se está editando o agrega si es nuevo
      if (this.editingFormulaIndex !== null) {
        this.formulas[this.editingFormulaIndex] = nuevaFormula;
      } else {
        this.formulas.push(nuevaFormula);
      }

      this.cerrarModal();
    } else {
      alert('Producto no válido.');
    }
  }

  // Edita una fórmula existente
  editarFormula(index: number) {
    const formula = this.formulas[index];

    // Carga los datos de la fórmula en las variables del formulario
    this.selectedProducto = formula.producto;
    this.ingredientes = [...formula.ingredientes];
    this.editingFormulaIndex = index;

    // Abre el modal en modo de edición
    this.abrirModal(true);
  }

  // Elimina una fórmula existente
  eliminarFormula(index: number) {
    if (confirm('¿Estás seguro de eliminar esta fórmula?')) {
      this.formulas.splice(index, 1);
    }
  }

  // Filtra las fórmulas por nombre del producto
  filtrarFormulas() {
    return this.formulas.filter(f =>
      f.producto.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}
