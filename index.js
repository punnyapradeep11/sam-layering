'use strict';

/** Local layer importing */
var customFirstLayer = require('./dependencies/nodejs/firstLayer/first-custom-layer'); 
var customSecondLayer = require('./dependencies/nodejs/secondLayer/second-custom-layer');

/** Published layer importing */

var customFirstPublishedLayer = require('/opt/nodejs/firstLayer/first-custom-layer');
var customSecondPublishedLayer = require('/opt/nodejs/secondLayer/second-custom-layer');

exports.handler = (event, context, callback) => {
    console.log(' Local Layer --- customFirstLayer =', customFirstLayer.getFirstLayer());
    console.log(' Local Layer --- customSecondLayer =', customSecondLayer.getSecondLayer());
    console.log(' Published --- customFirstLayer =', customFirstPublishedLayer.getFirstLayer());
    console.log(' Published --- customSecondLayer =', customSecondPublishedLayer.getSecondLayer());
    callback(null, {
        statusCode: 200,
        headers: { "x-custom-header" : "my custom header value" },
        body: "hello world"
    });  
}