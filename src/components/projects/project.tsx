import type { ReactNode } from "react"
import { TypingText } from "../typingText"
import {
	BambuLabIcon,
	GitHubIcon,
	LinkIcon,
	SpotifyIcon,
	SubstackIcon,
} from "../icons"

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
	return (
		<div>
			<p className="body font-bold">
				Created: <span className="body font-normal">{createdAt}</span>
			</p>
			<p className="body font-bold">
				Last Updated: <span className="body font-normal">{lastUpdatedAt}</span>
			</p>
		</div>
	)
}

const Title = ({ title }: { title: string }) => {
	return (
		<h3 className="title text-3xl">
			<TypingText text={title} typingQueuePosition={3} />
		</h3>
	)
}

const LinkGroup = ({ links }: { links: ProjectLink[] }) => {
	return (
		<div className="flex gap-2 h-8">
			{links.map(({ href, icon: iconName }) => {
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
					<a key={href} href={href}>
						{icon}
					</a>
				)
			})}
		</div>
	)
}

const Body = ({ body }: { body: string }) => {
	return <p className="body">{body}</p>
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
		<div className="flex flex-col gap-5 sm:flex-row justify-between">
			<div className="flex flex-col gap-5 flex-1">
				<div className="flex flex-col gap-2">
					<Title title={title} />
					<LinkGroup links={links} />
					<Dates createdAt={createdAt} lastUpdatedAt={lastUpdatedAt} />
				</div>
				<Body body={description} />
			</div>
			<div className="w-1/2 flex-1 flex justify-end">{visualContent}</div>
		</div>
	)
}
