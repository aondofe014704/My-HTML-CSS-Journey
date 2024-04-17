const user = {
    firstName: "Jack",
    lastName: "Songu",
    State: "Borno",
    gender: "male"
}

for(const key in user){
    console.log(user[key]);
}


let array = [1, 2, 3, 4, 5, 6]

for(const value in array){
    console.log(array[value]);
}


for(const index of array){
    console.log(array[index]);
}


