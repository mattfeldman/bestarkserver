var async = require('async'),
    got = require('got'),
    fs = require('fs');

var baseUrl = "http://api.embed.ly/1/extract?key=14045eca3d45445aa1f234d96aaad59d&url=http%3A%2F%2Fsteamcommunity.com%2Fsharedfiles%2Ffiledetails%2F%3Fid%3D";
var mods = ["520879363",
    "509793590",
    "529801313",
    "531396658",
    "566885854",
    "510590313",
    "539464369",
    "535821068",
    "564895376",
    "520953653",
    "544598236",
    "559651126",
    "566887000",
    "509791002",
    "534838287"];
var metaMods = [];
async.map(mods,
    function (mod, next) {
        async.retry({times: 3, interval: 500}, function () {
            got(baseUrl + mod, {json: true}).then(function (response) {
                response.body.id = mod;
                metaMods.push(response.body);
                next();
            });
        }, function (err) {
            console.log(err);
        });
    },
    function (err) {
        if (err) throw err;
        console.log("Done Pulling Steam Mod Data for " + metaMods.length);
        fs.writeFileSync("content/data/mods.json", JSON.stringify(metaMods));
    });