import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/components/login/login.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { CreateStock } from './stock/create-stock/create-stock.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'stock',
        component: StockItemComponent
    },
    {
        path: 'create-stock',
        component: CreateStock
    }
];
