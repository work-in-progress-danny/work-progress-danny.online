import { TypingText } from "../components/typingText"
import { Projects } from "../components/projects"

export const InProgress = () => {
	return (
		<div className="w-full">
			<h2 className="title text-4xl sm:text-5xl pb-5">
				<TypingText text="IN PROGRESS..." typingQueuePosition={2} />
			</h2>
			<Projects />
		</div>
	)
}
