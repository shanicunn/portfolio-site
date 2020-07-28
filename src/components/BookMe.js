import React from 'react';

import Nylas from 'nylas';
Nylas.config({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
});
var nylas =  
    Nylas.with(ACCESS_TOKEN);
nylas.events
    .count()
    .then(count => {
        console.log(
            `You have ${count} events.`
        );
    });