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

    controller.on('hello', async(bot, message) => {
        console.log("WELCOME")
        await intro(bot, message)
      });

    controller.hears('hello', async(bot) => {
        await bot.say('hello');
    });
}