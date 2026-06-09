const {
  default: makeWASocket,
  useMultiFileAuthState
} = require("@whiskeysockets/baileys");

const anime = require("./commands/anime");
const fun = require("./commands/fun");
const group = require("./commands/group");
const config = require("./config");

async function startBot() {
  const { state, saveCreds } =
    await useMultiFileAuthState("./session");

  const sock = makeWASocket({
    auth: state
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];

    if (!msg.message) return;

    const from = msg.key.remoteJid;

    const text =
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text ||
      "";

    if (!text.startsWith(config.prefix)) return;

    const command = text
      .slice(config.prefix.length)
      .split(" ")[0]
      .toLowerCase();

    await anime(sock, from, command);
    await fun(sock, from, command);
    await group(sock, from, command);
  });

  console.log(`${config.botName} started.`);
}

startBot();
