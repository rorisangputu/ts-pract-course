//Objects
//Setting types at object level
let car: {
    brand: string;
    year: number;
    color: string
} = {
  brand: "toyota",
  year: 2004,
  color: "blue",
};

let car1: {
    brand: string;
    year: number;
    color: string
} = {
  brand: "Isuzu",
  year: 2010,
  color: "blue",
};

//Setting Types in Array

let book = { title: 'book', cost: 20 }
let pen = { title: 'bix', cost: 12 }
let notebook = { title: 'notebook' }

let items: { title: string; cost?: number }[] = [book, pen, notebook]; //notebook doesnt have matching types
//we can add ? to bypass missing type

let vehicle = { brand: 'audi', cost: 400 }
let boat = { brand: 'Yamaha', cost: 800, color: 'brown'}

let orders: { readonly brand: string, cost: number, color?: string }[] = [vehicle, boat]
//orders[0].brand = 'Mistubishi' //cant change brand name because its readonly

orders[0].color = 'purple';
console.log(orders);

let bike = { brand: 'Harley', cost: 500, color: 'black' };
orders.push(bike);
console.log(orders);