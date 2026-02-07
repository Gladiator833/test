
module.exports = (client) => {
  const recent = new Map();

  client.on("messageCreate", msg => {
    if (msg.author.bot) return;

    const now = Date.now();
    const times = recent.get(msg.author.id) || [];
    times.push(now);
    recent.set(msg.author.id, times.filter(t => now - t < 5000));

    if (times.length > 5) {
      msg.member?.timeout(300000, "Spam");
      msg.delete().catch(() => {});
    }
  });
};
