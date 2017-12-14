const path = require("path");

const players = require('./../controller/players.js')

module.exports = app => {
    app.get("/get_all_players", players.get_all_players);
    app.post("/deletePlayer", players.deletePlayer);
    app.post("/addPlayer", players.addPlayer);

}