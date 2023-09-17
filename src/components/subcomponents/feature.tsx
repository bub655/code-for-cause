"use client";
function SVGIcon(logo: any) {
	logo = logo.logo;
	if (logo == 1) {
		return (
			<svg
				width="49"
				height="49"
				viewBox="0 0 49 49"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M24.5 0.608398C11.246 0.608398 0.5 11.3544 0.5 24.6084C0.5 37.8624 11.246 48.6084 24.5 48.6084C37.754 48.6084 48.5 37.8624 48.5 24.6084C48.5 11.3544 37.754 0.608398 24.5 0.608398ZM26.5 34.5024V36.6084H24.5V34.6124C22.43 34.5764 20.288 34.0824 18.5 33.1584L19.41 29.8704C21.322 30.6124 23.868 31.4004 25.86 30.9504C28.158 30.4304 28.628 28.0664 26.088 26.9284C24.226 26.0604 18.532 25.3184 18.532 20.4424C18.532 17.7164 20.61 15.2764 24.5 14.7424V12.6084H26.5V14.6444C27.948 14.6824 29.572 14.9344 31.384 15.4844L30.66 18.7784C29.124 18.2384 27.426 17.7484 25.774 17.8484C22.796 18.0224 22.534 20.6004 24.612 21.6804C28.036 23.2904 32.5 24.4844 32.5 28.7744C32.504 32.2104 29.814 34.0384 26.5 34.5024Z"
					fill="#896FBC"
				/>
			</svg>
		);
	} else if (logo == 2) {
		return (
			<svg
				width="49"
				height="49"
				viewBox="0 0 49 49"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M38.5 48.6084H10.5V16.6084L6.5 18.7764L0.5 11.5524L12.5 0.608398H36.5L48.5 11.6184L42.5 18.9124L38.5 16.6084V48.6084ZM16.5 2.6084H32.5C31.77 6.3004 28.916 9.6084 24.5 9.6084C20.084 9.6084 17.23 6.1924 16.5 2.6084Z"
					fill="#896FBC"
				/>
			</svg>
		);
	} else if (logo == 3) {
		return (
			<svg
				width="49"
				height="49"
				viewBox="0 0 49 49"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_40_89)">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M46.5 38.4209L46.54 38.6129C47.298 42.4489 45.412 46.4009 40.5 46.4209C31.278 46.4589 17.722 46.4209 8.5 46.4209C3.516 46.4209 1.804 42.4689 2.5 38.4209H46.5ZM44.5 36.4209H4.5C2.292 36.4209 0.5 34.6289 0.5 32.4209C0.5 30.2129 2.292 28.4209 4.5 28.4209H13.462C18.202 28.4549 19.166 32.4329 21.5 32.4209C23.834 32.4089 25.062 28.4689 29.43 28.4209H44.5C46.708 28.4209 48.5 30.2129 48.5 32.4209C48.5 34.6289 46.708 36.4209 44.5 36.4209ZM36.544 26.9189C35.19 26.9189 33.958 26.3029 32.87 25.7609C30.63 24.6469 30.446 24.6449 28.204 25.7609C27.118 26.3029 25.886 26.9189 24.53 26.9189C23.172 26.9189 21.942 26.3029 20.854 25.7609C18.62 24.6469 18.426 24.6449 16.19 25.7609C15.102 26.3029 13.872 26.9189 12.514 26.9189C11.16 26.9189 9.926 26.3029 8.84 25.7609C6.836 24.7629 5.896 24.2489 2.936 26.5909C2.65 26.8189 2.328 26.9209 2.012 26.9209C1.232 26.9209 0.5 26.2969 0.5 25.4189C0.5 24.9809 0.692 24.5449 1.064 24.2509C5.224 20.9289 7.542 21.7629 10.182 23.0809C11.05 23.5129 11.868 23.9209 12.514 23.9209C13.162 23.9209 13.982 23.5129 14.846 23.0809C17.932 21.5429 19.086 21.5289 22.198 23.0809C23.064 23.5129 23.884 23.9209 24.53 23.9209C25.176 23.9209 25.996 23.5129 26.862 23.0809C29.948 21.5429 31.1 21.5289 34.212 23.0809C35.082 23.5129 35.898 23.9209 36.544 23.9209C37.192 23.9209 38.008 23.5129 38.878 23.0809C41.48 21.7829 43.826 20.9009 47.95 24.2609C48.312 24.5569 48.5 24.9869 48.5 25.4189C48.5 26.2429 47.834 26.9169 46.998 26.9169C46.666 26.9169 46.33 26.8069 46.048 26.5809C43.174 24.2449 42.222 24.7629 40.22 25.7609C39.132 26.3029 37.9 26.9189 36.544 26.9189ZM46.5 20.4209H2.5C2.5 10.4869 11.254 2.4209 24.5 2.4209C37.746 2.4209 46.5 10.4869 46.5 20.4209ZM15.5 10.4209C16.052 10.4209 16.5 10.8689 16.5 11.4209C16.5 11.9729 16.052 12.4209 15.5 12.4209C14.948 12.4209 14.5 11.9729 14.5 11.4209C14.5 10.8689 14.948 10.4209 15.5 10.4209ZM23.5 10.4209C24.052 10.4209 24.5 10.8689 24.5 11.4209C24.5 11.9729 24.052 12.4209 23.5 12.4209C22.948 12.4209 22.5 11.9729 22.5 11.4209C22.5 10.8689 22.948 10.4209 23.5 10.4209ZM31.5 10.4209C32.052 10.4209 32.5 10.8689 32.5 11.4209C32.5 11.9729 32.052 12.4209 31.5 12.4209C30.948 12.4209 30.5 11.9729 30.5 11.4209C30.5 10.8689 30.948 10.4209 31.5 10.4209ZM39.5 10.4209C40.052 10.4209 40.5 10.8689 40.5 11.4209C40.5 11.9729 40.052 12.4209 39.5 12.4209C38.948 12.4209 38.5 11.9729 38.5 11.4209C38.5 10.8689 38.948 10.4209 39.5 10.4209ZM17.5 6.4209C18.052 6.4209 18.5 6.8689 18.5 7.4209C18.5 7.9729 18.052 8.4209 17.5 8.4209C16.948 8.4209 16.5 7.9729 16.5 7.4209C16.5 6.8689 16.948 6.4209 17.5 6.4209ZM11.5 8.4209C12.052 8.4209 12.5 8.8689 12.5 9.4209C12.5 9.9729 12.052 10.4209 11.5 10.4209C10.948 10.4209 10.5 9.9729 10.5 9.4209C10.5 8.8689 10.948 8.4209 11.5 8.4209ZM29.5 6.4209C30.052 6.4209 30.5 6.8689 30.5 7.4209C30.5 7.9729 30.052 8.4209 29.5 8.4209C28.948 8.4209 28.5 7.9729 28.5 7.4209C28.5 6.8689 28.948 6.4209 29.5 6.4209ZM35.5 6.4209C36.052 6.4209 36.5 6.8689 36.5 7.4209C36.5 7.9729 36.052 8.4209 35.5 8.4209C34.948 8.4209 34.5 7.9729 34.5 7.4209C34.5 6.8689 34.948 6.4209 35.5 6.4209ZM23.5 4.4209C24.052 4.4209 24.5 4.8689 24.5 5.4209C24.5 5.9729 24.052 6.4209 23.5 6.4209C22.948 6.4209 22.5 5.9729 22.5 5.4209C22.5 4.8689 22.948 4.4209 23.5 4.4209Z"
						fill="#896FBC"
					/>
				</g>
				<defs>
					<clipPath id="clip0_40_89">
						<rect
							width="48"
							height="48"
							fill="white"
							transform="translate(0.5 0.420898)"
						/>
					</clipPath>
				</defs>
			</svg>
		);
	} else if (logo == 4) {
		return (
			<svg
				width="49"
				height="49"
				viewBox="0 0 49 49"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_56_7)">
					<path
						d="M40.5 26.3584V36.4944C40.5 42.0024 28.922 44.6084 22.5 44.6084C16.396 44.6084 4.5 41.8244 4.5 36.4944V23.9064L22.5 33.6324L40.5 26.3584ZM24.334 4.6084L-1.5 16.1084L22.5 29.1084L44.5 20.2744V34.6084H48.5V18.1084L24.334 4.6084ZM50.5 44.6084H42.5C43.656 42.6084 44.5 39.6084 44.5 36.6084H48.5C48.5 39.6404 49.282 42.3264 50.5 44.6084Z"
						fill="#896FBC"
					/>
				</g>
				<defs>
					<clipPath id="clip0_56_7">
						<rect
							width="48"
							height="48"
							fill="white"
							transform="translate(0.5 0.108398)"
						/>
					</clipPath>
				</defs>
			</svg>
		);
	}
}

type featureProps = {
	title: string;
	text: string;
	logo: number;
};

export const Feature = (props: featureProps) => {
	return (
		<div className="w-96 bg-[#D9D9D9] rounded-[16px] p-8 text-black font-bold space-y-2">
			<div className="ml-auto mr-auto w-fit">
				<SVGIcon logo={props.logo} />
			</div>
			<div className="ml-auto mr-auto w-fit text-3xl">{props.title}</div>
			<div className="ml-auto mr-auto w-fit text-center">{props.text}</div>
		</div>
	);
};