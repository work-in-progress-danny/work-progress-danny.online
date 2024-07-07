import { Socials } from "../components/socials"

export const Intro = () => (
	<div className="flex flex-col w-full">
		<div className="flex flex-col gap-5 sm:gap-0 sm:flex-row w-full justify-between">
			<div className="flex flex-col gap-5 sm:gap-0 sm:justify-between">
				<h1 className="title text-4xl sm:text-6xl">WORK IN PROGRESS DANNY</h1>
				<p className="body">Always in motion, never finished</p>
				<Socials />
			</div>
			<img src="/danny.png" alt="placeholder" className="sm:h-96 rounded" />
		</div>
	</div>
)
