import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StockItemComponent } from "./stock/stock-item/stock-item.component";
import { CreateStock } from "./stock/create-stock/create-stock.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StockItemComponent, CreateStock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stock-market');
}
