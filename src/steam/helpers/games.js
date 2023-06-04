const { SteamWrapper } = require('../wrapper')

// Create Steam API Wrapper
const steam = new SteamWrapper(process.env.STEAM_API_KEY)

async function getTenRandomLeastPlayed(user) {
    const games = await steam.GetGames(user);
    const noHours = games.filter(game => {
        return game.playTime === 0 && !game.name.includes('Test')
    })
    const result = [];
    for(let i=0; i<10; i++) {
        const random = Math.floor(Math.random() * noHours.length);
        result.push(noHours[random]);
    }
    return result;
}

async function getGameFromUser(user, gameName) {
    const games = await steam.GetGames(user);
    const results = games.filter(game => {
        return game.name.includes(gameName);
    })
    return results;
}

module.exports = { getTenRandomLeastPlayed, getGameFromUser }