import { AnimationListProvider } from "./lib/AnimationList"
import { Footer } from "./sections/Footer"
import { InProgress } from "./sections/InProgress"
import { Intro } from "./sections/Intro"

const App = () => {
	return (
		<AnimationListProvider>
			<div className="w-full flex justify-center">
				<div className="p-1 flex flex-col gap-10 items-center md:gap-24 md:p-5 w-full max-w-[1920px]">
					<Intro />
					<InProgress />
					<Footer />
				</div>
			</div>
		</AnimationListProvider>
	)
}

export default App
