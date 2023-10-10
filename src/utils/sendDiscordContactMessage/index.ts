export default async function (message: string, email: string, name: string) {
	try {
		const response = await fetch(`${process.env.DISCORD_CONTACT_WEBHOOK}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: "Contact Bot",
				content: "",
				embeds: [
					{
						title: `New Message from ${name}!`,
						description: `**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
						footer: {
							text: "Answer quickly!!",
						},
					},
				],
			}),
		});
		console.log(await response.json());
	} catch (error) {
		console.error(error);
	}
}
