import { Routes } from '@angular/router';
import { LoginLayoutComponent } from './features/auth/components/login/login-layout.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginLayoutComponent,
    },
    {
        path: 'stock',
        component: StockItemComponent
    }
];
