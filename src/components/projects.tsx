import { SlideshowIndicator } from "./slideshowIndicator";

type Project = {
	title: string;
	description: string;
	recordingSrc: string;
	createdAt: string;
	lastUpdatedAt: string;
};

const projects: Project[] = [
	{
		title: "CaitlinGrantPhotography.com",
		description:
			"This is a website I built for Caitlin, she designed it and I manage everything technical. Hosting, DNS, etc..",
		createdAt: "Feb 25, 2023",
		lastUpdatedAt: "Apr 3, 2024",
		recordingSrc: "https://www.youtube.com/embed/1",
	},
];

const Project = ({ title, description, createdAt, lastUpdatedAt }: Project) => {
	return (
		<div className="w-full flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between">
			<div className="flex flex-col gap-5 sm:gap-0 sm:justify-between">
				<a href={`https://${title}`}>
					<h3 className="title text-2xl underline">{title}</h3>
				</a>
				<p className="body sm:w-1/2">{description}</p>
				<div>
					<p className="body">Created: {createdAt}</p>
					<p className="body">Last Updated: {lastUpdatedAt}</p>
				</div>
			</div>
			<img
				src="https://via.placeholder.com/400x300"
				alt="placeholder"
				className="sm:w-2/3 rounded border border-black p-1"
			/>
		</div>
	);
};

export const Projects = () => {
	return (
		<div className="w-full gap-7 flex flex-col items-center">
			{projects.map((project) => {
				return <Project key={project.title} {...project} />;
			})}
			<div className="flex w-full px-2 sm:px-0 sm:w-2/3 justify-between">
				<button
					type="button"
					className="underline text-2xl sm:text-3xl font-body"
				>
					prev
				</button>
				<SlideshowIndicator currentSlide={1} slidesCount={3} />
				<button
					type="button"
					className="underline text-2xl sm:text-3xl font-body"
				>
					next
				</button>
			</div>
		</div>
	);
};
