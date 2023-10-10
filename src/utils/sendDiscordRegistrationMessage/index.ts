export default async function (name: string, email: string) {
	try {
		const response = await fetch(
			`${process.env.DISCORD_REGISTRATION_WEBHOOK}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: "Registration Bot",
					content: "",
					embeds: [
						{
							title: "New Registration!",
							url: `https://admin.codeforcause.dev/${email}`,
							description: `**Name:** ${name}\n**Email:** ${email}`,
							footer: {
								text: "Good job team!",
							},
						},
					],
				}),
			}
		);
		console.log(await response.json());
	} catch (error) {
		console.error(error);
	}
}
