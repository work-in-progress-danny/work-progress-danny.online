import { TypingText } from "../components/typingText"
import { useAnimationList } from "../lib/AnimationList"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { IndustrialDesignProjects, WebProjects } from "../components/projects"

const Title = () => {
	const { onFinish, getIsAnimating, getIsFinished } = useAnimationList("InProgress title")
	const isFinished = getIsFinished()
	const isAnimating = getIsAnimating()

	return (
		<h2 className="title text-5xl pb-2 md:pb-5">
			<TypingText
				text="PROJECTS"
				onFinish={onFinish}
				isFinished={isFinished}
				startTyping={isAnimating}
			/>
		</h2>
	)
}

const Project = () => {
	const industrialDesignProjectsAnimation = useAnimationList(
		"InProgress projects tab industrial design projects",
	)

	const webProjectsAnimation = useAnimationList("InProgress projects tab web projects")

	return (
		<Tabs defaultValue="web development" className="">
			<TabsList>
				<TabsTrigger value="web development">
					<TypingText
						text="Web Development & Design"
						startTyping={webProjectsAnimation.getIsAnimating()}
						onFinish={webProjectsAnimation.onFinish}
						isFinished={webProjectsAnimation.getIsFinished()}
					/>
				</TabsTrigger>
				<TabsTrigger value="industrial design">
					<TypingText
						text="3D Modeling & Product Design"
						startTyping={industrialDesignProjectsAnimation.getIsAnimating()}
						onFinish={industrialDesignProjectsAnimation.onFinish}
						isFinished={industrialDesignProjectsAnimation.getIsFinished()}
					/>
				</TabsTrigger>
			</TabsList>
			<TabsContent value="web development">
				<WebProjects />
			</TabsContent>
			<TabsContent value="industrial design">
				<IndustrialDesignProjects />
			</TabsContent>
		</Tabs>
	)
}

export const InProgress = () => {
	return (
		<div className="w-full flex flex-col">
			<Title />
			<Project />
		</div>
	)
}
