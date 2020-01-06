// Code 2 ways to detect that a JavaScript object {} is empty.
// 1) Faster


// 2) Less code



const emptyObj = {};
const entry = 4;

// function isObjEmptyProperty(emptyObj) {
//     for(var key in emptyObj) {
//         if (emptyObj.hasOwnProperty(key)) {
//             console.log("has key, not empty", JSON.stringify(emptyObj))
//             return true;
//         }
//     }
//         console.log("no key, empty: ", JSON.stringify(emptyObj))
//         return false;
// }

// function isObjEmptyEntries(object) {
//     if (Object.entries(object).length === 0) {
//         console.log("true");
//         return true; 
//     }
//     else { 
//         console.log("false")
//         return false;
//         }
// }

// const isObjEmpty = (object) => { Object.entries(emptyObj) === entry ? console.log("true") : console.log("false") };

const isObjEmpty = (object) => {
    console.time("Object.keys");

    if ( 
        Object.keys(emptyObj) == 0
    ) {
        console.log("empty")
        console.timeEnd("Object.keys");
        return true;
    }
    else {
        console.log("not empty")
        console.timeEnd("Object.keys");
        return false;
    }
}

// const isObjEmptyStringify = (object) => {
//     console.time("stringify")
//     if (
//         JSON.stringify(emptyObj) == 0
//     ) {
//         console.log("empty")
//         console.timeEnd("stringify");
//         return true;
//     }
//     else {
//         console.log("not empty")
//         console.timeEnd("stringify");
//         return false;
//     }

// }

