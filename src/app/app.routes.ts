import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { PagesComponent } from './pages/pages.component';
import { loginComponent } from './login/login.component';
import { ComponenteComponent } from './componente/componente.component';
import { CreacionProductoComponent } from './creacion-producto/creacion-producto.component';
import { InventarioComponent } from './inventario/inventario.component';
import { FormulaComponent } from './formula/formula.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path: 'login', component: loginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'componente', component: ComponenteComponent },
  { path: 'creacion-producto', component: CreacionProductoComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'formula', component: FormulaComponent },
  
  { path: '**', redirectTo: 'login' },
   
];

