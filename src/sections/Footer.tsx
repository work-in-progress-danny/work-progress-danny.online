import { useEffect } from "react"
import { TypingText } from "../components/typingText"
import { useAnimationList } from "../lib/AnimationList"

export const Footer = () => {
	const { addSelfToAnimationList, getIsFinished, getIsAnimating, onFinish } =
		useAnimationList("footer")
	const isFinished = getIsFinished()
	const isAnimating = getIsAnimating()

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	return (
		<p className="body">
			<TypingText
				isFinished={isFinished}
				text={"Change is the only constant"}
				onFinish={() => onFinish()}
				startTyping={isAnimating}
			/>
		</p>
	)
}
