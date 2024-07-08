import { useEffect, useState } from "react"
import { GitHubIcon, SpotifyIcon, SubstackIcon, XIcon } from "./icons"
import { useAnimationList } from "../lib/AnimationList"
import { cn } from "../lib/utils"

export const Socials = () => {
	const { addSelfToAnimationList, onFinish, isAnimating } =
		useAnimationList("intro socials")
	const [visibleIcons, setVisibleIcons] = useState(0)

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	useEffect(() => {
		if (!isAnimating()) return
		const interval = setInterval(() => {
			setVisibleIcons(visibleIcons + 1)
		}, 500)

		if (visibleIcons === 4) {
			clearInterval(interval)
			onFinish()
		}
		return () => clearInterval(interval)
	}, [isAnimating, visibleIcons, onFinish])

	return (
		<div className="flex justify-between h-8 md:gap-8 md:h-10">
			<a
				className={cn(visibleIcons > 0 ? "visible" : "hidden")}
				href="https://github.com/work-in-progress-danny/"
			>
				<GitHubIcon />
			</a>

			<a
				className={cn(visibleIcons > 1 ? "visible" : "hidden")}
				href="https://x.com/w_i_p_danny"
			>
				<XIcon />
			</a>

			<a
				className={cn(visibleIcons > 2 ? "visible" : "hidden")}
				href="https://substack.com/w_i_p_danny"
			>
				<SubstackIcon />
			</a>

			<a
				className={cn(visibleIcons > 3 ? "visible" : "hidden")}
				href="https://spotify.com/w_i_p_danny"
			>
				<SpotifyIcon />
			</a>
		</div>
	)
}
