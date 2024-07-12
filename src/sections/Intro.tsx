import { useEffect, useState } from "react"
import { DragItIn } from "../components/dragItIn"
import { GitHubIcon, SpotifyIcon, SubstackIcon, XIcon } from "../components/icons"
import { useAnimationList } from "../lib/AnimationList"
import { DynamicText, TypingText } from "../components/typingText"
import { cn } from "../lib/utils"

const Socials = () => {
	return (
		<div className="flex h-8 gap-8 md:h-10">
			<DragItIn id="Intro Socials github">
				<a
					// className={cn(visibleIcons > 0 ? "visible" : "hidden")}
					href="https://github.com/work-in-progress-danny/"
				>
					<GitHubIcon />
				</a>
			</DragItIn>

			<DragItIn id="Intro Socials X">
				<a
					// className={cn(visibleIcons > 1 ? "visible" : "hidden")}
					href="https://x.com/w_i_p_danny"
				>
					<XIcon />
				</a>
			</DragItIn>

			<DragItIn id="Intro Socials substack">
				<a
					// className={cn(visibleIcons > 2 ? "visible" : "hidden")}
					href="https://substack.com/w_i_p_danny"
				>
					<SubstackIcon />
				</a>
			</DragItIn>

			<DragItIn id="Intro Socials spotify">
				<a
					// className={cn(visibleIcons > 3 ? "visible" : "hidden")}
					href="https://spotify.com/w_i_p_danny"
				>
					<SpotifyIcon />
				</a>
			</DragItIn>
		</div>
	)
}

const Heading = () => {
	const { addSelfToAnimationList, onFinish, getIsAnimating, getIsFinished } =
		useAnimationList("intro header")
	const isAnimating = getIsAnimating()
	const isFinished = getIsFinished()

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	return (
		<h1 className="title text-5xl self-center md:text-6xl">
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
	const { addSelfToAnimationList, onFinish, getIsAnimating, getIsFinished } =
		useAnimationList("intro text")
	const [currentIntro, setCurrentIntro] = useState(0)
	const isFinished = getIsFinished()
	const isAnimating = getIsAnimating()

	const onIntroFinish = () => {
		if (!isFinished) {
			onFinish()
		}
		setCurrentIntro((prev) => (prev + 1 > intros.length - 1 ? 0 : prev + 1))
	}

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	return (
		<p className="body text-2xl">
			<DynamicText text={intros[currentIntro]} onFinish={onIntroFinish} startTyping={isAnimating} />
		</p>
	)
}

const Portrait = () => {
	return (
		<DragItIn id="intro Portrait">
			<img src="/danny.png" alt="placeholder" className="rounded-xl" />
		</DragItIn>
	)
}

export const Intro = () => {
	return (
		<div className={cn("w-full flex flex-col gap-5 md:gap-0 md:flex-row justify-between")}>
			<div className="flex flex-col gap-5 md:gap-0 justify-between">
				<Heading />
				<IntroText />
				<Socials />
			</div>
			<Portrait />
		</div>
	)
}
