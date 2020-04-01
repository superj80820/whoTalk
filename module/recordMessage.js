const MongoDB = require("./connectMongoDB");

async function textMessage(replyToken, groupId, userId, name, message, timestamp) {
    return await MongoDB.insertData({
        "replyToken": replyToken,
        "groupId": groupId,
        "userId": userId,
        "name": name,
        "message": message,
        "tag": "userTextMessage",
        "timestamp": timestamp,
        "catch": ""
    });
}

async function stickerMessage(replyToken, groupId, userId, name, stickerId, timestamp) {
    return await MongoDB.insertData({
        "replyToken": replyToken,
        "groupId": groupId,
        "userId": userId,
        "name": name,
        "stickerId": stickerId,
        "tag": "userStickerMessage",
        "timestamp": timestamp,
        "catch": ""
    });
}

module.exports = {
    textMessage,
    stickerMessage
}