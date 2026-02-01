import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css',
})

export class StockItemComponent implements OnInit{
    name: string = '';
    code: string = '';
    price: number = 0;
    previousPrice: number = 0;

    constructor() {}
    
    ngOnInit(): void {
        this.name = 'Test Stock Company';
        this.code = 'TSC';
        this.price = 85;
        this.previousPrice = 80;
    }
}