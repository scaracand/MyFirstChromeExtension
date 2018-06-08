'use strict';

client.callback();

client.getToken(opts)
    .then((token) => {
    	console.log("I got the token: ", token)
    });

