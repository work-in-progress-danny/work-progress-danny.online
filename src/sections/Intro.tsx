import { useEffect } from "react"
import { TypingText } from "../components/typingText"
import { useAnimationList } from "../lib/AnimationQueue"
import { cn } from "../lib/utils"
import { Socials } from "../components/socials"

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

const Portrait = () => {
	const { addSelfToAnimationList, onFinish, isAnimating, isFinished } =
		useAnimationList("intro portrait")

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	useEffect(() => {
		if (!isAnimating()) return
		setTimeout(() => {
			console.log("hello")
			onFinish()
		}, 500)
	})

	return (
		<img
			src="/danny.png"
			alt="placeholder"
			className={cn(
				isFinished() ? "visible" : "hidden",
				"rounded-xl max-w-[640px]",
			)}
		/>
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
