//Type Annotations -- specifying variable type

let awesomeName: string = 'shakeAndBake'; //adding type :string
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

let amount: number = 20;

amount = awesomeName.length +20  
amount = amount.valueOf();
console.log(amount);

let isAwesome: boolean = false;
isAwesome = true;

console.log(isAwesome);

if (awesomeName === 'shakeAndBake') {
    isAwesome= true
} else {
    isAwesome= false
}

console.log(isAwesome);

// amount = "forty"
// awesomeName = 20
// isAwesome = 'thirty'

console.log(amount, awesomeName, isAwesome)

//UNION TYPES

let tax: number | string = 10; //Union types taking either or
tax = 100
tax = "Mathers"

//-- Literal union value types
let requestStatus: 'pending' | 'success' | 'error' = 'pending'
requestStatus = 'success'

//-- type any: allows us to opt out of type check

let notSure: any = 4;
notSure = 'my boooga'
notSure = false; 

//Practical implementation
const books = ['1984', 'Brave New World', 'Farhenheit 451'];

let foundBook:string | undefined;

for (let book of books) {
    if (book === '1984') {
        foundBook = book;
        break;
    }
}

console.log(foundBook?.length)

//union type challenge

let discount: number | string = 20
discount = '20%';

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'

orderStatus = 'shipped'
