const recordMessage = require('./recordMessage')
const gotYou = require('./gotYou')
async function messageSelector(groupId, userId, name, message, timestamp) {
    if (message === '抓') return await gotYou(groupId)
    if (message === '抽') return "抽你老木 林北不是Orz"
    recordMessage.textMessage(groupId, userId, name, message, timestamp)
    return
}

module.exports = {
    messageSelector
}