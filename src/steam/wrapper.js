const SteamAPI = require('steamapi');

class SteamWrapper {
    constructor(apiKey) {
        this._api = new SteamAPI(apiKey);
    }

    async GetSteamID(url) {
        return await this._api.resolve(url);
    }

    async GetGames(userId) {
        return await this._api.getUserOwnedGames(userId);
    }
}

module.exports = { SteamWrapper };