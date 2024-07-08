import { createContext, useState } from "react"
import { InProgress } from "./sections/InProgress"
import { Intro } from "./sections/Intro"
import { Footer } from "./sections/Footer"

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
			<div className="p-1 flex flex-col gap-10 items-center md:gap-24 md:p-5">
				<Intro />
				<InProgress />
				<Footer />
			</div>
		</CurrentlyTypingIndexContext.Provider>
	)
}

export default App
