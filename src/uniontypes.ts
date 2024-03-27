function khgToLbs(weight: number | string): number{
    // Narrowing is a technique that allows for multiple options to become one outcome
    if(typeof weight === 'number')
        return weight * 2.2
    else
        return parseInt(weight)*2.2
    
}