export class Stock {
    favorite!: boolean;
    exchange!: string;

    constructor(
        public name: string,
        public code: string,
        public price: number,
        public previousPrice: number,
        favorite: boolean,
        exchange: string
    ) {
        this.favorite = favorite;
        this.exchange = exchange;
    }

    isPositiveChange(): boolean {
        return this.price >= this.previousPrice;
    }
}
