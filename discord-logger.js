'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf8');

const {
  TOKEN,
  WEBHOOK_URL,
  CHANNEL,
  HOSTNAME
} = require('./config');

const axios = require('axios');
const Discord = require('discord.js');
const client = new Discord.Client();

// ログインユーザー
const activeUser = new Set();

// 標準入力監視
process.stdin.on('data', async (input) => {
  let postMessage = '';
  let color = 'FFFFFF'

  if (input.includes('joined the game')) {
    const username = `${input.split(' ')[3]}` || 'username';
    postMessage = `${username} が入室しました. :wink:`;
    color = '37b24d';
    activeUser.add(username);
  } else if (input.includes('lost connection: Disconnected')) {
    const username = `${input.split(' ')[3]}` || 'username';
    postMessage = `${username} が退室しました. :wave:`;
    color = 'f4aa41';
    activeUser.delete(username);
  } else {
    return;
  }
  try {
    await axios.post(WEBHOOK_URL, {
      username: 'micra-log',
      embeds: [
        {
          title: postMessage,
          color: parseInt(color, 16)
        }
      ]
    });
  } catch (err) {
    // discordへの通知が失敗しても終了させない
  }
});

// ストリーム終了時に呼ばれる.
process.stdin.on('end', () => {

});

// メッセージ監視
client.on('message', async (message) => {
  // botの発言は除外
  if (message.author.bot) {
    return;
  }
  // 該当チャンネル以外無視
  if (CHANNEL.length > 0 && message.channel.name !== CHANNEL) {
    return;
  }

  const postedMessage = message.cleanContent.toString();

  if (postedMessage === '#player') {
    let list = 'ログイン中のユーザー\n';
    if (activeUser.size === 0) {
      list = list + 'なし\n';
    }
    activeUser.forEach((user) => {
      list = list + `- ${user} \n`;
    });
    try {
      await message.channel.send(list);
    } catch (err) {
      // discordへの通知が失敗しても終了させない
    }
  }

  if (postedMessage === '#server') {
    try {
      await message.channel.send(`hostname: ${HOSTNAME}`);
    } catch (ee) {
      // discordへの通知が失敗しても終了させない
    }
  }
});

client.login(TOKEN);
