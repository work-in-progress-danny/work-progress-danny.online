import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

const Cursor = ({ blink, withSpace }: { blink?: boolean; withSpace?: boolean }) => (
	<span style={{ fontFamily: "default" }} className={cn(blink && "animate-blink", "font-normal")}>
		{withSpace ? " |" : "|"}
	</span>
)

const typingSpeed = 60
const backspaceSpeed = 60

type TypingTextProps = {
	text: string
	startTyping: boolean
	onFinish: () => void
	isFinished: boolean
}

/** TypingText component that types out the given text */
export const TypingText = ({ text, startTyping, onFinish, isFinished }: TypingTextProps) => {
	const [currentText, setCurrentText] = useState("")
	const [blink, setBlink] = useState(false)
	const [isTyping, setIsTyping] = useState(false)

	useEffect(() => {
		if (!startTyping) return
		setIsTyping(true)

		// every 0.075 seconds type another character
		const interval = setInterval(() => {
			setCurrentText((prev) => prev + text[prev.length])
		}, typingSpeed)

		// Finished typing, let the cursor blink for 2 seconds
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
			{isTyping && <Cursor withSpace blink={blink} />}
		</span>
	)
}

type BackspacingTextProps = {
	text: string
	startBackspacing: boolean
	onFinish: () => void
	isFinished: boolean
}

/** BackspacingText component that backspaces out the given text */
export const BackspacingText = ({
	text,
	startBackspacing,
	onFinish,
	isFinished,
}: BackspacingTextProps) => {
	const [currentText, setCurrentText] = useState(text)
	const [blink, setBlink] = useState(true)
	const [isBackspacing, setIsBackspacing] = useState(false)

	useEffect(() => {
		if (!startBackspacing) return

		setTimeout(() => {
			setIsBackspacing(true)
		}, 1000)

		if (!isBackspacing) return

		// every 0.075 seconds type another character
		const interval = setInterval(() => {
			setCurrentText((prev) => prev.slice(0, prev.length - 1))
		}, backspaceSpeed)

		// Finished typing, let the cursor blink for 2 seconds
		if (currentText.length === 0) {
			clearInterval(interval)
			setBlink(true)
			setTimeout(() => {
				setIsBackspacing(false)
				onFinish()
			}, 1000)
		}

		return () => clearInterval(interval)
	}, [currentText, startBackspacing, isBackspacing, onFinish])

	return (
		<span>
			{isFinished ? "" : currentText}
			{startBackspacing && <Cursor blink={blink} />}
		</span>
	)
}

type DynamicTextProps = Omit<TypingTextProps, "isFinished">

export const DynamicText = ({ text, onFinish, startTyping }: DynamicTextProps) => {
	const [currentText, setCurrentText] = useState(text)
	const [isChanging, setIsChanging] = useState(false)
	const [startBackspacing, setStartBackspacing] = useState(false)

	useEffect(() => {
		if (startTyping) {
			setIsChanging(true)
		}

		if (currentText !== text) {
			setIsChanging(true)
			setStartBackspacing(true)
		}
	}, [text, currentText, startTyping])

	if (startBackspacing) {
		return (
			<BackspacingText
				text={currentText}
				onFinish={() => {
					setCurrentText(text)
					setStartBackspacing(false)
				}}
				startBackspacing={true}
				isFinished={false}
			/>
		)
	}

	return (
		<TypingText
			text={currentText}
			startTyping={isChanging}
			onFinish={() => {
				setIsChanging(false)
				onFinish()
			}}
			isFinished={false}
		/>
	)
}
