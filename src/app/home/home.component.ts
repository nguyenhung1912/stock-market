import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StockItemComponent } from '../stock/stock-item/stock-item.component';
import { CreateStock } from '../stock/create-stock/create-stock.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, StockItemComponent, CreateStock],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
