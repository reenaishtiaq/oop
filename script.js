// function constructProgram(personName, personGender, personHobbies,meal) {
//     return {
//         name: personName,
//         gender: personGender,
//         hobbies: personHobbies,
//         eat: function () {
//             console.log(meal);

//         }

//     }

// }
// // console.log(constructProgram("farah", "female", ["sleeping", "bating"]));

// let personA = constructProgram("farah", "female", ["sleeping, bating"], "burger");
// console.log(personA);

// function constructCar(ownerName, carColor, genderOfowner, manufacturingDate, speed) {
//     let obj = {
//         name: ownerName,
//         color: carColor,
//         gender: genderOfowner,
//         date: manufacturingDate,
//         mode: function () {
//             console.log(speed);
//         }
//     };
//     return obj;


// }

// let myCar = constructCar("Mehar", "black", "female", "januuary 2018", "high speed");
// console.log(myCar);

function mobile(mobName, mobColor, mobScreenSize, mobVersion) {
    let obj = {
        name: mobName,
        color: mobColor,
        screenSize: mobScreenSize,
        version: mobVersion,
        yourMob: function(){
            console.log(`you are using ${this.name} having ${this.color} color, screen size is ${this.screenSize} version is ${this.version}`)
        },
    }
    return obj;
}
let myMob = mobile("samsung", "gold", 5.6, "Android 8.0.0 Oreo")
console.log(myMob);