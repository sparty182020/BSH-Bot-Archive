const { catchErrors } = require('../../functions/handlers/handleErrors');

module.exports = {
    data: {
        name: `uploads`
    },
    async execute(interaction, client) {
        const role = await interaction.guild.roles.fetch('999396872617738250').catch(catchErrors); 
        const member = await interaction.guild.members.fetch(interaction.user.id).catch(catchErrors);

        if (member.roles.cache.has(role.id)) {
            await member.roles.remove(role);
            await interaction.reply({
                content: `You have removed role <@&${role.id}>.`,
                ephemeral: true,
            })
        } else if (member.roles.cache.has(role.id) === false) {
            await member.roles.add(role);
            await interaction.reply({
                content: `You have added role <@&${role.id}>.`,
                ephemeral: true,
            })
        }
    }
}