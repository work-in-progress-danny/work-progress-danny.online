import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

const Cursor = ({ blink }: { blink?: boolean }) => (
	<span style={{ fontFamily: "default" }} className={cn(blink && "animate-blink", "font-normal")}>
		{" |"}
	</span>
)

/** TypingText component that types out the given text */
export const TypingText = ({
	text,
	startTyping,
	onFinish,
	isFinished,
}: {
	text: string
	startTyping: boolean
	onFinish: () => void
	isFinished: boolean
}) => {
	const [currentText, setCurrentText] = useState("")
	const [blink, setBlink] = useState(false)
	const [isTyping, setIsTyping] = useState(false)

	useEffect(() => {
		if (!startTyping) return
		setIsTyping(true)
		const interval = setInterval(() => {
			setCurrentText((prev) => prev + text[prev.length])
		}, 75)

		if (currentText.length === text.length) {
			clearInterval(interval)
			setBlink(true)
			setTimeout(() => {
				setIsTyping(false)
				onFinish()
			}, 2000)
		}

		return () => clearInterval(interval)
	}, [currentText, text, startTyping, onFinish])

	return (
		<span>
			{isFinished ? text : currentText}
			{isTyping && <Cursor blink={blink} />}
		</span>
	)
}
