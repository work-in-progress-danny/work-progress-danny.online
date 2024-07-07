import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"
import { SlideshowIndicator } from "./slideshowIndicator"

import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel"

type Project = {
	title: string
	description: string
	recordingSrc: string
	createdAt: string
	lastUpdatedAt: string
}

const projects: Project[] = [
	{
		title: "CaitlinGrantPhotography.com",
		description:
			"This is a website I built for Caitlin, she designed it and I manage everything technical. Hosting, DNS, etc..",
		createdAt: "Feb 25, 2023",
		lastUpdatedAt: "Apr 3, 2024",
		recordingSrc: "https://www.youtube.com/embed/1",
	},
	{
		title: "DannyThomas.dev",
		description:
			"This is a website I built for Caitlin, she designed it and I manage everything technical. Hosting, DNS, etc..",
		createdAt: "Feb 25, 2023",
		lastUpdatedAt: "Apr 3, 2024",
		recordingSrc: "https://www.youtube.com/embed/1",
	},
]

const Project = ({ title, description, createdAt, lastUpdatedAt }: Project) => {
	return (
		<CarouselItem className="w-full flex flex-col gap-5 px-1 sm:px-5 sm:gap-0 sm:flex-row justify-between">
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
		</CarouselItem>
	)
}

export const Projects = () => {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	return (
		<Carousel
			className="w-full"
			setApi={setApi}
			plugins={[
				Autoplay({
					delay: 10000,
				}),
			]}
		>
			<CarouselContent>
				{projects.map((project) => (
					<Project key={project.title} {...project} />
				))}
			</CarouselContent>

			<div className="flex w-full pt-5 px-2 sm:px-0 justify-center">
				<div className="flex w-2/3 justify-between">
					<CarouselPrevious />
					<SlideshowIndicator currentSlide={current} slidesCount={count} />
					<CarouselNext />
				</div>
			</div>
		</Carousel>
	)
}
