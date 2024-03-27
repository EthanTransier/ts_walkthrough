// let employee = {id:1}
// employee.name = 'Jonathan'//This would normally work in JS but not in TS
// You must scope our your objects full properties at its creation. This will be part of the reqruirement of the stricter coding and meaningful planning

// let employee:{
//     readonly id:number,
//     name:string,
//     nickname?:string,
//     retire:(date:Date)=>void
//     // you could make name unique, but have a default value
// }={id:1, name:'Bernard', retire:(date:Date)=>console.log(date)}
// Way you can set a default value on creation
// employee.name = "Typhoon"