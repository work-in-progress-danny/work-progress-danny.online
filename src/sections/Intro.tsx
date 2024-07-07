import { Socials } from "../components/socials"
import { TypingText } from "../components/typingText"

export const Intro = () => (
	<div className="flex flex-col w-full">
		<div className="flex flex-col gap-5 sm:gap-0 sm:flex-row w-full justify-between">
			<div className="flex flex-col gap-5 sm:gap-0 sm:justify-between">
				<h1 className="title text-4xl sm:text-6xl">
					<TypingText text="WORK IN PROGRESS DANNY" typingQueuePosition={0} />
				</h1>
				<p className="body">
					<TypingText
						text="Always in motion, never finished"
						typingQueuePosition={1}
					/>
				</p>
				<Socials />
			</div>
			<img src="/danny.png" alt="placeholder" className="sm:h-96 rounded" />
		</div>
	</div>
)
