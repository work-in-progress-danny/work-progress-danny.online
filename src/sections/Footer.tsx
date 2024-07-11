import { useEffect } from "react"
import { TypingText } from "../components/typingText"
import { useAnimationList } from "../lib/AnimationList"

export const Footer = () => {
	const { addSelfToAnimationList, isFinished, isAnimating, onFinish } = useAnimationList("footer")

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	return (
		<p className="body">
			<TypingText
				isFinished={isFinished()}
				text={"Change is the only constant"}
				onFinish={() => onFinish()}
				startTyping={isAnimating()}
			/>
		</p>
	)
}
