
//
    var myPet = {
        species: "dog",
        name: "Black",
        legs: 4 ,
        friends: ["Saša", "Mirza"]
} 
    function myFunction(myObj) {
        return myObj;
};
    
//
    console.log(myFunction(myPet));
    module.exports = { myPet, myFunction };