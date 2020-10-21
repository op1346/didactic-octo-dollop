/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const express = require('express');
const path = require('path');

module.exports = function(controller) {

    // make public/index.html available as localhost/index.html
    // by making the /public folder a static/public asset
    controller.publicFolder('/', path.join(__dirname,'..','public'));

    console.log('Chat with me: http://localhost:' + (process.env.PORT || 3000));

    // listen for a message containing the word "hello", and send a reply
    controller.hears('hello','message',async(bot, message) => {
        // do something!
        await bot.reply(message, 'Hello human')
    });
}