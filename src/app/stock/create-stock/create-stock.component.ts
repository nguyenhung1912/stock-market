import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Stock } from '../../model/stock';

@Component({
  selector: 'create-stock',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-stock.component.html',
  styleUrl: './create-stock.component.css',
})
export class CreateStock {
  public stock!: Stock;
  public confirmed = false;
  public exchanges =['AMEX', 'NASDAQ', 'NYSE'];

  constructor() {
    this.stock = new Stock('', '', 0, 0, '');
  }

  createStock(stockForm: any) {
    console.log('Stock form', stockForm);
    if (stockForm.valid) {
      this.confirmed = true;
      console.log('Creating stock: ', this.stock);
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}
