type Employee = {
    readonly id:number,
    name:string,
    retire:(date:Date)=>void
    // you could make name unique, but have a default value
}

let person: Employee = {
    id:1, 
    name:'Bernard', 
    retire:(date:Date)=>{
        console.log(date)
    }
}