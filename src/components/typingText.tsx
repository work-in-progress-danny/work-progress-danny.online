import { useContext, useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { CurrentlyTypingIndexContext } from "../App"

const Cursor = ({ blink }: { blink?: boolean }) => (
	<span
		style={{ fontFamily: "default" }}
		className={cn(blink && "animate-blink", "font-normal")}
	>
		{" |"}
	</span>
)

/** TypingText component that types out the given text */
export const TypingText = ({
	text,
	typingQueuePosition,
	onFinished,
}: { text: string; typingQueuePosition: number; onFinished?: () => void }) => {
	const [currentText, setCurrentText] = useState("")
	const [blink, setBlink] = useState(false)
	const { typingIndex, incrementTypingIndex } = useContext(
		CurrentlyTypingIndexContext,
	)
	const isTyping = typingQueuePosition === typingIndex

	useEffect(() => {
		if (typingQueuePosition !== typingIndex) return
		const interval = setInterval(() => {
			setCurrentText((prev) => prev + text[prev.length])
		}, 75)

		if (currentText.length === text.length) {
			clearInterval(interval)
			setBlink(true)
			setTimeout(() => {
				incrementTypingIndex()
				onFinished?.()
			}, 2000)
		}

		return () => clearInterval(interval)
	}, [
		currentText,
		text,
		typingIndex,
		typingQueuePosition,
		incrementTypingIndex,
		onFinished,
	])

	return (
		<span>
			{text}
			{isTyping && <Cursor blink={blink} />}
		</span>
	)
}
