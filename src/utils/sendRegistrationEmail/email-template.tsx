import * as React from "react";

type EmailTemplateProps = {
	name: string;
};

export const EmailTemplate: React.FC<{ name: string }> = ({ name }) => {
	return (
		<div>
			Hey {name},
			<br />
			<br />
			Thank you for signing up for Code for Cause 2023!
			<br />
			Please join our discord for the latest updates on the event:
			<br />
			<a href="https://discord.gg/SWKsWxXaSq">discord.gg/SWKsWxXaSq</a>
			<br />
			<br />
			We've attached 3 important documents to this email regarding the event:
			<br />
			<ol>
				<li className="margin-bottom:20px">
					<div>
						<b>REQUIRED: Emergency Medical Authorization Form.pdf</b>
						<br />
						This form is required to participate in the event. While it is
						unlikely that you will encounter an emergency during the event, we
						are required to keep this information just in case. We will never
						share this information with anyone outside of medical authorities
						and necessary staff at the event.
						<b>
							Please reply to this email with a signed copy of this form as soon
							as possible, to confirm your participation in Code for Cause 2023.
						</b>
					</div>
				</li>
				<li className="margin-bottom:20px">
					<div>
						<b>REQUIRED: Event Liability Release.pdf</b>
						<br />
						This form is required to participate in the event. By signing this
						form, you are agreeing to not hold Code for Cause and
						our&nbsp;fiscal sponsor, Hack Club, liable for any damages or injury
						that could occur during the event. If you are under the age of 18,
						you will need a parent or guardian to sign off on this form.&nbsp;
						<b>
							Please reply to this email with a signed copy of this form as soon
							as possible to confirm your participation in Code for Cause 2023.
						</b>
					</div>
				</li>
				<li className="margin-bottom:20px">
					<b>Calendar Invite.ics</b>
					<br />
					Opening this file will add a reminder to your default calendar app for
					our event on December 9, 2023. The invite includes starting and ending
					time, but please understand that these are tentative to change as we
					iron out the schedule of the day.
				</li>
			</ol>
			If you have any questions, feel free to reply to this email and we'll
			respond as quickly as we can.
			<br />
			<br />
			Team @ Code for Cause
		</div>
	);
};
