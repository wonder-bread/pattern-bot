////////////////////
// EXEC FUNCTIONS //
////////////////////

const _execPing = msg => {
  msg.channel.send("pooooooong!");
};

const _execJoinChannel = msg => {
  var voiceChannel = msg.member.voiceChannel;
  voiceChannel.join();
};

const _execPeggle = msg => {
  msg.channel.send("Peggle... 2!");
  msg.channel.send({ files: ["https://i.imgur.com/eK2avAw.gif"] });
};

const commandMap = {
  peggle: _execPeggle,
  ping: _execPing,
  joinme: _execJoinChannel
};

module.exports = commandMap;
