const Database = require("../handlers/Database");
const clc = require("cli-color");

module.exports = async (_client, guild) => {
	Database.AddGuild(guild);
	console.log(clc.green("[+] Joined new server"));
};
