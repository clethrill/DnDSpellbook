/**
 * Function: handler.js
 * Details: Allow local Debugging
 * Author: Sandon Joubert
 */

var main = require("./handler.js");

/**
 * Parameters
 */
var event = {
};

/**
 * Output Formatting / Processing
 */
var context = {
    done: function (data) {
        console.log("-------------------");
        console.log("Context Done");
        console.log("Result: ", data);
    },

    succeed: function (data) {
        console.log("-------------------");
        console.log("Context Succeed");
        console.log("Result: ", data);
    },

    fail: function (data) {
        console.log("-------------------");
        console.log("Context Fail");
        console.log("Result: ", data);
    }
};

// Call the Lambda function
main.getSpells(event, context);
