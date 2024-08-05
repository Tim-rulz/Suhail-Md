const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349165850414";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_23_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUzLFxuICAgICAgICA1NSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkyLFxuICAgICAgICA0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwLFxuICAgICAgICA4LFxuICAgICAgICA1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDY3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk1LFxuICAgICAgICA5NixcbiAgICAgICAgMTU5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNixcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuYy93RFNqUUJLUWFUa0g1c3ZoRGUxczV0QUlkdlkzcVlGMkZ0RElnaGFBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2a1dxYWp0RFRubUt2UkFXdTBRaWVBXCIsXG4gIFwicGhvbmVJZFwiOiBcImMxZjZkYmY3LWJkY2ItNDk4Ny04ZjIzLTgwNGRjOTljZGJmZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAyMTQsXG4gICAgICAyMTYsXG4gICAgICAyMTQsXG4gICAgICAxNjIsXG4gICAgICAyMixcbiAgICAgIDcsXG4gICAgICAzNixcbiAgICAgIDIzMyxcbiAgICAgIDExNixcbiAgICAgIDE4MCxcbiAgICAgIDExNSxcbiAgICAgIDE2MixcbiAgICAgIDExLFxuICAgICAgMjI3LFxuICAgICAgNzQsXG4gICAgICAxNDksXG4gICAgICA1LFxuICAgICAgOTUsXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICA0NixcbiAgICAgIDIxNixcbiAgICAgIDIyMCxcbiAgICAgIDI0NSxcbiAgICAgIDE4MyxcbiAgICAgIDkzLFxuICAgICAgMjM4LFxuICAgICAgMzQsXG4gICAgICAxOTIsXG4gICAgICAxMTAsXG4gICAgICAyMzYsXG4gICAgICA3MyxcbiAgICAgIDE5NCxcbiAgICAgIDE0MCxcbiAgICAgIDE5MyxcbiAgICAgIDczLFxuICAgICAgNzEsXG4gICAgICAxNjcsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIWlM5N1lINlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2NTg1MDQxNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGltb3RoeVwiLFxuICAgIFwibGlkXCI6IFwiNDY3NDIxOTYxOTEyNDk6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcjg0TUVJRU51aHhiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlk1bnpBTDBIUFV0ZHoya1lvcEVGc1BFdTdKQ29wSDMrQkcxTFBIWEVwRjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM2M5YWswV1NMaHJRUTFTTXZaeVlPSm9hK0MzZ0xJcHUwRGtKMzlKV1J0WHVLbU1qRWxPLzhQTDI3OEdOckFkS0JGMkt6WVdIclMwOVJLNkl0TElZZ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL3UvM3BxMzFNSDYyYXdUOXpnVms4RGo1STJSaWF3Nm5BU1VvRkw5U0g1WXUwVGZPQldwTHY4eEg5cldyY0d1cHJHdUdsdWJ4bytOYmNIM05zeVVNQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2NTg1MDQxNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg5NjYwOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
