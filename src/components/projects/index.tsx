import { Project } from "./project"
import type { ProjectType } from "./project"

const SampleImage = () => (
	<img
		src="https://via.placeholder.com/400x300"
		alt="placeholder"
		className="w-full rounded border border-black p-1"
	/>
)

const projects: ProjectType[] = [
	{
		title: "CaitlinGrantPhotography.com",
		description:
			"This is a website I built for Caitlin, she designed it and I manage everything technical. Hosting, DNS, etc..",
		createdAt: "Feb 25, 2023",
		lastUpdatedAt: "Apr 3, 2024",
		visualContent: <SampleImage />,
		links: [
			{
				href: "https://caitlingrantphotography.com",
				text: "GitHub",
				icon: "link",
			},
			{
				href: "https://github.com/work-in-progress-danny/caitlingrantphotography.com",
				text: "GitHub",
				icon: "github",
			},
		],
	},
	{
		title: "work-in-progress-danny.online",
		description:
			"This is my personal website, I built it from scratch using React, TailwindCSS, and Vite. It's gone through a few iterations and will continue to evolve as I do.",
		createdAt: "Feb 25, 2023",
		lastUpdatedAt: "Apr 3, 2024",
		visualContent: <SampleImage />,
		links: [
			{
				href: "https://caitlingrantphotography.com",
				text: "GitHub",
				icon: "link",
			},
			{
				href: "https://github.com/work-in-progress-danny/work-progress-danny.online",
				text: "GitHub",
				icon: "github",
			},
		],
	},
	{
		title: "Magic Corne",
		description: `This was a great little project and was my first “major” project with my Bambu Lab P1s printer.
      I used to use a honey bucket to keep all the things I like to use at my desk. Pliers, tweezers, scissors, screwdrivers, paperclips, pencils, pens. 
      The honey bucket was great but didn’t really scale all that well. I was too show to keep my calibers and pliers securely nestled and was too tall to get my hands on a paper clip. I designed it will hollow walls as a subconscious forced-sorting function, where only the items big enough to not fall out the sides are appropriate for that section additionally the height and relative diameter of each had the same effect for items too large for the smaller containers. The hollow walls also emulated a feature I enjoyed with the honey bucket. Transparency. Now with the hollow walls forcing items to go into their respective homes and allowing a quick scan for an item, I feel like it has achieved it’s goal and fulfilled it’s mission`,
		createdAt: "Feb 25, 2023",
		lastUpdatedAt: "Apr 3, 2024",
		visualContent: <SampleImage />,
		links: [
			{
				href: "", // TODO add link
				text: "Thing Bucket",
				icon: "bambulab",
			},
		],
	},
	{
		title: "Thing Bucket",
		description: `This was a great little project and was my first “major” project with my Bambu Lab P1s printer.
      I used to use a honey bucket to keep all the things I like to use at my desk. Pliers, tweezers, scissors, screwdrivers, paperclips, pencils, pens. 
      The honey bucket was great but didn’t really scale all that well. I was too show to keep my calibers and pliers securely nestled and was too tall to get my hands on a paper clip. I designed it will hollow walls as a subconscious forced-sorting function, where only the items big enough to not fall out the sides are appropriate for that section additionally the height and relative diameter of each had the same effect for items too large for the smaller containers. The hollow walls also emulated a feature I enjoyed with the honey bucket. Transparency. Now with the hollow walls forcing items to go into their respective homes and allowing a quick scan for an item, I feel like it has achieved it’s goal and fulfilled it’s mission`,
		createdAt: "Feb 25, 2023",
		lastUpdatedAt: "Apr 3, 2024",
		visualContent: <SampleImage />,
		links: [
			{
				href: "", // TODO add link
				text: "Thing Bucket",
				icon: "bambulab",
			},
		],
	},
	{
		title: "Essay",
		description:
			"this is a project in which I'm trying to build an app to help me write essays better",
		createdAt: "Feb 25, 2023",
		lastUpdatedAt: "Apr 3, 2024",
		visualContent: <SampleImage />,
		links: [
			{
				href: "", // TODO add link
				text: "Thing Bucket",
				icon: "link",
			},
			{
				href: "", // TODO add link
				text: "Thing Bucket",
				icon: "github",
			},
		],
	},
]

export const Projects = () => (
	<div className="flex flex-col gap-5 md:gap-56">
		{projects.map((project) => (
			<Project key={project.title} {...project} />
		))}
	</div>
)
