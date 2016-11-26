// 'use strict';

var AWS = require('aws-sdk');
AWS.config.update({region:'ap-southeast-2'});

// var dynamo = new AWS.DynamoDB();

// Require Serverless ENV vars
//var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Require Logic
//var lib = require('../lib');

exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
	headers: {
		'Access-Control-Allow-Origin': '*'
	},
    body: JSON.stringify({
      message: 'Hello!?'
    }),
  };

  //callback(null, response);
  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

// Lambda Handler
// module.exports.getSpells = (event, context, callback) => {
// 	console.log('Received event:',JSON.stringify(event,null,2));
// 	console.log('Context:',JSON.stringify(context,null,2));
//
// 	var payload = {
// 	    TableName: 'Spells'
//  	}
//
// 	// context.succeed({
// 	// 	statusCode: 200,
// 	// 	body: JSON.stringify({
// 	// 		payload
// 	// 	})
// 	// });
//
// 	console.log(callback);
//
// 	console.log("BEFORE SCAN");
// 	console.log(payload);
//
//     dynamo.scan(payload, function(error, data) {
// 		if (error) {
// 			console.log("ERROR");
// 			console.log(error);
// 			context.fail({error: "error"});
// 		}
// 		else {
// 			console.log("SUCCESS");
// 			console.log(data.Items);
// 			context.succeed({
// 				statusCode: 200,
// 				headers: {
// 			    	'Access-Control-Allow-Origin': '*'
// 			    },
// 				body: JSON.stringify({
// 					data: data.Items
// 				})
// 			});
// 		}
// 	});
//
// };
