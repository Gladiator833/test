
require("dotenv").config();
const client = require("./client");
const fs = require("fs");
const path = require("path");

for (const file of fs.readdirSync(path.join(__dirname, "events"))) {
  require(`./events/${file}`)(client);
}

client.login(process.env.TOKEN);
