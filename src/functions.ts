function sayHi(name:string) {
    console.log(`Hello there, ${name.toUpperCase()}`)
}
let car: string = 'brabus'

sayHi(car);

//Callbacks
function calculateDiscount(price: number): number{ //function returns back a number type 
    const hasDiscount = true

    if (hasDiscount) {
        return price;
        // return 'Discount applied'
    }
    return price * 0.9
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

//CHALLENGE
const names: string[] = ['Mike', 'Bill', 'Martin', 'Kelly', 'John'];

function checkNames(student: string): boolean{
    
    // for (let name of names) {
    //     if (name === student) {
    //         return true
    //     }
        
    // }
    // return false

    return names.includes(student);
}

let studentName:boolean = checkNames('Mike')
console.log(studentName);


//Optional AND Default Parameters in FUNCTIOns

//Optional Paramaters
function calculatePrice(price: number, discount?: number):number {
    return price - (discount || 0); //adding fallback value incase because discount value is optional
}

let priceAfterDiscount = calculatePrice(100);
console.log(priceAfterDiscount);

//Default Parameters                            //penaltyPoints has default value 
function calculateScore(initialScore: number, penaltyPoints: number = 0): number { 
    return initialScore - penaltyPoints;
}
let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);