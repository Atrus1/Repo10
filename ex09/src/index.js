var myObj = {
    title: "Titanic",
    song: "My Heart Will Go On",
    genre: "drama",

}

function myFunction(myObj, checkProp) {
//
if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }
    return "Not Found";
  }


console.log(myFunction(myObj, "title"));
console.log(myFunction(myObj, "song"));
console.log(myFunction(myObj, "genre"));{
  console.log(myFunction(myObj, "actor"));
//
}
    module.exports = myFunction;