import { TypingText } from "../components/typingText"
import { Projects } from "../components/projects"

const Title = () => {
	return (
		<h2 className="title text-5xl pb-2 md:pb-5">
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
