

function myFunction() {
    var myMusic = {
        001: {
        atrist: "Billy Joel",
        title: "Piano Man",
        release_year: 1973,
        formats: {
            1: "CD",
            2: "8T",
            3: "LP"
        },
        gold: true
    },
    002: { // Add a record here
        atrist: "Billy Joel",
        title: "The Stranger",
        release_year: 1977,
        formats: {
            1: "CD",
            2: "8T",
            3: "LP"
        },
        gold: true
    },           

    
};
return myMusic;
}
myFunction()[2];
module.exports = myFunction;
console.log(myFunction());