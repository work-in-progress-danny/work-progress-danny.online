import { useEffect, useState, type ReactNode } from "react"
import { TypingText } from "../typingText"
import {
	BambuLabIcon,
	GitHubIcon,
	LinkIcon,
	SpotifyIcon,
	SubstackIcon,
} from "../icons"
import { useAnimationList } from "../../lib/AnimationList"
import { cn } from "../../lib/utils"

export type ProjectLink = {
	href: string
	text: string
	icon: "github" | "bambulab" | "link" | "substack" | "spotify"
}

export type ProjectType = {
	title: string
	description: string
	createdAt: string
	lastUpdatedAt: string
	links: ProjectLink[]
	visualContent: ReactNode
}

const Dates = ({
	createdAt,
	lastUpdatedAt,
}: { createdAt: string; lastUpdatedAt: string }) => {
	const createdAtHandlers = useAnimationList(`project title ${createdAt}`)
	const lastUpdatedAtHandler = useAnimationList(
		`project title ${lastUpdatedAt}`,
	)

	useEffect(() => {
		createdAtHandlers.addSelfToAnimationList()
		lastUpdatedAtHandler.addSelfToAnimationList()
	}, [lastUpdatedAtHandler, createdAtHandlers])

	return (
		<div>
			<p className="body">
				<TypingText
					isFinished={createdAtHandlers.isFinished()}
					text={`Created: ${createdAt}`}
					onFinish={() => createdAtHandlers.onFinish()}
					startTyping={createdAtHandlers.isAnimating()}
				/>
			</p>

			<p className="body">
				<TypingText
					isFinished={lastUpdatedAtHandler.isFinished()}
					text={`Last Updated: ${lastUpdatedAt}`}
					onFinish={() => lastUpdatedAtHandler.onFinish()}
					startTyping={lastUpdatedAtHandler.isAnimating()}
				/>
			</p>
		</div>
	)
}

const Title = ({ title }: { title: string }) => {
	const { addSelfToAnimationList, onFinish, isAnimating, isFinished } =
		useAnimationList(`project title ${title}`)

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	return (
		<h3 className="title text-3xl underline w-full break-words">
			<TypingText
				isFinished={isFinished()}
				text={title}
				onFinish={() => onFinish()}
				startTyping={isAnimating()}
			/>
		</h3>
	)
}

const LinkGroup = ({ links }: { links: ProjectLink[] }) => {
	const { addSelfToAnimationList, onFinish, isAnimating } = useAnimationList(
		`project links ${links[0].href}`,
	)

	const [visibleIcons, setVisibleIcons] = useState(0)

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	useEffect(() => {
		if (!isAnimating()) return
		const interval = setInterval(() => {
			setVisibleIcons(visibleIcons + 1)
		}, 500)

		if (visibleIcons === links.length) {
			clearInterval(interval)
			onFinish()
		}
		return () => clearInterval(interval)
	}, [isAnimating, visibleIcons, onFinish, links.length])

	return (
		<div className="flex gap-2 h-10">
			{links.map(({ href, icon: iconName }, index) => {
				let icon: ReactNode

				switch (iconName) {
					case "github":
						icon = <GitHubIcon />
						break
					case "bambulab":
						icon = <BambuLabIcon />
						break
					case "link":
						icon = <LinkIcon />
						break
					case "substack":
						icon = <SubstackIcon />
						break
					case "spotify":
						icon = <SpotifyIcon />
						break
					default:
						icon = <p>Unknown Icon</p>
				}

				return (
					// TODO make this accessible
					<a
						key={href}
						href={href}
						className={cn(visibleIcons > index ? "visible" : "hidden")}
					>
						{icon}
					</a>
				)
			})}
		</div>
	)
}

const Body = ({ body }: { body: string }) => {
	const { addSelfToAnimationList, onFinish, isAnimating, isFinished } =
		useAnimationList(`project title ${body}`)

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	return (
		<p className="body">
			<TypingText
				isFinished={isFinished()}
				text={body}
				onFinish={() => onFinish()}
				startTyping={isAnimating()}
			/>
		</p>
	)
}

const VisualContent = ({
	visualContent,
	title,
}: { visualContent: ReactNode; title: string }) => {
	const { addSelfToAnimationList, onFinish, isAnimating, isFinished } =
		useAnimationList(`project title image ${title}`)

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	useEffect(() => {
		if (!isAnimating()) return

		setTimeout(() => {
			onFinish()
		}, 500)
	}, [isAnimating, onFinish])

	return (
		<div
			className={cn(
				"w-full md:w-1/2 flex-1 flex justify-end",
				isFinished() ? "visible" : "hidden",
			)}
		>
			{visualContent}
		</div>
	)
}

export const Project = ({
	title,
	links,
	createdAt,
	lastUpdatedAt,
	description,
	visualContent,
}: ProjectType) => {
	return (
		<div className="flex flex-col gap-5 md:flex-row justify-between">
			<div className="flex flex-col gap-5 flex-1">
				<div className="flex flex-col gap-2 justify-start items-start">
					<Title title={title} />
					<LinkGroup links={links} />
					<Dates createdAt={createdAt} lastUpdatedAt={lastUpdatedAt} />
				</div>
				<Body body={description} />
			</div>
			<VisualContent visualContent={visualContent} title={title} />
		</div>
	)
}
