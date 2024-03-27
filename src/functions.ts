// function calculateTax(income: number, taxYear?:number):number{
//     let x;
//     if(taxYear < 2022) return income * 1.2
//     return income * 1.3
// }

function calculateTax(income: number, taxYear:number=2020):number{
    // by adding a = [value] next to a parameter makes it default parameter. You can get away with using taxYear = 2022
    if(taxYear < 2022) return income * 1.2
    return income * 1.3
}

function sumNum(input: number){
    return input
}

calculateTax(10_000,251)
// If you try to add another paramater you will see that immediately errors
// As you know in JS this does not matter to JS functions until runtime and errors happen or it ignores it all together
// functions return type that is void there is not return statement neededyo