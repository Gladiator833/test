
const cron = require("node-cron");

module.exports = (client) => {
  cron.schedule("0 18 * * *", () => {
    const channel = client.channels.cache.get(process.env.ANNOUNCE_CHANNEL);
    if (channel) channel.send("📢 Daily reminder.");
  });
};
