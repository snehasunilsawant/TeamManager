const mongoose = require("mongoose");
const Player = mongoose.model('Player');

// const players = [{
//     name: 'sneha',
//     position: 'forword',
//     game1Status: 'playing',
//     game2Status: 'playing',
//     game3Status: 'playing',
//     createdAt: new Date(),
// },{
//     name: 'Jon',
//     position: 'GoalKeeper',
//     game1Status: 'playing',
//     game2Status: 'undecided',
//     game3Status: 'undecided',
//     createdAt: new Date(),
// }]
module.exports = {
    get_all_players: (req , res) => {
        // console.log(players); 
        // res.json(players)
        Player.find({})
        .then( players => { console.log(players); res.json(players)})
        .catch( err => {
            console.log('Server : player error',err);
            res.status(500).json(err);
        })        
    },

    deletePlayer: (req, res) => {
        console.log('I am inside delete',req.body.id);
        Player.deleteOne({_id: req.body.id})
        .then( () => res.json(true))
        .catch( err => console.log('Server delete err:',err))
        },

    addPlayer: (req, res) => {
        console.log('I am inside add');
        let new_player = new Player(req.body)
        new_player.save()
            .then(() => {
                req.session.player = new_player
                res.json(true)
            })
            .catch(err => {
                console.log("Player save error", err)
                res.status(500).json(err)
            })
    }

}