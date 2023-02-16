const{SlashCommandBuilder} = require('discord.js')
module.exports = {

data: new SlashCommandBuilder()
.setName("motivacao")
.setDescription("Frase motivacional"),

async execute (interaction){

    await interaction.reply("Vai estudar Vagabundo!")
}
}