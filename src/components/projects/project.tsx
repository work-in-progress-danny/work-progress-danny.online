import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import type { ProjectIdType } from "."
import { useAnimationList } from "../../lib/AnimationList"
import { cn } from "../../lib/utils"
import { DragItIn } from "../dragItIn"
import { BambuLabIcon, GitHubIcon, LinkIcon, SpotifyIcon, SubstackIcon } from "../icons"
import { TypingText } from "../typingText"

export type ProjectIdTypes =
	| ProjectIdType
	| ProjectLinkIdType
	| ProjectDateIdType
	| ProjectBodyIdType
	| ProjectVisualContentIdType

export type ProjectLinkIdType = `${ProjectIdType}-link-${string}`
export type ProjectDateIdType = `${ProjectIdType}-date-${string}`
export type ProjectBodyIdType = `${ProjectIdType}-body-${string}`
export type ProjectVisualContentIdType = `${ProjectIdType}-visualContent-${string}`

export type ProjectLink = {
	href: string
	text: string
	icon: "github" | "bambulab" | "link" | "substack" | "spotify"
}

export type ProjectType = {
	title: ProjectIdType
	description: string
	createdAt: string
	lastUpdatedAt: string
	links: ProjectLink[]
	visualContent: ReactNode
}

const Dates = ({
	createdAt,
	lastUpdatedAt,
	projectId,
}: { createdAt: string; lastUpdatedAt: string; projectId: ProjectIdType }) => {
	const createdAtHandlers = useAnimationList(`${projectId}-date-${createdAt}`)
	const lastUpdatedAtHandler = useAnimationList(`${projectId}-date-${lastUpdatedAt}`)

	return (
		<div>
			<p className="body">
				<TypingText
					isFinished={createdAtHandlers.getIsFinished()}
					text={`Created: ${createdAt}`}
					onFinish={() => createdAtHandlers.onFinish()}
					startTyping={createdAtHandlers.getIsAnimating()}
				/>
			</p>
			<p className="body">
				<TypingText
					isFinished={lastUpdatedAtHandler.getIsFinished()}
					text={`Last Updated: ${lastUpdatedAt}`}
					onFinish={() => lastUpdatedAtHandler.onFinish()}
					startTyping={lastUpdatedAtHandler.getIsAnimating()}
				/>
			</p>
		</div>
	)
}

const Title = ({ title }: { title: ProjectIdType }) => {
	const {
		onFinish,
		getIsAnimating: isAnimating,
		getIsFinished: isFinished,
	} = useAnimationList(title)

	return (
		<h3 className="title text-3xl w-full break-words">
			<TypingText
				isFinished={isFinished()}
				text={title}
				onFinish={() => onFinish()}
				startTyping={isAnimating()}
			/>
		</h3>
	)
}

const LinkGroup = ({ links, projectId }: { links: ProjectLink[]; projectId: ProjectIdType }) => {
	const { onFinish, getIsAnimating, getIsFinished } = useAnimationList(
		`${projectId}-link-${links[0].href}`,
	)
	const isAnimating = getIsAnimating()
	const isFinished = getIsFinished()

	const [visibleIcons, setVisibleIcons] = useState(0)

	useEffect(() => {
		if (!isAnimating) return
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
						icon = <LinkIcon tooltipContent={href} />
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
						className={cn(visibleIcons > index || isFinished ? "visible" : "hidden")}
					>
						{icon}
					</a>
				)
			})}
		</div>
	)
}

const Body = ({ body, projectId }: { body: string; projectId: ProjectIdType }) => {
	const {
		onFinish,
		getIsAnimating: isAnimating,
		getIsFinished: isFinished,
	} = useAnimationList(`${projectId}-body-${body}`)

	return (
		<p className="body whitespace-pre-line">
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
}: { visualContent: ReactNode; title: ProjectIdType }) => {
	return (
		<div className={"w-full md:w-1/2 flex-1 flex justify-end"}>
			<DragItIn id={`${title}-visualContent-${title}`}>{visualContent}</DragItIn>
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
					<LinkGroup links={links} projectId={title} />
					<Dates createdAt={createdAt} lastUpdatedAt={lastUpdatedAt} projectId={title} />
				</div>
				<Body body={description} projectId={title} />
			</div>
			<VisualContent visualContent={visualContent} title={title} />
		</div>
	)
}
