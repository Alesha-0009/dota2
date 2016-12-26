//подключение нужных библиотек
var steam = require("steam"),
    util = require("util"),
    fs = require("fs"),
    crypto = require("crypto"),
    dota2 = require("dota2"),
    steamClient = new steam.SteamClient(),
    steamUser = new steam.SteamUser(steamClient),
    steamFriends = new steam.SteamFriends(steamClient),
    Dota2 = new dota2.Dota2Client(steamClient, true);

//загружаем файл конфигурации
global.config = require('./config');

var onSteamLogOn = function onSteamLogOn(logresp) {
	if(logresp.eresult == steam.EResult.OK){
			steamFriends.setPersonaState(steam.EPersonaState.Busy);
			steamFriends.setPersonaName("Dota 2 Bot");
			util.log("Logged on");

			Dota2.lunch();
			Dota2.on("ready",function(){
				util.log("Dota2 is ready");
				var chatChanel = "dot2bot";
				 Dota2.joinChat(chatChannel);
                setTimeout(function(){
                    Dota2.sendMessage(chatChannel, "Hello, guys! I'm Dota2 Bot.");
                }, 1000);
                 setTimeout(function(){
                    Dota2.leaveChat(chatChannel);
                }, 10000);

                var players = [];
			});
	}
}