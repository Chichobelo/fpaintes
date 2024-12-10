import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creacion-producto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './creacion-producto.component.html',
  styleUrls: ['./creacion-producto.component.css'],
})
export class CreacionProductoComponent {
  unidades = ['Kilogramo', 'Litro', 'Unidad'];
  componentes: any[] = [];
  nuevoComponente = { nombre: '', unidad: '', cantidad: 0, costo: '', imagen: '' };
  editIndex: number | null = null;
  imagenProducto: string | undefined;

  // Crear o actualizar componente
  crearComponente() {
    if (this.editIndex !== null) {
      this.componentes[this.editIndex] = { ...this.nuevoComponente };
      this.editIndex = null;
    } else {
      this.componentes.push({ ...this.nuevoComponente });
    }
    this.nuevoComponente = { nombre: '', unidad: '', cantidad: 0, costo: '', imagen: '' };
  }

  // Editar componente
  editarComponente(index: number) {
    this.nuevoComponente = { ...this.componentes[index] };
    this.editIndex = index;
  }

  // Eliminar componente
  eliminarComponente(index: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.componentes.splice(index, 1);
    }
  }

  // Seleccionar imagen
  seleccionarImagen(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenProducto = reader.result as string;
        this.nuevoComponente.imagen = this.imagenProducto;
      };
      reader.readAsDataURL(file);
    }
  }

  // Agregar productos (esto puede ser una acción como enviarlos a otra vista o almacenamiento)
  agregarProductos() {
    console.log('Productos agregados:', this.componentes);
    // Aquí puedes enviar los productos a otra vista o guardarlos en un backend
  }
}
