import { Socials } from "../components/socials"
import { TypingText } from "../components/typingText"

const Heading = () => {
	return (
		<h1 className="title text-5xl self-center md:text-6xl">
			<TypingText text="WORK IN PROGRESS DANNY" typingQueuePosition={0} />
		</h1>
	)
}

const Portrait = () => {
	return (
		<img
			src="/danny.png"
			alt="placeholder"
			className="rounded-xl max-w-[640px]"
		/>
	)
}

const IntroText = () => {
	return (
		<p className="body text-2xl">
			<TypingText
				text="Always in motion, never finished"
				typingQueuePosition={1}
			/>
		</p>
	)
}
export const Intro = () => {
	return (
		<div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row justify-between">
			<div className="flex flex-col gap-5 md:gap-0 justify-between">
				<Heading />
				<IntroText />
				<Socials />
			</div>
			<Portrait />
		</div>
	)
}
