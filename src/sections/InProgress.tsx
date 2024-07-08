import { TypingText } from "../components/typingText"
import { Projects } from "../components/projects"

const Title = () => {
	return (
		<h2 className="title text-4xl pb-2 md:text-5xl md:pb-5">
			<TypingText text="IN PROGRESS..." typingQueuePosition={2} />
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
