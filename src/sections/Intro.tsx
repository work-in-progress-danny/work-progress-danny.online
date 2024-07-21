import { useState } from "react"
import { DragItIn } from "../components/dragItIn"
import { GitHubIcon, SpotifyIcon, SubstackIcon, XIcon } from "../components/icons"
import { useAnimationList } from "../lib/AnimationList"
import { DynamicText, TypingText } from "../components/typingText"
import { cn } from "../lib/utils"

const Socials = () => {
	return (
		<div className="flex h-8 gap-8 md:h-10">
			<DragItIn id="Intro Socials github">
				<a href="https://github.com/work-in-progress-danny/">
					<GitHubIcon />
				</a>
			</DragItIn>

			<DragItIn id="Intro Socials X">
				<a href="https://x.com/w_i_p_danny">
					<XIcon />
				</a>
			</DragItIn>

			<DragItIn id="Intro Socials substack">
				<a href="https://substack.com/w_i_p_danny">
					<SubstackIcon />
				</a>
			</DragItIn>

			<DragItIn id="Intro Socials spotify">
				<a href="https://spotify.com/w_i_p_danny">
					<SpotifyIcon />
				</a>
			</DragItIn>
		</div>
	)
}

const Heading = () => {
	const { onFinish, getIsAnimating, getIsFinished } = useAnimationList("Intro header")
	const isFinished = getIsFinished()
	const isAnimating = getIsAnimating() ?? !isFinished

	return (
		<h1 className="title text-5xl self-center md:self-start md:text-6xl">
			<TypingText
				isFinished={isFinished}
				text="WORK IN PROGRESS DANNY"
				onFinish={onFinish}
				startTyping={isAnimating}
			/>
		</h1>
	)
}

const intros = [
	"Always in motion, never ending",
	"What's next?",
	"Only a place in time",
	"Expect change, welcome it",
]

const IntroText = () => {
	const { onFinish, getIsAnimating, getIsFinished } = useAnimationList("Intro Text")
	const [currentIntro, setCurrentIntro] = useState(0)
	const isFinished = getIsFinished()
	const isAnimating = getIsAnimating()

	const onIntroFinish = () => {
		if (!isFinished) {
			onFinish()
		}
		setCurrentIntro((prev) => (prev + 1 > intros.length - 1 ? 0 : prev + 1))
	}

	return (
		<p className="body text-2xl">
			<DynamicText text={intros[currentIntro]} onFinish={onIntroFinish} startTyping={isAnimating} />
		</p>
	)
}

const Portrait = () => {
	return (
		<div className="md:w-1/2">
			<DragItIn id="Intro Portrait">
				<img src="/danny.png" alt="placeholder" className="rounded-xl" />
			</DragItIn>
		</div>
	)
}

export const Intro = () => (
	<div className={"w-full flex flex-col gap-5 md:gap-0 md:flex-row"}>
		<div className="flex flex-col gap-5 md:w-1/2">
			<Heading />
			<IntroText />
			<Socials />
		</div>
		<Portrait />
	</div>
)
