import { MainLogoIcon } from "./Icons";

const Footer = () => {
	return (
		<div className="relative bg-primary">
			<svg
				className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-primary"
				preserveAspectRatio="none"
				viewBox="0 0 1440 54"
			>
				<path
					fill="currentColor"
					d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
				/>
			</svg>
			<div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
					<div className="md:max-w-md lg:col-span-2">
						<a
							href="/"
							aria-label="Go home"
							title="Company"
							className="inline-flex items-center"
						>
							<MainLogoIcon className="w-40" />
						</a>
						<div className="mt-4 lg:max-w-sm">
							<p className="text-sm text-gray-900">
								A FOSS alternative to Bloomberg Terminal.
							</p>
							<p className="mt-4 text-sm text-gray-900">
								Eaque ipsa quae ab illo inventore veritatis et quasi architecto
								beatae vitae dicta sunt explicabo.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
						<div>
							<p className="font-semibold tracking-wide text-teal-accent-400">
								Category
							</p>
							<ul className="mt-2 space-y-2">
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										News
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										World
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										Games
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										References
									</a>
								</li>
							</ul>
						</div>
						<div>
							<p className="font-semibold tracking-wide text-teal-accent-400">
								Cherry
							</p>
							<ul className="mt-2 space-y-2">
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										Web
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										eCommerce
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										Business
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										Entertainment
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										Portfolio
									</a>
								</li>
							</ul>
						</div>
						<div>
							<p className="font-semibold tracking-wide text-teal-accent-400">
								Apples
							</p>
							<ul className="mt-2 space-y-2">
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										Media
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										Brochure
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										Nonprofit
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										Educational
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										Projects
									</a>
								</li>
							</ul>
						</div>
						<div>
							<p className="font-semibold tracking-wide text-teal-accent-400">
								Socials
							</p>
							<ul className="mt-2 space-y-2">
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
											<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
										</svg>
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										<svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
											<circle cx="15" cy="15" r="4" />
											<path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
										</svg>
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-colors duration-300 text-gray-900 hover:text-black"
									>
										<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
											<path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between items-center pt-5 pb-10 border-t border-black sm:flex-row gap-y-4">
					<p className="text-sm">
						© Copyright 2021 Lorem Inc. All rights reserved.
					</p>
					<svg
						width={212}
						height={44}
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width={212} height={44} rx={8} fill="#000" />
						<path
							d="M60.438 15.227V26.5h1.406v-4.023h2.836c2.117 0 3.625-1.493 3.625-3.602 0-2.148-1.477-3.648-3.61-3.648h-4.257zm1.406 1.25h2.484c1.633 0 2.531.851 2.531 2.398 0 1.492-.93 2.352-2.53 2.352h-2.485v-4.75zm11.5 10.171c2.399 0 3.883-1.656 3.883-4.359 0-2.71-1.484-4.36-3.883-4.36-2.398 0-3.883 1.65-3.883 4.36 0 2.703 1.485 4.36 3.883 4.36zm0-1.21c-1.594 0-2.492-1.157-2.492-3.149 0-2 .898-3.148 2.492-3.148 1.594 0 2.492 1.148 2.492 3.148 0 1.992-.898 3.148-2.492 3.148zm15.954-7.36h-1.352l-1.656 6.735h-.125l-1.883-6.735h-1.29l-1.882 6.735h-.125l-1.656-6.735h-1.36l2.36 8.422h1.36l1.874-6.516h.125l1.883 6.516h1.367l2.36-8.422zm4.523 1.04c1.336 0 2.227.984 2.258 2.476h-4.64c.101-1.492 1.039-2.477 2.382-2.477zm2.219 5.202c-.352.742-1.086 1.14-2.172 1.14-1.43 0-2.36-1.054-2.43-2.718v-.062h6.055v-.516c0-2.617-1.383-4.234-3.656-4.234-2.313 0-3.797 1.718-3.797 4.367 0 2.664 1.46 4.351 3.797 4.351 1.844 0 3.156-.89 3.547-2.328H96.04zm3.242 2.18h1.344v-5.219c0-1.187.93-2.047 2.211-2.047.266 0 .75.047.86.078V17.97a5.77 5.77 0 00-.672-.04c-1.117 0-2.086.579-2.336 1.4h-.125v-1.25h-1.281v8.42zm8.899-7.383c1.336 0 2.227.985 2.258 2.477h-4.641c.102-1.492 1.04-2.477 2.383-2.477zm2.219 5.203c-.352.742-1.086 1.14-2.172 1.14-1.43 0-2.359-1.054-2.43-2.718v-.062h6.055v-.516c0-2.617-1.383-4.234-3.656-4.234-2.313 0-3.797 1.718-3.797 4.367 0 2.664 1.461 4.351 3.797 4.351 1.844 0 3.156-.89 3.547-2.328H110.4zm6.36 2.328c1.164 0 2.164-.554 2.695-1.492h.125V26.5h1.281V14.734h-1.343v4.672h-.118c-.476-.922-1.468-1.476-2.64-1.476-2.141 0-3.539 1.718-3.539 4.36 0 2.648 1.382 4.358 3.539 4.358zm.312-7.507c1.524 0 2.477 1.218 2.477 3.148 0 1.945-.946 3.148-2.477 3.148-1.539 0-2.461-1.18-2.461-3.148 0-1.96.93-3.148 2.461-3.148zm14.462 7.507c2.133 0 3.531-1.726 3.531-4.359 0-2.648-1.391-4.36-3.531-4.36-1.156 0-2.18.571-2.641 1.477h-.125v-4.672h-1.344V26.5h1.282v-1.344h.125c.531.938 1.531 1.492 2.703 1.492zm-.313-7.507c1.539 0 2.453 1.18 2.453 3.148 0 1.969-.914 3.148-2.453 3.148-1.531 0-2.484-1.203-2.484-3.148s.953-3.148 2.484-3.148zm6.04 10.406c1.492 0 2.164-.578 2.882-2.531l3.29-8.938h-1.43l-2.305 6.93h-.125l-2.312-6.93h-1.453l3.117 8.43-.157.5c-.351 1.015-.773 1.383-1.546 1.383-.188 0-.399-.008-.563-.04V29.5c.188.031.422.047.602.047zm17.391-3.047l3.898-11.273h-2.148l-2.813 8.921h-.132l-2.836-8.921h-2.227l3.938 11.273h2.32zm8.016-7.18c1.164 0 1.93.813 1.969 2.078h-4.024c.086-1.25.899-2.078 2.055-2.078zm1.984 4.828c-.281.633-.945.985-1.906.985-1.273 0-2.094-.89-2.141-2.313v-.101h5.969v-.625c0-2.696-1.461-4.313-3.898-4.313-2.477 0-4.016 1.727-4.016 4.477s1.516 4.414 4.031 4.414c2.016 0 3.446-.969 3.797-2.524h-1.836zm3.547 2.352h1.938v-4.938c0-1.195.875-1.976 2.133-1.976.328 0 .843.055.992.11v-1.798c-.18-.054-.524-.085-.805-.085-1.101 0-2.023.625-2.258 1.468h-.132v-1.328h-1.868V26.5zm13.501-5.672c-.203-1.797-1.532-3.047-3.727-3.047-2.57 0-4.078 1.649-4.078 4.422 0 2.813 1.516 4.469 4.086 4.469 2.164 0 3.508-1.203 3.719-2.992h-1.844c-.203.89-.875 1.367-1.883 1.367-1.32 0-2.117-1.047-2.117-2.844 0-1.773.789-2.797 2.117-2.797 1.063 0 1.703.594 1.883 1.422h1.844zm5.117-1.508c1.164 0 1.93.813 1.969 2.078h-4.024c.086-1.25.899-2.078 2.055-2.078zm1.985 4.828c-.282.633-.946.985-1.907.985-1.273 0-2.093-.89-2.14-2.313v-.101h5.968v-.625c0-2.696-1.461-4.313-3.898-4.313-2.477 0-4.016 1.727-4.016 4.477s1.516 4.414 4.032 4.414c2.015 0 3.445-.969 3.796-2.524h-1.835zm3.625 2.352h1.937V14.648h-1.937V26.5zM23.325 13l9.325 16H14l9.325-16z"
							fill="#fff"
						/>
						<path stroke="#5E5E5E" d="M43.5 0v44" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Footer