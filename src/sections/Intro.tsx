import { useEffect } from "react"
import { TypingText } from "../components/typingText"
import { useAnimationList } from "../lib/AnimationList"
import { cn } from "../lib/utils"
import { Socials } from "../components/socials"
import { DragItIn } from "../components/dragItIn"

const Heading = () => {
	const { addSelfToAnimationList, onFinish, isAnimating, isFinished } =
		useAnimationList("intro header")

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	return (
		<h1 className="title text-5xl self-center md:text-6xl">
			<TypingText
				isFinished={isFinished()}
				text="WORK IN PROGRESS DANNY"
				onFinish={() => onFinish()}
				startTyping={isAnimating()}
			/>
		</h1>
	)
}

const IntroText = () => {
	const { addSelfToAnimationList, onFinish, isAnimating, isFinished } =
		useAnimationList("intro text")

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	return (
		<p className="body text-2xl">
			<TypingText
				isFinished={isFinished()}
				text="Always in motion, never finished"
				onFinish={() => onFinish()}
				startTyping={isAnimating()}
			/>
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
		<div
			className={cn(
				"w-full flex flex-col gap-5 md:gap-0 md:flex-row justify-between",
			)}
		>
			<div className="flex flex-col gap-5 md:gap-0 justify-between">
				<Heading />
				<IntroText />
				<Socials />
			</div>
			<Portrait />
		</div>
	)
}
