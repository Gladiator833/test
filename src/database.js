
const Database = require("better-sqlite3");
const db = new Database("community.db");

db.prepare(`
CREATE TABLE IF NOT EXISTS warnings (
  userId TEXT,
  reason TEXT,
  timestamp INTEGER
)`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS xp (
  userId TEXT PRIMARY KEY,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 0
)`).run();

module.exports = db;
