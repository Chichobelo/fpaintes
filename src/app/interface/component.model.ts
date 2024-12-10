export interface Stock {
    idcomponent?: number; // Opcional porque es generado por el backend
    name: string;
    price: number;
    stock: number;
    createdAt?: Date; // Opcional porque puede ser generado automáticamente
    updatedAt?: Date; // Opcional porque puede ser generado automáticamente
  }
  