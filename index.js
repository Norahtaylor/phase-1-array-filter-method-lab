// Code your solution here

function findMatching(drivers, name){
   return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name){
    return drivers.filter((driver) => driver[0] === name[0])
}

function matchName(drivers, string){
    return drivers.filter((driver) => driver.name === string)
}

// function findMatching(name){
//     collection.filter(driverName => {
//         let newArray = [];
//         driverName.toUpperCase() === name.toLowerCase();
//         return newArray}
//  )}


  

// function fuzzyMatch(collection, cb){
//     return collection.filter(driverName => {
//         if (driverName === name) 
//             return driverName
//          else (driverName !== name )
//         return ""
//     }
//         )
// }

// function matchName(collection, cb){
//     return collection.filter(driverName => {
//         driverName === name
//     })
// }









// // function filter(collection, cb) {
//     const newCollection = []

//     for (const user of collection) {
//         if (cb(user)) {
//             newCollection.push(user);
//         }
//     }
//     return newCollection;
// }

























// function fuzzyMatch(collection, name){
//     return collection.filter(
//         driverNamee => driverNamee.toLowerCase() === name.toUpperCase()
//     )
// }

// function matchName()


//     // let newArray = []
//     // for (const user of collection){
//     //     if (user.name === name) {
//     //         return user.name
//     //     }
//     //     else return newArray
//     // }}
// findMatching(drivers, "Booby")

// function fuzzyMatch(array) {
//     const drivers = array.filter(drivers => drivers.name === "");
//     if (drivers) {
//         return drivers.name
//     }
//     else {
//     }
// }

// matchName.filter(drivers)