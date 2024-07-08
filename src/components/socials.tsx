import { GitHubIcon, SpotifyIcon, SubstackIcon, XIcon } from "./icons"

export const Socials = () => {
	return (
		<div className="flex gap-8  h-10">
			<a href="https://github.com/work-in-progress-danny/">
				<GitHubIcon />
			</a>

			<a href="https://x.com/w_i_p_danny">
				<XIcon />
			</a>

			<a href="https://substack.com/w_i_p_danny">
				<SubstackIcon />
			</a>

			<a href="https://spotify.com/w_i_p_danny">
				<SpotifyIcon />
			</a>
		</div>
	)
}
