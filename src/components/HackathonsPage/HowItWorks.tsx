const HowItWorks = () => {
	return (
		<div className="space-y-4 px-20">
			<h2 className="text-4xl font-black">How It Works</h2>
			<div className="flex space-x-4">
				<div className="w-1/2">
					<h3 className="text-2xl">At the hackathon:</h3>
					<p>
						In addition to traditional tracks like education or healthcare,
						you'll have the option to participate in the Code for Cause track
						and build a project to help a specific nonprofit. You'll compute for
						fun prizes, same as you would with any other track.
					</p>
				</div>
				<div className="w-1/2">
					<h3 className="text-2xl">After the hackathon:</h3>
					<p>
						We'll get you in contact with the nonprofit so you can gain
						real-life project management experience. Also, you'll get the
						opportunity to earn volunteer service hours as Code for Cause is a
						501(c)(3) nonprofit.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
