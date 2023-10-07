import { Resend } from "resend";
import { EmailTemplate } from "./email-template";
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function (name: string, email: string) {
	try {
		const data = await resend.emails.send({
			from: "Code for Cause Team <team@codeforcause.dev>",
			to: [email],
			subject: "Thank you for Signing up for Code for Cause 2023!",
			text: `Hey ${name},

Thank you for signing up for Code for Cause 2023!
Please join our discord for the latest updates on the event: discord.gg/SWKsWxXaSq\n\nWe've attached 3 important documents to this email regarding the event:
REQUIRED: Emergency Medical Authorization Form.pdf
This form is required to participate in the event. While it is unlikely that you will encounter an emergency during the event, we are required to keep this information just in case. We will never share this information with anyone outside of medical authorities and necessary staff at the event. Please reply to this email with a signed copy of this form by Saturday, November 11, to confirm your participation in Code for Cause 2023.
REQUIRED: Event Liability Release.pdf
This form is required to participate in the event. By signing this form, you are agreeing to not hold Code for Cause and our fiscal sponsor, Hack Club, liable for any damages or injury that could occur during the event. If you are under the age of 18, you will need a parent or guardian to sign off on this form. Please reply to this email with a signed copy of this form by Saturday, November 11, to confirm your participation in Code for Cause 2023.
Calendar Invite.ics
Opening this file will add a reminder to your default calendar app for our event on December 9, 2023. The invite includes starting and ending time, but please understand that these are tentative to change as we iron out the schedule of the day.
If you have any questions, feel free to reply to this email and we'll respond as quickly as we can.

Mithil Patil
Organizer @ Code for Cause`,
			attachments: [
				{
					filename: "Emergency Medical Authorization Form.pdf",
					path: "https://www.codeforcause.dev/registration-files/Emergency%20Medical%20Authorization%20Form.pdf",
				},
				{
					filename: "Event Liability Release.pdf",
					path: "https://www.codeforcause.dev/registration-files/Event%20Liability%20Release.pdf",
				},
				{
					filename: "Calendar Invite.ics",
					path: "https://www.codeforcause.dev/registration-files/Calendar%20Invite.ics",
				},
			],
			react: EmailTemplate({ name }),
		});

		console.log(data);
	} catch (error) {
		console.error(error);
	}
}
