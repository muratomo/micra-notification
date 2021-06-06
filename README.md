# micra-notification

## Description

マイクラサーバの通知をDiscordへ行うスクリプトです.<br>
[スクリプト作成記事](https://mura-elma.hatenablog.com/entry/2021/05/05/185423)

## Usage

### Bot立ち上げ
`start.sh`でマイクラサーバ起動と通知Botの起動を行います.<br>
適宜環境変数を埋め込んで実行いたします.<br>
個々の機能は下記にて確認することができます.

### 入退室通知

サーバへの入退室を通知します.

```shell
$ WEBHOOK_URL=<WEBHOOK_URL> node discord-logger.js
```

### ログインユーザー表示Bot

```shell
# Bot起動
$ node TOKEN=<DISCORD_BOT_TOKEN> CHANNEL=<NOTICE_CHANNEL> node discord-logger.js
```

Discrodで`#player`とコメントするとログイン中のユーザーを表示します.

### ホスト名表示Bot

```shell
# Bot起動
$ node TOKEN=<DISCORD_BOT_TOKEN> CHANNEL=<NOTICE_CHANNEL> HOSTNAME=<ホスト名> node discord-logger.js
```

Discrodで`#server`とコメントするとホスト名を表示します.
