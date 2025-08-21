const express = require("express")
const app = express();
const util = require("util");

const obj = {
    name: "Aniket",
    age: 20,
    nested: {
        level1: {
            level2: {
                level3: { msg: "Deeply nested object" }
            }
        }
    }
};

console.log("Util inspect:", util.inspect(obj, { depth: null, colors: true }));

// console.log(util.inspect(obj, { depth: null }));
// console.log(obj);

// deep nested ke liye best hai util.inspec
