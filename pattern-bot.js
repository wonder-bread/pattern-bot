require("dotenv").config();
const _ = require("lodash");
const { Client } = require("discord.js");
const { evaluateMsg } = require("./util/message-utils");

const client = new Client();
const { CLIENT_TOKEN = "NO_TOKEN_PROVIDED" } = process.env;

const onReady = () => {
  console.log("Ready to accept commands!");
};

client.once("ready", onReady);
client.on("message", evaluateMsg);

client.login(CLIENT_TOKEN);
