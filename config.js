'use strict';

const TOKEN = process.env.TOKEN ? process.env.TOKEN : '';
exports.TOKEN = TOKEN;

const CHANNEL = process.env.CHANNEL ? process.env.CHANNEL : '';
exports.CHANNEL = CHANNEL;

const WEBHOOK_URL = process.env.WEBHOOK_URL ? process.env.WEBHOOK_URL : '';
exports.WEBHOOK_URL = WEBHOOK_URL;

const HOSTNAME = process.env.HOSTNAME ? process.env.HOSTNAME : '';
exports.HOSTNAME = HOSTNAME;
