//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUc1V0NqNnNIeWMwSEMyQU9yYWsrTEtYT05YYUtPRUhHbEdGYlplWDNVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2c4b2xEeEFlTFg0YWJLRE15bSt4ZklhS3hpSXJNdTJJSVV2Rk9ZZnowRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRVZYa1I0QTNUVE9hczJPSmpVamw1c1RPQ1gxaC9oOERxOUROODhuMFhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpbWh0RDBxdk9RaG1YSTcraUUzZHNRNjJQTjg4OFA1bjgzcE5Qa2FSNGdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklCcnAwVGJXZDBha09peXhjcjk1dXAwYlVGejkxeFJzSzZ2bC92Z2NkWFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9GVXJUYWI2anNMWmdYUlZYbFIyajdtVzN5MXgvbC9iTVRqTUppRUg2Ujg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUtRdnJjTzRVSUJRVm5MMFA0SkdsOEZZR05sT2Vmd1pwNXlkN051TUVtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzA0dWNyNkYzb25WUzVSK1NJUE1LaVdXRHpPb2ZMa0pJQVpHeVpUVXJudz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktnOVZ2QUxqWkpGbWJwVlFEdkh0bllId0xBSFhicmdUWDJVWDBMZTJ1amVOSlpIVjRDaWU3L2I3cHZxeW11UWM0K2p1TUdCR3VjYzlWTjNMRG5CakFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTMsImFkdlNlY3JldEtleSI6IlcvczRldTZLdjRXZUh3TFRVNUtpUWlmSW9zb3hkMktsL3pFS2JNZWFzK0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjY5ODA1NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzBDMDRGRTVFNTQwNkZGOTIzMUMzQTNCRUM3N0UwOUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjU2NTg4Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjY5ODA1NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0Y4QTA0OTI3ODNGNkQ1RjFBNjYyMzg5MjgxRUU0NEYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjU2NTg4Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoia0YzLVF0akNUdkdnMTVrZk1IOGllQSIsInBob25lSWQiOiJiNzI3MDQyNy0wYzczLTRlYWEtOWU1Ny0zMjJjN2JhNjc4ZWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWY2YVQvaGJXNzlVVFRLOURET1d0K3QwaEtjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik15YmN6KzNYWmJvNmhlenY5Z0JzSVpob3FVUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxSEFTRUU4TiIsIm1lIjp7ImlkIjoiOTQ3NjY5ODA1NTM6MTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pUZWlZSUVFT3VKc2JVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRGUWxueUJXbDFlWTd0dmFwNVBPK0lPY0lvOE1iN2F4T0NPZmNkNUpVM3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJVNkxKd000WXNYeFVYakhlRW9LOEg0RDdWaHhGM3NIMElKVis1YjZRckE5cWh2TWRMdGhPSCtaYmxISERxSVlOVG9Cc0RyWDhDWjhVMnlUZTFLR0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTdjRkQzFzRWZ1Wm1QeFk0MlRNeVdnQWZjQVRoWk03cDFpRU9xMnJvdWpqYWNqamx1OHF5VEFvRHNBQ2dxTy9uYy9qRHJjVVJMM0lsSk14M2o3eUtCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY2OTgwNTUzOjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVCVUpaOGdWcGRYbU83YjJxZVR6dmlEbkNLUERHKzJzVGdqbjNIZVNWTjcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI1NjU4ODAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQUdyIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
