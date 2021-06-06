#!/bin/sh

java -Xmx1024M -Xms1024M -jar server.jar nogui | TOKEN=<DISCORD_BOT_TOKEN> CHANNEL=<NOTICE_CHANNEL> WEBHOOK_URL=<WEBHOOK_URL> HOSTNAME=<ホスト名> node discord-logger.js
