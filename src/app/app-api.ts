const api = {
    test: 'http://127.0.0.1/nomorepixels/src/v1/',
    prod: 'http://nomorepixels.com/api/v1/'
}

export const ENDPOINT = {
    latestData: {
        scores: 'latest/scores.php',
        players: 'latest/players.php'
    }
}

export const getURL = (part: string) => api.test + part;