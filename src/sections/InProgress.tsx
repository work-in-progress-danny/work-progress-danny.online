import { useEffect } from "react"
import { Projects } from "../components/projects"
import { TypingText } from "../components/typingText"
import { useAnimationList } from "../lib/AnimationList"

const Title = () => {
	const { addSelfToAnimationList, onFinish, getIsAnimating, getIsFinished } =
		useAnimationList("in progress title")
	const isFinished = getIsFinished()
	const isAnimating = getIsAnimating()

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	return (
		<h2 className="title text-5xl pb-2 md:pb-5">
			<TypingText
				text="IN PROGRESS..."
				onFinish={onFinish}
				isFinished={isFinished}
				startTyping={isAnimating}
			/>
		</h2>
	)
}

export const InProgress = () => {
	return (
		<div className="w-full flex flex-col">
			<Title />
			<Projects />
		</div>
	)
}
