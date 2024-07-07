import { Projects } from "../components/projects"
import { TypingText } from "../components/typingText"

export const InProgress = () => {
	return (
		<div className="w-full">
			<h2 className="title text-4xl sm:text-6xl pb-5">
				<TypingText text="WORK IN PROGRESS..." typingQueuePosition={2} />
			</h2>
			<Projects />
		</div>
	)
}
