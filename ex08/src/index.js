
//
   function myObject() {
       'use strict';
        const MATH_CONSTANTS = {
            E: 2.71828

        };
//
let obj = {
    name:"Arena",
    review: "Awesome"
};
Object.freeze( MATH_CONSTANTS);
obj.review = "bad";
obj.newProp = "Test";
console.log(MATH_CONSTANTS);

//
        try {
        MATH_CONSTANTS.E = 23;
} catch(error) {;
    console.log(error.message);
}
return MATH_CONSTANTS.E;
}
const E = myObject();
module.exports = myObject;