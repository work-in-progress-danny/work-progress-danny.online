import { AnimationListProvider } from "./lib/AnimationList"
import { Footer } from "./sections/Footer"
import { InProgress } from "./sections/InProgress"
import { Intro } from "./sections/Intro"

const App = () => {
	return (
		<AnimationListProvider>
			<div className="w-full flex justify-center">
				<div className="flex flex-col gap-5 p-1 items-center max-w-[1920px] md:gap-15 md:p-5 w-full ">
					<Intro />
					<InProgress />
					<Footer />
				</div>
			</div>
		</AnimationListProvider>
	)
}

export default App
