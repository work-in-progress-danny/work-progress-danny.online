import { TypingText } from "../components/typingText"
import { Projects } from "../components/projects"
import { useAnimationList } from "../lib/AnimationList"
import { useEffect } from "react"

const Title = () => {
	const { addSelfToAnimationList, onFinish, isAnimating, isFinished } =
		useAnimationList("in progress title")

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	return (
		<h2 className="title text-5xl pb-2 md:pb-5">
			<TypingText
				text="IN PROGRESS..."
				onFinish={onFinish}
				isFinished={isFinished()}
				startTyping={isAnimating()}
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
