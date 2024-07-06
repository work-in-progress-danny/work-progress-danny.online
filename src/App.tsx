import { InProgress } from "./sections/InProgress";
import { Intro } from "./sections/Intro";

const App = () => {
	return (
		<div className="p-2 sm:py-5 sm:pl-24 sm:pr-24 flex flex-col gap-10 items-center">
			<Intro />
			<InProgress />
			<p className="body">Change is the only constant</p>
		</div>
	);
};

export default App;
