# Tensura Anime Bot

Anime-themed WhatsApp bot inspired by Rimuru Tempest and Great Sage.

---

## Features

### 🤖 AI Commands

```text
!sage <question>
!ai <question>
!chat <message>
!translate <text>
!summarize <text>
```

### 🎌 Anime Commands

```text
!anime <name>
!manga <name>
!character <name>
!waifu
!husbando
!rimuru
!animequote
!animefact
!animewallpaper
!recommend
!airing
```

### 🎵 Music Commands

```text
!lyrics <song>
!songinfo <song>
!artist <name>
!album <name>
!topmusic
!spotify <song>
```

### 😂 Fun Commands

```text
!joke
!meme
!quote
!fact
!8ball <question>
!ship @user1 @user2
!compliment @user
!roast @user
!truth
!dare
```

### 🎮 Games Commands

```text
!quiz
!animequiz
!trivia
!guessanime
!hangman
!tictactoe
!riddle
!math
```

### 👥 Group Commands

```text
!welcome on/off
!goodbye on/off
!antilink on/off
!antispam on/off
!rules
!tagall
!hidetag
!admins
!groupinfo
!warn @user
!warnings @user
!kick @user
!promote @user
!demote @user
!mute
!unmute
```

### 🛡️ Security & Protection

```text
!antilink on/off
!antispam on/off
!antiflood on/off
!antiword on/off
!lockgroup
!unlockgroup
```

### 💰 Economy Commands

```text
!daily
!balance
!wallet
!deposit
!withdraw
!shop
!buy
!sell
!leaderboard
```

### 📈 Leveling Commands

```text
!rank
!level
!xp
!leaderboard
```

### 😴 AFK System

```text
!afk <reason>
!afklist
```

### 🎨 Sticker Commands

```text
!sticker
!take
!ttp <text>
!attp <text>
!emojimix
```

### 🔎 Search Commands

```text
!google <query>
!wiki <query>
!image <query>
!movie <name>
!news <topic>
```

### 🛠️ Utility Commands

```text
!ping
!uptime
!weather <city>
!time <country>
!calc <equation>
!shorturl <url>
!qr <text>
```

### 👑 Owner Commands

```text
!broadcast <message>
!restart
!shutdown
!backup
!stats
!join <group-link>
!leave
!setname <name>
!setbio <bio>
```

### 🎭 Safe Entertainment Commands

```text
!fakehack @user
!virusprank @user
!matrix
!systemscan
!hackprogress
```

### 🧠 Great Sage Mode

```text
!sage <question>
!rimuru
!analyze <topic>
!strategy <topic>
!explain <topic>
```

---

## Installation

```bash
git clone https://github.com/YOUR_USERNAME/tensura-anime-bot.git
cd tensura-anime-bot
npm install
npm start
```

---

# 📱 Termux Setup (Android)

```bash
pkg update && pkg upgrade -y
pkg install nodejs git -y

git clone https://github.com/YOUR_USERNAME/tensura-anime-bot.git
cd tensura-anime-bot

npm install
node index.js
```

### ⚠️ Important Termux Notes:
- Keep Termux open while bot is running
- Use `termux-wake-lock` to prevent sleep
- Install:
```bash
termux-wake-lock
```

---

# 🐧 Arch Linux Setup

```bash
sudo pacman -S nodejs npm git --noconfirm

git clone https://github.com/YOUR_USERNAME/tensura-anime-bot.git
cd tensura-anime-bot

npm install
node index.js
```

### Optional (keep bot running 24/7)

Install PM2:

```bash
npm install -g pm2
pm2 start index.js --name tensura-bot
pm2 save
pm2 startup
```

---

## Project Structure

```text
tensura-anime-bot/
├── ai/
├── commands/
├── database/
├── media/
├── session/
├── system/
├── config.js
├── index.js
├── package.json
├── README.md
└── .gitignore
```

---

## Core Systems

- 🧠 Great Sage AI Engine  
- 🎌 Anime Database Integration  
- 👥 Group Management  
- 🛡️ Anti-Link Protection  
- ⚡ Anti-Spam Protection  
- 💰 Economy System  
- 📈 XP & Leveling System  
- 🎮 Mini Games  
- 😴 AFK System  
- 🎨 Sticker Tools  
- 🔎 Search Utilities  
- 👑 Owner Controls  

---

## License

MIT License

---

### 🧠 "Analysis Complete. Great Sage is ready to deploy across all systems."
