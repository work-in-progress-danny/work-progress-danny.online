import { createContext, useState } from "react"
import { InProgress } from "./sections/InProgress"
import { Intro } from "./sections/Intro"
import { TypingText } from "./components/typingText"

export const CurrentlyTypingIndexContext = createContext<{
	typingIndex: number
	incrementTypingIndex: () => void
	// @ts-ignore: the value is set in the App component
}>(null)

const App = () => {
	const [typingIndex, setTypingIndex] = useState(0)
	const incrementTypingIndex = () => setTypingIndex(typingIndex + 1)

	return (
		<CurrentlyTypingIndexContext.Provider
			value={{ typingIndex, incrementTypingIndex }}
		>
			<div className="p-2 sm:py-5 sm:pl-24 sm:pr-24 flex flex-col gap-24 items-center">
				<Intro />
				<InProgress />
				<p className="body">
					<TypingText
						text="Change is the only constant"
						typingQueuePosition={1}
					/>
				</p>
			</div>
		</CurrentlyTypingIndexContext.Provider>
	)
}

export default App
