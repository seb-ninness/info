import request from 'superagent'

const player = '/api/v1/players'

export function getPlayers() {
  return request.get(player).then((res) => res.body)
}

export function postPlayer(playerData) {
  return request
    .post(player)
    .send(playerData)
    .then((resp) => resp.body)
}
