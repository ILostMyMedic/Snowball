# ☃️ Snowball

<img align="right" alt="Snowball logo." src="src/assets/Snowball.png" width="150" />

Snowball is a Discord bot that brings people together for epic snowball fights across teams and servers!

Imagine the excitement of a snowball fight, but with the added fun of cross-server competition and team camaraderie. Snowball makes it all possible, with easy-to-use features that let you create and join teams, challenge other teams to snowball fights, and track your stats and win/loss record.

[![Discord buildathon 2023](https://img.shields.io/badge/Discord%20Buildathon-2023-blue.svg)](https://discord.gg/discord-developers) [![MPL2.0 License](https://img.shields.io/badge/License-MPL%202.0-purple.svg)](https://choosealicense.com/licenses/mpl-2.0/)


## Tech stack
<img align="right" alt="GIF of animated mobile phone displaying different coding languages." src="src/assets/programmer.gif" width="250" />

| Tech | Version | Docs
|------|-----|-----|
| Discord.js | ^14.13  | [discordjs.org](https://discord.js.org/) |
| Typescript | ^5.2  | [typescriptlang.org](https://www.typescriptlang.org/) |
| RabbitMQ | 3.12  | [rabbitmq.com](https://rabbitmq.com/) |
| NodeJS | 18.17  | [nodejs.org](https://nodejs.org/en) |
| MongoDB | 7.0 | [mongodb.com](https://www.mongodb.com/atlas/database) |
| Redis | 7.2 |  [redis.com](https://redis.com/) |





## Authors


[<img src="https://avatars.githubusercontent.com/u/25279930?v=4" width="100" /> ](https://www.github.com/ilostmymedic)

[@ILostMyMedic](https://www.github.com/ilostmymedic)


***
### Selfhosted?
If you wanna host the bot yourself;

* **Creating a `.env` file**:
  ```
  TOKEN="YOUR_DISCORD_TOKEN" 
  MONGO="YOUR_MONGO_URI
  ```
* **Creating a certificate**:
  
  From [MongoDB](https://www.mongodb.com/atlas/database) you can create a database and generate a .pem file. In the root directory create a folder `./cert` and place the certificate in the folder. In `./src/database/index.ts` the file is being loaded as `snowball.cert` and you might wanna rename the certificate.

* **Changing Database**
  
  Under the folders `./src/database/resolvers` every resolver will include the db `snowball`. You can switch this name if you would like to name your database something else.

* **Ecosystem**
  
  This bot uses `PM2` for clustering. Make sure you deligate the correct amount of instances in the `./ecosystem.config.js` file.


****
> Made with ❤️ during Discord Buildathon 2023