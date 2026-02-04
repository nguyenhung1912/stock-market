import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/components/login/login.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { CreateStock } from './stock/create-stock/create-stock.component';
import { HomeComponent } from './home/home.component';
import { CreateStockReactiveComponent } from './stock/create-stock-reactive/create-stock-reactive.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'stock',
    component: StockItemComponent,
  },
  {
    path: 'create-stock',
    component: CreateStock,
  },
  {
    path: 'create-stock-reactive',
    component: CreateStockReactiveComponent,
  },
];
