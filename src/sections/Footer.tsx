import { TypingText } from "../components/typingText"
import { useAnimationList } from "../lib/AnimationList"

export const Footer = () => {
	const { getIsFinished, getIsAnimating, onFinish } = useAnimationList("Footer")
	const isFinished = getIsFinished()
	const isAnimating = getIsAnimating()

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
