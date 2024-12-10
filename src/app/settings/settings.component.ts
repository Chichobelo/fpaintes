import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  users = [
    {
      usuario: 'ZKG493',
      documento: '1010',
      nombre: 'CRIS',
      email: 'cristianpagoyservicios@gmail.com',
      direccion: 'car',
      telefono: '300',
      cargo: 'VENDEDOR',
      estado: 'Activo',
      permisos: {
        inicio: false,
        ventas: {
          vender: false,
          modificarPrecio: false,
          modificarDescuento: false,
          quitarPedido: false,
        },
        domicilios: false,
        inventario: {
          categoria: false,
          productos: false,
          bajaExistencia: false,
          ajustes: false,
        },
        compras: {
          registrar: false,
          historial: false,
          creditos: false,
        }
      }
    }
    // Más usuarios...
  ];

  searchTerm = '';
  showModal = false;
  isEditing = false;
  currentUser: any = {};

  filteredUsers() {
    if (!this.searchTerm) {
      return this.users;
    }
    return this.users.filter((user) =>
      user.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.documento.includes(this.searchTerm)
    );
  }

  openNewUserForm() {
    this.isEditing = false;
    this.currentUser = {
      usuario: '',
      documento: '',
      nombre: '',
      email: '',
      direccion: '',
      telefono: '',
      cargo: '',
      estado: 'Activo',
      permisos: {
        inicio: false,
        ventas: {
          vender: false,
          modificarPrecio: false,
          modificarDescuento: false,
          quitarPedido: false,
        },
        domicilios: false,
        inventario: {
          categoria: false,
          productos: false,
          bajaExistencia: false,
          ajustes: false,
        },
        compras: {
          registrar: false,
          historial: false,
          creditos: false,
        }
      }
    };
    this.showModal = true;
  }

  editUser(user: any) {
    this.isEditing = true;
    this.currentUser = JSON.parse(JSON.stringify(user)); // Copia profunda para evitar modificaciones directas
    this.showModal = true;
  }

  deleteUser(user: any) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.users = this.users.filter((u) => u !== user);
    }
  }

  saveUser() {
    if (this.isEditing) {
      const index = this.users.findIndex(
        (user) => user.usuario === this.currentUser.usuario
      );
      if (index !== -1) {
        this.users[index] = this.currentUser;
      }
    } else {
      this.users.push(this.currentUser);
    }
    this.closeModal();
  }

  closeModal() {
    this.showModal = false;
  }
}
