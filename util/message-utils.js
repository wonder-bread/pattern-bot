const CommandMap = require("./commands");

const _getValidCommandMsg = () => {
  const cmds = Object.keys(CommandMap);
  const availableCmds = cmds
    .map((cmd, index) => `${index === cmds.length - 1 ? "and " : ""}[!${cmd}]`)
    .join(", ");

  return `That is not a valid command.  I currently support: ${availableCmds}.`;
};

/////////////
// EXPORTS //
/////////////

const evaluateMsg = msg => {
  const { content } = msg;
  if (content.split(" ")[0].startsWith("!")) {
    const query = content.slice(1);
    const command = CommandMap[query] || null;
    command ? command(msg) : msg.channel.send(_getValidCommandMsg());
  }
};

module.exports = { evaluateMsg };
